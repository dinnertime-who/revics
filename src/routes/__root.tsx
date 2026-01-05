import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, ErrorComponent, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { env } from "@/env";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: env.VITE_APP_TITLE },
      { name: "description", content: "레빅스(Revics) - 트래픽 전송료 0원, AI 기반 무제한 이미지 호스팅" },
      { name: "keywords", content: "레빅스, Revics, 트래픽, 전송료, 0원, AI, 기반, 무제한, 이미지, 호스팅, 무료" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "og:title", content: env.VITE_APP_TITLE },
      { name: "og:description", content: "레빅스(Revics) - 트래픽 전송료 0원, AI 기반 무제한 이미지 호스팅" },
      // { name: "og:image", content: "https://revics.kr/og-image.png" },
      { name: "og:url", content: env.VITE_APP_URL },
      { name: "og:type", content: "website" },
      { name: "og:locale", content: "ko_KR" },
      { name: "og:site_name", content: "레빅스(Revics)" },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "630" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => {
    console.error(error);
    return <ErrorComponent error={error} />;
  },
});

function NotFound() {
  return <div>Not Found</div>;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#030305]">
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
