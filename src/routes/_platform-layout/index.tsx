import { createFileRoute } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { env } from "@/env";

const getTestEnv = createIsomorphicFn()
  .server(() => env.TEST_ENV)
  .client(() => env.VITE_TEST_ENV);

export const Route = createFileRoute("/_platform-layout/")({
  loader: async () => {
    console.log(getTestEnv());
  },
  component: RouteComponent,
});

function RouteComponent() {
  console.log(getTestEnv());
  return <div></div>;
}
