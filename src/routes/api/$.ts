import { createFileRoute } from "@tanstack/react-router";
import { Hono } from "hono";
import { auth } from "@/lib/auth";

const app = new Hono().basePath("/api");

app.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      GET: ({ request }) => {
        return app.fetch(request);
      },
      POST: ({ request }) => {
        return app.fetch(request);
      },
      PUT: ({ request }) => {
        return app.fetch(request);
      },
      DELETE: ({ request }) => {
        return app.fetch(request);
      },
      PATCH: ({ request }) => {
        return app.fetch(request);
      },
    },
  },
});
