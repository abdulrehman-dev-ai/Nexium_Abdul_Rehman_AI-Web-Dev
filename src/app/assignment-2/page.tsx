"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const URDU_DICTIONARY: Record<string, string> = {
  "blog": "بلاگ",
  "summary": "خلاصہ",
  "this": "یہ",
  "is": "ہے",
  "a": "ایک",
  "sample": "نمونہ",
  "of": "کا",
  "static": "جامد",
  "ai": "اے آئی",
  "generated": "تخلیق کردہ",
  "text": "متن"
};

function translateToUrdu(text: string) {
  return text
    .split(" ")
    .map((word) => URDU_DICTIONARY[word.toLowerCase()] || word)
    .join(" ");
}

export default function Assignment2Page() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [urduSummary, setUrduSummary] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSummarize = () => {
    const staticSummary = "This is a sample of static AI generated text.";
    const translated = translateToUrdu(staticSummary);
    setSummary(staticSummary);
    setUrduSummary(translated);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const res = await fetch("/api/save-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalText: url,
          aiSummary: summary,
          urduTranslation: urduSummary,
        }),
      });

      if (res.ok) {
        alert("✅ Summary saved to MongoDB!");
      } else {
        const errorData = await res.json();
        alert(`❌ Failed to save: ${errorData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Assignment 2: Blog Summariser</h1>

      <div className="space-y-4">
        <Input
          type="url"
          placeholder="Enter blog URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          onClick={handleSummarize}
          disabled={!url}
          className="w-full"
        >
          Summarize Blog
        </Button>
      </div>

      {summary && (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <strong>AI Summary (English):</strong>
              <p>{summary}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <strong>اردو ترجمہ:</strong>
              <p>{urduSummary}</p>
            </CardContent>
          </Card>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full"
            variant="secondary"
          >
            {isSaving ? "Saving..." : "Save Summary"}
          </Button>
        </div>
      )}
    </main>
  );
}
