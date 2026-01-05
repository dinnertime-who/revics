import { createFileRoute, Outlet } from "@tanstack/react-router";
import { sessionQueryOptions } from "@/lib/queries/session.query";

export const Route = createFileRoute("/_platform")({
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(sessionQueryOptions);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <main className="bg-[#030305]">
        <Outlet />
      </main>
    </div>
  );
}
