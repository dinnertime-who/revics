import { createIsomorphicFn, createServerFn, createServerOnlyFn } from "@tanstack/react-start";
import { z } from "zod";

const publicEnvSchema = z.object({
  VITE_APP_TITLE: z.string(),
  VITE_APP_URL: z.string(),
});

const envSchema = publicEnvSchema.extend({});

export const getServerEnv = createServerOnlyFn(() => {
  return envSchema.parse(process.env);
});

const getServerEnvFn = createServerFn({ method: "GET" }).handler(() => {
  const serverEnv = getServerEnv();
  const env = Object.fromEntries(Object.entries(serverEnv).filter(([key]) => key.startsWith("VITE_")));
  return env as z.infer<typeof publicEnvSchema>;
});

export const getEnv = createIsomorphicFn()
  .server(async () => {
    return getServerEnv();
  })
  .client(async () => {
    if (!(window as any).env) {
      (window as any).env = await getServerEnvFn();
    }
    return publicEnvSchema.parse((window as any).env);
  });
