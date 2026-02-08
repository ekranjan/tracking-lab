"use client";
import { useState } from 'react';
import { pushToDataLayer } from '@/lib/gtm';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const nextStep = (currentStepName: string) => {
    pushToDataLayer('form_progression', {
      step_number: step,
      step_label: currentStepName,
      email_captured: !!email
    });
    setStep(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-2 w-full mx-1 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-gray-200'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h2>
          <p className="text-gray-500 mb-6">Let's start with your contact info.</p>
          <input 
            type="email" 
            placeholder="Work Email"
            className="w-full p-3 border rounded-xl mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black"
            onBlur={() => pushToDataLayer('form_field_blur', { field_id: 'email' })}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => nextStep('Contact Info')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all">
            Get Started
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in slide-in-from-right duration-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Interest</h2>
          <p className="text-gray-500 mb-6">What are you looking to master?</p>
          <div className="grid grid-cols-1 gap-3 mb-6 text-black">
            {['React & TS', 'Shopify Dev', 'GA4 Analytics'].map((opt) => (
              <button key={opt} onClick={() => { pushToDataLayer('option_selected', { value: opt }); nextStep('Interests'); }}
                className="p-3 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left">
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center animate-in zoom-in duration-500">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">You're All Set!</h2>
          <p className="text-gray-500 mb-6">Implementation verified successfully.</p>
          <button onClick={() => { pushToDataLayer('form_complete', { success: true }); setStep(1); }}
            className="text-blue-600 font-semibold hover:underline">
            Test Again
          </button>
        </div>
      )}
    </div>
  );
}