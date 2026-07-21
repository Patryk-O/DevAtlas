import { useAppStore } from '../../store/useAppStore';

export function SettingsPage() {
  const { settings, toggleTheme } = useAppStore();

  return <section className="space-y-6"><div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Settings</p><h1 className="text-4xl font-bold text-white">Local preferences</h1></div><div className="rounded-3xl border border-white/10 bg-panel p-8"><div className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-xl font-semibold text-white">Theme</h2><p className="text-slate-400">Current theme: {settings.theme}</p></div><button className="rounded-xl bg-accent px-5 py-3 font-semibold text-slate-950" onClick={toggleTheme}>Toggle theme</button></div></div></section>;
}
