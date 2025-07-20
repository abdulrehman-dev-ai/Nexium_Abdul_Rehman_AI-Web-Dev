"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QUOTES = {
  inspiration: [
    "Believe in yourself!",
    "Dream big and dare to fail.",
    "Every moment is a fresh beginning.",
    "Turn your wounds into wisdom.",
    "Happiness is not by chance, but by choice.",
    "Your only limit is your mind.",
    "Start where you are. Use what you have. Do what you can.",
    "The best way to get started is to quit talking and begin doing.",
  ],
  life: [
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "The purpose of life is a life of purpose.",
    "Difficult roads often lead to beautiful destinations.",
    "Life is really simple, but we insist on making it complicated.",
    "Enjoy the little things in life, for one day you may look back and realize they were the big things.",
    "Life is short, and it's up to you to make it sweet.",
    "Live life to the fullest, and focus on the positive.",
  ],
  success: [
    "Success is not final, failure is not fatal.",
    "Don't watch the clock; do what it does. Keep going.",
    "Opportunities don't happen. You create them.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is not in what you have, but who you are.",
  ],
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t limit your challenges. Challenge your limits.",
    "Discipline is the bridge between goals and accomplishment.",
    "Success doesn’t come to you. You go to it.",
  ],
  wisdom: [
    "Knowing yourself is the beginning of all wisdom.",
    "The only true wisdom is in knowing you know nothing.",
    "Turn your wounds into wisdom.",
    "It is the mark of an educated mind to entertain a thought without accepting it.",
    "Wisdom begins in wonder.",
    "In seeking wisdom, the first step is silence.",
    "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    "Sometimes it’s better to remain silent and be thought a fool than to speak and remove all doubt.",
  ],
  humor: [
    "I'm not arguing, I'm just explaining why I'm right.",
    "I used to think I was indecisive, but now I'm not so sure.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "Common sense is like deodorant. The people who need it most never use it.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "I’m on a seafood diet. I see food and I eat it.",
    "I told my computer I needed a break, and now it won’t stop sending me beach ads.",
    "Life is short. Smile while you still have teeth.",
  ],
  love: [
    "Love is not about how much you say ‘I love you’, but how much you prove that it’s true.",
    "In the end, we only regret the chances we didn’t take… and the love we didn’t let in.",
    "Love is composed of a single soul inhabiting two bodies.",
    "Where there is love, there is life.",
    "Love cures people — both the ones who give it and the ones who receive it.",
    "You don’t love someone for their looks or their clothes — you love them because they sing a song only you can hear.",
    "To love and be loved is to feel the sun from both sides.",
  ],
  mindfulness: [
    "Be where your feet are.",
    "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
    "Breathe in, breathe out, and let go.",
    "You should sit in meditation for twenty minutes every day — unless you're too busy. Then you should sit for an hour.",
    "The present moment is the only time over which we have dominion.",
    "Mindfulness isn’t difficult — we just need to remember to do it.",
  ],
  creativity: [
    "Creativity is intelligence having fun.",
    "Every artist was first an amateur.",
    "You can’t use up creativity. The more you use, the more you have.",
    "The worst enemy to creativity is self-doubt.",
    "Don’t think. Thinking is the enemy of creativity.",
    "Creativity takes courage.",
    "Imagination is everything. It is the preview of life’s coming attractions.",
  ],
};

export default function Assignment1Page() {
  const [topic, setTopic] = useState("inspiration");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGenerate = () => {
    const selectedQuotes = QUOTES[topic as keyof typeof QUOTES] || [
      "No quotes found for this topic.",
    ];
    setQuotes(selectedQuotes);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/images/mylivewallpapers-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              Quote Generator
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              Select a topic and find your inspiration.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  className="w-full sm:w-1/2 bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg px-4 py-3 shadow-lg transition-all duration-300 text-base"
                  style={{
                    WebkitTextFillColor: "white",
                  }}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {Object.keys(QUOTES).map((key) => (
                    <option
                      key={key}
                      className="bg-black/80 text-white"
                      value={key}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={handleGenerate}
                  className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-700 border border-transparent text-white font-bold px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Generate Quotes
                </Button>
              </div>
            </CardContent>
          </Card>

          <AnimatePresence mode="wait">
            {quotes.length > 0 && (
              <div className="space-y-4">
                {quotes.map((quote, idx) => (
                  <motion.div
                    key={quote + idx}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden">
                      <CardContent className="p-6 text-lg text-white italic text-center">
                        "{quote}"
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 mt-4 text-center p-4 text-sm text-white/70">
  Developed with dedication by{" "}
  <a
    href="https://abdulrehmansarwar.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-400 hover:underline font-semibold"
  >
    Abdul Rehman
  </a>{" "}
  as part of a{" "}
  <a
    href="https://www.nexium.ltd/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-400 hover:underline font-semibold"
  >
    Nexium Software Internship Project
  </a>
  {"."}
</footer>
    </div>
  );
}
