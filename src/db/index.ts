import { createServerOnlyFn } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/d1";
import { getWorkersEnv } from "@/lib/server/workers.server";
import * as schema from "./schema";

export const getDb = createServerOnlyFn(() => {
  const db = drizzle(getWorkersEnv().DB, { schema });
  return db;
});
