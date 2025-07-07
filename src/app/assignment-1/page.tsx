"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QUOTES = {
  inspiration: [
    "Believe in yourself!",
    "Dream big and dare to fail.",
    "Every moment is a fresh beginning."
  ],
  life: [
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "The purpose of life is a life of purpose."
  ],
  success: [
    "Success is not final, failure is not fatal.",
    "Don't watch the clock; do what it does. Keep going.",
    "Opportunities don't happen. You create them."
  ]
};

export default function Assignment1Page() {
  const [topic, setTopic] = useState("inspiration");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGenerate = () => {
    const selectedQuotes = QUOTES[topic as keyof typeof QUOTES] || [
      "No quotes found for this topic."
    ];
    setQuotes(selectedQuotes);
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Assignment 1: Quote Generator</h1>
      <div className="space-y-4">
        <select
          className="w-full border rounded px-3 py-2"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="inspiration">Inspiration</option>
          <option value="life">Life</option>
          <option value="success">Success</option>
        </select>
        <Button onClick={handleGenerate} className="transition-all duration-300 hover:scale-105">
          Generate Quotes
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <div className="space-y-4">
          {quotes.map((quote, idx) => (
            <motion.div
              key={quote + idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <Card>
                <CardContent className="p-4">{quote}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </main>
  );
}
