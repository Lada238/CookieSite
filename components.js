// Общие компоненты (@layer components + @apply), символ белорусского рубля и верхнее меню для новых страниц
document.write(`<style type="text/tailwindcss">
@layer components {
  .h1 { @apply text-3xl font-extrabold tracking-tight sm:text-4xl; }
  .h2 { @apply text-2xl font-bold; }
  .body { @apply text-sm leading-6 text-slate-600 dark:text-slate-300; }
  .btn { @apply inline-flex items-center justify-center gap-2 rounded-lg font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50; }
  .btn-sm { @apply px-3 py-1.5 text-xs; } .btn-md { @apply px-4 py-2 text-sm; } .btn-lg { @apply px-6 py-3 text-base; }
  .btn-primary { @apply bg-brand-600 text-white hover:bg-brand-700; }
  .btn-secondary { @apply border border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700; }
  .btn-ghost { @apply hover:bg-slate-100 dark:hover:bg-slate-700; }
  .btn-danger { @apply bg-danger text-white hover:bg-brand-800; }
  .input { @apply w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 aria-[invalid=true]:border-danger dark:border-slate-600 dark:bg-slate-900; }
  .card { @apply rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800; }
  .badge { @apply inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium; }
  .badge-success { @apply bg-mist-100 text-mist-700 dark:bg-mist-200/20 dark:text-mist-200; }
  .badge-warning { @apply bg-peach-100 text-peach-700 dark:bg-peach-200/20 dark:text-peach-200; }
  .badge-error { @apply bg-brand-100 text-brand-700 dark:bg-brand-300/20 dark:text-brand-200; }
  .alert { @apply rounded-lg border-l-4 p-3 text-sm; }
  .alert-info { @apply border-info bg-mist-100 text-mist-700 dark:bg-mist-200/10 dark:text-mist-200; }
  .alert-success { @apply border-success bg-mist-100 text-mist-700 dark:bg-mist-200/10 dark:text-mist-200; }
  .alert-error { @apply border-danger bg-brand-50 text-brand-800 dark:bg-brand-300/10 dark:text-brand-200; }
}
.ic { display: inline-block; width: 1.15em; height: 1.15em; vertical-align: -.2em; background: currentColor; -webkit-mask: var(--i) center / contain no-repeat; mask: var(--i) center / contain no-repeat; }
.ic-moon { --i: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z'/%3E%3C/svg%3E"); }
.ic-sun { --i: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='4.6'/%3E%3Cg%3E%3Ccircle cx='12' cy='3.2' r='1.3'/%3E%3Ccircle cx='12' cy='20.8' r='1.3'/%3E%3Ccircle cx='3.2' cy='12' r='1.3'/%3E%3Ccircle cx='20.8' cy='12' r='1.3'/%3E%3Ccircle cx='5.8' cy='5.8' r='1.3'/%3E%3Ccircle cx='18.2' cy='18.2' r='1.3'/%3E%3Ccircle cx='18.2' cy='5.8' r='1.3'/%3E%3Ccircle cx='5.8' cy='18.2' r='1.3'/%3E%3C/g%3E%3C/svg%3E"); }
.ic-check { --i: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9.4 17.2 5 12.8l1.6-1.6 2.8 2.8 8-8L19 6.6z'/%3E%3C/svg%3E"); }
.ic-x { --i: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z'/%3E%3C/svg%3E"); }
/* Новый знак белорусского рубля: буква Б с горизонтальной перекладиной */
.byn { position: relative; display: inline-block; font-weight: 700; }
.byn::after { content: ""; position: absolute; left: 6%; right: 2%; top: 52%; height: .09em; background: currentColor; }
</style>`);
addEventListener('DOMContentLoaded', () => {
  const links = [['index.html','Главная'],['app.html','Панель'],['dashboard.html','Дашборд'],['form.html','Форма'],['catalog.html','Каталог'],['design.html','Дизайн-система'],['excel.html','Excel']];
  document.body.insertAdjacentHTML('afterbegin', `<header id="site-nav" class="fixed inset-x-0 top-0 z-[60] border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"><nav aria-label="Страницы" class="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-2 text-sm">${links.map(([h, t]) => `<a class="rounded-md px-3 py-1.5 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-brand-500 dark:hover:bg-slate-800" href="${h}">${t}</a>`).join('')}<button data-theme class="btn btn-secondary btn-sm ml-auto" aria-label="Тема"><span class="dark:hidden"><i class="ic ic-moon"></i></span><span class="hidden dark:inline"><i class="ic ic-sun"></i></span></button></nav></header>`);
  // липкие шапки и боковые панели страниц сдвигаем под общую полосу
  document.head.insertAdjacentHTML('beforeend', `<style>:root{--nav-h:44px}
header.sticky.top-0:not(#site-nav){top:var(--nav-h)!important}
aside.fixed.inset-y-0{top:var(--nav-h)!important;height:calc(100% - var(--nav-h))!important}</style>`);
  const bar = document.getElementById('site-nav');
  const here = location.pathname.split('/').pop() || 'index.html';
  bar.querySelectorAll('nav a').forEach(a => { if (a.getAttribute('href') === here) { a.setAttribute('aria-current', 'page'); a.classList.add('bg-brand-50', 'font-semibold', 'text-brand-700', 'dark:bg-brand-500/20'); } });
  const pad = () => { document.documentElement.style.setProperty('--nav-h', bar.offsetHeight + 'px'); document.body.style.paddingTop = bar.offsetHeight + 'px'; };
  pad(); addEventListener('resize', pad); addEventListener('load', pad);
});
