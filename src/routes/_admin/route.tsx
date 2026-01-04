import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { sessionQueryOptions } from "@/lib/queries/session.query";

export const Route = createFileRoute("/_admin")({
  loader: async ({ context }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions);
    if (!session || session.user.role !== "admin") {
      throw redirect({ to: "/sign-in" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
