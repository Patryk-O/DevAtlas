import { useState } from 'react';
import { getQuizQuestions } from '../../services/practiceService';
import { useAppStore } from '../../store/useAppStore';

export function QuizPage() {
  const questions = getQuizQuestions();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string>();
  const recordQuizAttempt = useAppStore((state) => state.recordQuizAttempt);
  const question = questions[index];
  const isAnswered = Boolean(selected);

  function answer(choice: string) {
    setSelected(choice);
    recordQuizAttempt({ questionId: question.id, selectedAnswer: choice, isCorrect: choice === question.correctAnswer, attemptedAt: new Date().toISOString() });
  }

  return <section className="space-y-6"><div><p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Quiz</p><h1 className="text-4xl font-bold text-white">Practice under pressure</h1></div><article className="rounded-3xl border border-white/10 bg-panel p-8"><p className="text-sm text-slate-400">Question {index + 1}/{questions.length}</p><h2 className="mt-4 text-2xl font-semibold text-white">{question.prompt}</h2><div className="mt-6 grid gap-3">{question.choices.map((choice) => <button className={`rounded-xl border px-4 py-3 text-left ${selected === choice ? 'border-accent bg-accent/20 text-cyan-100' : 'border-white/10 text-slate-200'}`} disabled={isAnswered} key={choice} onClick={() => answer(choice)}>{choice}</button>)}</div>{isAnswered && <div className="mt-6 rounded-2xl bg-white/10 p-5 text-slate-200"><strong className={selected === question.correctAnswer ? 'text-emerald-300' : 'text-rose-300'}>{selected === question.correctAnswer ? 'Correct' : 'Review needed'}</strong><p className="mt-2">{question.explanation}</p><button className="mt-4 rounded-xl bg-accent px-5 py-3 font-semibold text-slate-950" onClick={() => { setSelected(undefined); setIndex((index + 1) % questions.length); }}>Next</button></div>}</article></section>;
}
