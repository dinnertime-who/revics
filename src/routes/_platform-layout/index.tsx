import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform-layout/")({
  loader: async () => {},
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="font-light">Light Font</div>
      <div className="font-normal">Normal Font</div>
      <div className="font-medium">Medium Font</div>
      <div className="font-semibold">Semibold Font</div>
      <div className="font-bold">Bold Font</div>
      <div className="font-extrabold">Extrabold Font</div>
    </div>
  );
}
