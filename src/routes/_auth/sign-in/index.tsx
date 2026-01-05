import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/card";

export const Route = createFileRoute("/_auth/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Card className="w-full max-w-md mx-auto my-32">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
