"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/mylivewallpapers-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>

      {/* Main Content */}
      <main className="relative z-20 max-w-xl mx-auto p-6 space-y-6">
        <h1
          className="text-3xl font-bold text-center  text-white rounded-lg px-4 py-2 shadow-lg"
          style={{ textShadow: "0 2px 8px rgba(255, 255, 255, 0.7)" }}
        >
          Assignment 1: Quote Generator
        </h1>
        <div className="space-y-4">
          <select
            className="w-full bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg px-3 py-2 shadow-lg transition-all duration-300"
            style={{
              WebkitTextFillColor: "white", // Ensures text is always white
              fontWeight: "500",
              fontSize: "1.1rem",
              letterSpacing: "0.02em"
            }}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option className="bg-black/60 text-white" value="inspiration">Inspiration</option>
            <option className="bg-black/60 text-white" value="life">Life</option>
            <option className="bg-black/60 text-white" value="success">Success</option>
          </select>
          <Button
            onClick={handleGenerate}
            className="bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
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
                <Card className="bg-white/10 backdrop-blur border border-white/30 rounded-xl shadow-lg">
                  <CardContent className="p-4 text-white">{quote}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
}
