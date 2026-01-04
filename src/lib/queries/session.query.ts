import { queryOptions } from "@tanstack/react-query";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { QueryKeys } from "./config/keys";

export const sessionQueryOptions = queryOptions({
  queryKey: [QueryKeys.session] as const,
  queryFn: async () => await getSession(),
  staleTime: 0,
});

export const getSession = createIsomorphicFn()
  .server(async () => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    });
    return session;
  })
  .client(async () => {
    const session = await authClient.getSession();
    return session.data;
  });
