import { useState } from 'react';
import { getFlashcards } from '../../services/practiceService';
import { useAppStore } from '../../store/useAppStore';

export function FlashcardsPage() {
  const cards = getFlashcards();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const rateFlashcard = useAppStore((state) => state.rateFlashcard);
  const card = cards[index];

  const rate = (rating: 'again' | 'good' | 'easy') => {
    rateFlashcard(card.id, rating);
    setRevealed(false);
    setIndex((index + 1) % cards.length);
  };

  return <section className="space-y-6"><div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Flashcards</p><h1 className="text-4xl font-bold text-white">Review core concepts</h1></div><article className="rounded-3xl border border-white/10 bg-panel p-8"><p className="text-sm text-slate-400">Card {index + 1}/{cards.length}</p><h2 className="mt-4 text-3xl font-semibold text-white">{card.front}</h2>{revealed && <p className="mt-6 rounded-2xl bg-white/10 p-5 text-slate-200">{card.back}</p>}<div className="mt-8 flex flex-wrap gap-3">{!revealed ? <button className="rounded-xl bg-accent px-5 py-3 font-semibold text-slate-950" onClick={() => setRevealed(true)}>Reveal answer</button> : ['again', 'good', 'easy'].map((item) => <button className="rounded-xl border border-white/10 px-5 py-3 text-white" key={item} onClick={() => rate(item as 'again' | 'good' | 'easy')}>{item}</button>)}</div></article></section>;
}
