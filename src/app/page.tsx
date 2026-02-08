// src/app/page.tsx
"use client";

import MultiStepForm from "@/components/MultiStepform";
import { pushToDataLayer } from "@/lib/gtm";
import { useEffect } from "react";

export default function Home() {
  // Mastery Tip: Track a "Page View" event manually if needed, 
  // or just log that the app is ready.

    useEffect(() => {
  // Pass the string first, then the object
    pushToDataLayer("page_load", {
        page_title: "GA4 Mastery Lab",
        user_status: "anonymous"
    });
    }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Analytics Implementation Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          This project demonstrates React 19 event tracking for GA4.
        </p>
        
        {/* Your Multi-step Form Component */}
        <MultiStepForm />

        <div className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700 font-mono">
            Check your Browser Console (F12) to see GTM events firing.
          </p>
        </div>
      </div>
    </main>
  );
}