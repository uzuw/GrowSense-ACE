"use client";

import React, { useEffect, useState } from "react";

const Suggestion = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSuggestion() {
      setLoading(true);
      try {
        const resp = await fetch(
          "https://api.search1api.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SEARCH1API_KEY}`,
              "Content-Type": "application/json",
              "HTTP-Referer": window.location.origin,
              "X-Title": "MyAgriApp",
            },
            body: JSON.stringify({
              model: "deepseek-r1-70b-online",
              messages: [
                {
                  role: "system",
                  content: "You are an AI agriculture advisor.",
                },
                {
                  role: "user",
                  content:
                    "Please suggest the best crop given these field conditions...",
                },
              ],
              temperature: 0.7,
              max_tokens: 500,
            }),
          }
        );
        const data = await resp.json();
        const aiText = data.choices?.[0]?.message?.content?.trim();
        setText(aiText ?? "No suggestions returned.");
      } catch (err) {
        console.error(err);
        setText("Error: " + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSuggestion();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-screen-xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">
          Suggestions
        </h2>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {text}
          </pre>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
