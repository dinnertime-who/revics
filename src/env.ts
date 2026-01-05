import { createServerFn, createServerOnlyFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * `VITE_`로 시작하는 키만 추출하는 유틸리티 타입
 */
export type ExtractViteKeys<T> = {
  [K in keyof T as K extends `VITE_${string}` ? K : never]: T[K];
};

const publicEnvSchema = z.object({
  VITE_APP_TITLE: z.string(),
  VITE_APP_URL: z.string(),
});

const envSchema = publicEnvSchema.extend({});

export const getServerEnv = createServerOnlyFn(() => {
  return envSchema.parse(process.env);
});

export const getEnv = createServerFn({ method: "GET" }).handler(() => {
  const serverEnv = getServerEnv();

  const env = Object.fromEntries(
    Object.entries(serverEnv).filter(([key]) => key.startsWith("VITE_")),
  ) as ExtractViteKeys<typeof serverEnv>;

  return env;
});
