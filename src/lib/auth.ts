import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { lastLoginMethod, organization } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { getDb } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(getDb(), { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        default: "user",
        enum: ["user", "admin"],
      },
    },
  },
  plugins: [
    organization(), //
    lastLoginMethod(),
    tanstackStartCookies(),
  ],
});
