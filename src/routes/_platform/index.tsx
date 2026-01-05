import { Icon } from "@iconify/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="parallax-layer absolute top-0 left-1/4 w-3/4 h-3/4 bg-indigo-900/10 rounded-full blur-[120px]"
          data-speed="0.05"
        ></div>
        <div
          className="parallax-layer absolute bottom-0 right-1/4 w-2/3 h-2/3 bg-blue-900/10 rounded-full blur-[120px]"
          data-speed="0.08"
        ></div>
        <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030305]/80 to-[#030305] z-0"></div>
      </div>

      {/* Navbar */}

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Typography */}
          <div className="max-w-2xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              데이터 전송료(Egress Fee) 제로
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              트래픽 전송료 0원,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-white to-cyan-300">
                이미지 관리의 기준.
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              무료 플랜의 5GB 기본 용량부터 프로 플랜의 넉넉한 100GB 저장 공간까지. 전송료 부담 없는 무제한 트래픽과 AI
              기반 자동화 워크플로우를 경험하세요.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2 group"
              >
                지금 무료로 시작하기
                <Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform"></Icon>
              </button>
              <button
                type="button"
                className="px-6 py-3 rounded-md text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 transition-all"
              >
                요금제 확인
              </button>
            </div>
          </div>

          {/* Right: Dashboard UI */}
          <div className="relative reveal stagger-1 lg:h-[500px] flex items-center justify-center">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-cyan-500/20 blur-[80px] rounded-full"></div>

            {/* Main Dashboard Card */}
            <div className="relative w-full glass-panel rounded-xl overflow-hidden shadow-2xl border-t border-white/20 transform md:rotate-y-[-10deg] md:rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">
              {/* Fake Window Controls */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-4 px-3 py-1 bg-black/40 rounded text-[10px] text-slate-500 font-mono w-64 border border-white/5 flex justify-between items-center">
                  <span>revix.io/dashboard/images</span>
                  <Icon icon="lucide:lock" width="10"></Icon>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-[#0a0a0c]">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-200">저장소 사용량</h3>
                    <p className="text-xs text-slate-500 mt-1">총 100GB 중 42GB 사용</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-emerald-400 font-medium flex items-center justify-end gap-1">
                      <Icon icon="lucide:trending-up" width="12"></Icon>
                      전송료 0원 절감
                    </div>
                  </div>
                </div>

                {/* Usage Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full mb-8 overflow-hidden">
                  <div className="h-full bg-linear-to-r from-indigo-500 to-cyan-400 w-[42%]"></div>
                </div>

                {/* Grid of Images */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-lg bg-slate-800/50 border border-white/5 relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white">product_01.jpg</span>
                    </div>
                    <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">
                      <Icon icon="lucide:image" width="24"></Icon>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-800/50 border border-white/5 relative group">
                    <div className="absolute top-2 right-2 bg-indigo-500 text-white text-[9px] px-1.5 py-0.5 rounded font-medium">
                      AI
                    </div>
                    <div className="w-full h-full bg-slate-700/50 flex items-center justify-center text-slate-600">
                      <Icon icon="lucide:image" width="24"></Icon>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-800/50 border flex items-center justify-center group border-dashed border-slate-600 hover:border-slate-400 transition-colors">
                    <Icon icon="lucide:plus" className="text-slate-500 group-hover:text-slate-300" width="20"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Proof */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">
            Trusted by Innovative Teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <Icon icon="simple-icons:vercel" width="96" height="36" className="text-white"></Icon>
            <Icon icon="simple-icons:stripe" width="96" height="36" className="text-white"></Icon>
            <Icon icon="simple-icons:linear" width="96" height="36" className="text-white"></Icon>
            <Icon icon="simple-icons:supabase" width="96" height="36" className="text-white"></Icon>
            <Icon icon="simple-icons:openai" width="96" height="36" className="text-white"></Icon>
          </div>
        </div>
      </section>

      {/* Feature 1: Unlimited Traffic */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 reveal">
            {/* Chart Visualization */}
            <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Icon icon="lucide:bar-chart-2" width="120" height="120"></Icon>
              </div>
              <h4 className="text-sm font-medium text-slate-400 mb-6">월간 트래픽 비용 비교</h4>
              <div className="space-y-4">
                {/* Competitor */}
                <div>
                  <div className="flex justify-between text-xs mb-1 text-slate-500">
                    <span>타사 서비스 (AWS S3 등)</span>
                    <span>₩ 1,200,000+</span>
                  </div>
                  <div className="h-8 w-full bg-slate-800 rounded-md overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-slate-600 w-3/4"></div>
                    <div className="absolute inset-y-0 left-0 w-full flex items-center px-3">
                      <span className="text-[10px] text-white/50">트래픽 증가시 비용 급증</span>
                    </div>
                  </div>
                </div>
                {/* Revix */}
                <div>
                  <div className="flex justify-between text-xs mb-1 text-indigo-300">
                    <span>Revix (레빅스)</span>
                    <span>₩ 0</span>
                  </div>
                  <div className="h-8 w-full bg-slate-800 rounded-md overflow-hidden relative border border-indigo-500/30">
                    <div className="absolute inset-y-0 left-0 bg-indigo-600 w-[5%]"></div>
                    <div className="absolute inset-y-0 left-0 w-full flex items-center px-3 justify-between">
                      <span className="text-[10px] text-white">비용 고정 (0원)</span>
                      <Icon icon="lucide:infinity" width="14" className="text-indigo-200"></Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 reveal stagger-1">
            <Icon icon="lucide:zap" className="text-indigo-400 mb-4" width="32"></Icon>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              아무리 많이 서빙해도
              <br />
              전송료(Egress Fee)는 0원
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              트래픽이 폭증해도 추가 요금이 발생하지 않습니다. 모든 요금제에서 제한 없는 이미지 전송을 보장하며,
              초저지연 인프라를 통해 글로벌 어디서나 빠르게 이미지를 서빙합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-indigo-400 mt-0.5" width="16"></Icon>
                트래픽 폭증에도 추가 요금 발생 없음
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-indigo-400 mt-0.5" width="16"></Icon>
                모든 요금제 무제한 전송 보장
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-indigo-400 mt-0.5" width="16"></Icon>
                글로벌 CDN 기반 초고속 서빙
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: Version Management */}
      <section className="py-24 md:py-32 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <Icon icon="lucide:git-branch" className="text-cyan-400 mb-4" width="32"></Icon>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              이미지는 바뀌어도 URL은 그대로,
              <br />
              스마트 버전 관리
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              이미지를 수정해도 URL을 변경할 필요가 없습니다. 퍼머링크 기술로 최신 버전을 자동으로 서빙하며, 언제든 이전
              버전으로 즉시 복구할 수 있습니다.
            </p>
            <div className="flex gap-4">
              <div className="pl-4 border-l border-cyan-500/30">
                <div className="text-xl font-medium text-white mb-1">Auto-Versioning</div>
                <div className="text-sm text-slate-500">자동 기록 및 관리</div>
              </div>
              <div className="pl-4 border-l border-slate-700">
                <div className="text-xl font-medium text-white mb-1">Rollback</div>
                <div className="text-sm text-slate-500">즉시 복구 가능</div>
              </div>
            </div>
          </div>

          <div className="reveal stagger-1">
            {/* Code/URL Visualization */}
            <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
              <div className="bg-[#0f0f11] border-b border-white/5 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                </div>
                <div className="bg-black/50 rounded px-3 py-1 text-xs text-slate-400 font-mono flex-1 text-center truncate">
                  https://cdn.revix.io/u/banner-main.png
                </div>
              </div>
              <div className="p-6 bg-[#050507]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 relative">
                    <Icon icon="lucide:image" className="text-slate-500" width="24"></Icon>
                    <span className="absolute -top-2 -right-2 bg-green-500 text-black text-[9px] px-1.5 rounded-full font-bold">
                      v3
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-white">banner-main.png</span>
                      <span className="text-xs text-slate-500">Just now</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="text-xs text-green-400 mt-1">Live serving (Latest)</div>
                  </div>
                </div>

                {/* History List */}
                <div className="space-y-3 opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-800/40 rounded-lg flex items-center justify-center border border-white/5 relative grayscale">
                      <Icon icon="lucide:image" className="text-slate-600" width="24"></Icon>
                      <span className="absolute -top-2 -right-2 bg-slate-600 text-white text-[9px] px-1.5 rounded-full">
                        v2
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-400 line-through">banner-main.png</span>
                        <span className="text-xs text-slate-600">2h ago</span>
                      </div>
                      <div className="text-xs text-slate-500">Archived</div>
                    </div>
                    <button
                      type="button"
                      className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400 hover:text-white hover:border-white/30"
                    >
                      Rollback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: AI Background Removal */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-medium mb-6">
            <Icon icon="lucide:sparkles" width="12"></Icon>
            AI Powered Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            클릭 한 번으로 완성되는
            <br />
            프로페셔널 배경 제거
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            디자인 툴을 켤 필요 없이 대시보드 내에서 즉시 고품질 누끼 이미지를 생성하세요. AI의 정교한 사물 인식으로
            배경만 투명하게 처리합니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 reveal stagger-1">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center h-[400px]">
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Interaction Simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Original Object Placeholder */}
                <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:translate-x-[-100px] transition-transform duration-700 ease-in-out z-10">
                  <Icon icon="lucide:shopping-bag" width="64" className="text-slate-900"></Icon>
                  <span className="absolute bottom-4 text-xs font-bold text-slate-400">Original</span>
                </div>

                {/* AI Processed Object Placeholder */}
                <div className="absolute inset-0 bg-[url('https://t3.ftcdn.net/jpg/02/54/29/18/360_F_254291899_rFgM9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9Y9.jpg')] bg-repeat rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-500 transform group-hover:translate-x-[100px] transition-transform duration-700 ease-in-out z-0 opacity-0 group-hover:opacity-100">
                  <Icon icon="lucide:shopping-bag" width="64" className="text-slate-900 drop-shadow-xl"></Icon>
                  <span className="absolute bottom-4 text-xs font-bold text-indigo-600 bg-white/80 px-2 py-0.5 rounded">
                    AI Removed
                  </span>
                </div>

                {/* Center Action */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-white/20 group-hover:opacity-0 transition-opacity">
                  <Icon icon="lucide:wand-2" width="16"></Icon>
                  Hover to Remove BG
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Semantic Search */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 reveal">
            {/* Search UI */}
            <div className="glass-panel p-6 rounded-xl border border-white/10">
              <div className="relative mb-6">
                <Icon icon="lucide:search" className="absolute left-3 top-3 text-indigo-400" width="20"></Icon>
                <input
                  type="text"
                  value="해변에서 뛰고 있는 강아지 사진"
                  readOnly
                  className="w-full bg-[#030305] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Result 1 */}
                <div className="aspect-video bg-slate-800 rounded-lg border border-indigo-500/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-3">
                    <div className="w-full">
                      <div className="text-[10px] text-indigo-300 mb-0.5">유사도 98%</div>
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-indigo-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Icon icon="lucide:dog" className="text-white/50" width="16"></Icon>
                  </div>
                </div>
                {/* Result 2 */}
                <div className="aspect-video bg-slate-800/50 rounded-lg border border-white/5 relative overflow-hidden opacity-60">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon="lucide:image" className="text-slate-600" width="24"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 reveal stagger-1">
            <Icon icon="lucide:brain-circuit" className="text-purple-400 mb-4" width="32"></Icon>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              파일명이 기억 안 나도
              <br />
              맥락으로 찾는 스마트 검색
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              단순 키워드 매칭이 아닙니다. 이미지의 내용을 이해하는 벡터 검색 엔진이 탑재되어, 문장형 자연어로 검색해도
              정확한 결과를 찾아냅니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-purple-400 mt-0.5" width="16"></Icon>
                벡터 검색 엔진 탑재
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-purple-400 mt-0.5" width="16"></Icon>
                문장형 자연어 검색 (RAG)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Icon icon="lucide:check" className="text-purple-400 mt-0.5" width="16"></Icon>
                유사도 기반 시각적 검색
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              단순 호스팅을 넘어선
              <br />
              토탈 이미지 솔루션
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal stagger-1">
            {/* Card 1 */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/4 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Icon icon="lucide:type" className="text-indigo-400" width="20"></Icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">AI 오타 교정</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                이미지 내 한글 오타를 실시간으로 감지하고 교정 제안을 제공합니다.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/4 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Icon icon="lucide:bar-chart" className="text-cyan-400" width="20"></Icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">정밀 통계 분석</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                도메인별 소비량, 트래픽 유입 경로 등 상세한 사용 현황을 시각화합니다.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/4 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <Icon icon="lucide:file-output" className="text-emerald-400" width="20"></Icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">다양한 내보내기</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                이미지들을 HTML 코드로 변환하거나 PDF로 병합하여 내보낼 수 있습니다.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/4 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                <Icon icon="lucide:shield-check" className="text-rose-400" width="20"></Icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">강력한 보안</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                지정된 도메인 외 접근을 차단하는 핫링크 방지 기능으로 무단 도용을 막습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              투명하고 합리적인 요금제
            </h2>
            <p className="text-slate-400">숨겨진 비용 없이, 필요한 만큼만 시작하세요.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-2xl border border-white/10 bg-white/2 p-8 reveal">
              <h3 className="text-lg font-medium text-white mb-2">Free Plan</h3>
              <div className="text-3xl font-semibold text-white mb-6">
                0원 <span className="text-sm text-slate-500 font-normal">/ 월</span>
              </div>
              <p className="text-sm text-slate-400 mb-8">개인 프로젝트 및 초기 스타트업을 위한 기본 플랜</p>

              <a
                href="/"
                className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors mb-8"
              >
                시작하기
              </a>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-slate-500" width="16"></Icon>
                  저장 공간 5GB
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-slate-500" width="16"></Icon>
                  <span className="text-white font-medium">트래픽 무제한</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-slate-500" width="16"></Icon>
                  기본 CDN 제공
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/2 p-8 relative reveal stagger-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Pro Plan</h3>
              <div className="text-3xl font-semibold text-white mb-6">
                9,900원
                <span className="text-sm text-slate-500 font-normal">/ 월</span>
              </div>
              <p className="text-sm text-slate-400 mb-8">본격적인 서비스를 위한 넉넉한 용량과 AI 기능</p>

              <a
                href="/"
                className="block w-full py-2.5 rounded-lg bg-indigo-600 text-center text-sm font-medium text-white hover:bg-indigo-500 transition-colors mb-8 shadow-lg shadow-indigo-500/20"
              >
                지금 시작하기
              </a>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-indigo-400" width="16"></Icon>
                  저장 공간 <span className="text-white font-medium">100GB</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-indigo-400" width="16"></Icon>
                  <span className="text-white font-medium">트래픽 무제한 (전송료 0원)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-indigo-400" width="16"></Icon>
                  AI 크레딧 30회 제공
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon icon="lucide:check" className="text-indigo-400" width="16"></Icon>
                  우선 기술 지원
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030305] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-linear-to-br from-indigo-500 to-cyan-400 rounded-sm"></div>
                REVIX
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                AI 통합형 고성능 무제한 이미지 호스팅 솔루션.
                <br />
                데이터 전송료 걱정 없이 서비스를 확장하세요.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Product</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-slate-600">© 2024 Revix Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Icon
                icon="lucide:twitter"
                width="16"
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              ></Icon>
              <Icon
                icon="lucide:github"
                width="16"
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              ></Icon>
              <Icon
                icon="lucide:linkedin"
                width="16"
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              ></Icon>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
