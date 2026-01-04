import { inferAdditionalFields, lastLoginMethodClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";

export const authClient = createAuthClient({
  plugins: [
    lastLoginMethodClient(), //
    organizationClient(),
    inferAdditionalFields<typeof auth>(),
  ],
});
