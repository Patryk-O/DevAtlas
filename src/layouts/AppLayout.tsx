import { BookOpen, Brain, Compass, Home, LineChart, Moon, Search, Settings, Sparkles } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

const navItems = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/atlas', label: 'Atlas', icon: Compass },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/flashcards', label: 'Flashcards', icon: BookOpen },
  { to: '/quiz', label: 'Quiz', icon: Brain },
  { to: '/interview', label: 'Interview', icon: Sparkles },
  { to: '/progress', label: 'Progress', icon: LineChart },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function AppLayout() {
  const { settings, toggleTheme } = useAppStore();

  return (
    <div className={settings.theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-surface text-slate-100">
        <aside className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-slate-950/90 p-2 backdrop-blur lg:inset-y-0 lg:left-0 lg:right-auto lg:w-72 lg:border-r lg:border-t-0 lg:p-6">
          <div className="mb-8 hidden items-center gap-3 lg:flex">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-slate-950"><Sparkles /></div>
            <div><p className="text-xl font-bold">DevAtlas</p><p className="text-xs text-slate-400">local-first learning</p></div>
          </div>
          <nav className="grid grid-cols-8 gap-1 lg:flex lg:flex-col lg:gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs transition lg:flex-row lg:px-4 lg:text-sm ${isActive ? 'bg-accent text-slate-950' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}>
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <button className="mt-6 hidden w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 lg:flex" onClick={toggleTheme}>
            <Moon size={16} /> Toggle {settings.theme === 'dark' ? 'light' : 'dark'}
          </button>
        </aside>
        <main className="pb-28 lg:ml-72 lg:pb-0">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10 lg:py-10"><Outlet /></div>
        </main>
      </div>
    </div>
  );
}
