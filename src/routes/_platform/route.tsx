import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
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
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
              <div className="w-5 h-5 bg-linear-to-br from-indigo-500 to-cyan-400 rounded-sm"></div>
              REVIX
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">
              기능
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              요금제
            </a>
            <a href="#docs" className="hover:text-white transition-colors">
              문서
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/sign-in"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block"
            >
              로그인
            </Link>
            <Link
              to="/"
              className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors"
            >
              무료 시작하기
            </Link>
          </div>
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
