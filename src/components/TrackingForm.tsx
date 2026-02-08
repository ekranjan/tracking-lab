"use client";
import { useState } from 'react';
import { pushToDataLayer } from '@/lib/gtm';

export default function TrackingForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    pushToDataLayer({ event: 'form_step_complete', step: step });
    setStep(step + 1);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg text-black">
      <h2 className="text-xl font-bold mb-4">Step {step} of 2</h2>
      {step === 1 ? (
        <button onClick={handleNext} className="bg-blue-600 text-white p-2 rounded">Continue</button>
      ) : (
        <p className="text-green-600 font-bold">Success! Event Tracked.</p>
      )}
    </div>
  );
}