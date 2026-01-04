import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/")({
  loader: async () => {},

  component: RouteComponent,
});

function RouteComponent() {
  return <div></div>;
}
