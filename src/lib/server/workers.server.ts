import { env } from "cloudflare:workers";
import { createServerOnlyFn } from "@tanstack/react-start";

export const getWorkersEnv = createServerOnlyFn(() => {
  return env;
});
