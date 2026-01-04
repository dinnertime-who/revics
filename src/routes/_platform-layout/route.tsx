import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform-layout")({
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
