interface StatCardProps {
  label: string;
  value: string;
  helper: string;
}

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-panel/80 p-5 shadow-xl shadow-slate-950/10">
      <p className="text-sm text-slate-400">{label}</p>
      <strong className="mt-2 block text-3xl text-white dark:text-white">{value}</strong>
      <span className="mt-2 block text-sm text-slate-400">{helper}</span>
    </article>
  );
}
