import { useState } from "react";
import { motion } from "framer-motion";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-4 flex justify-between">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`px-4 py-2 border ${
              s === step
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Step {s}
          </div>
        ))}
      </div>

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}

      <div className="mt-4 flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={step === 4}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}

function Step1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <input
        type="text"
        placeholder="Name"
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="email"
        placeholder="Email"
        className="block w-full mb-4 p-2 border"
      />
    </div>
  );
}

function Step2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Address Details</h2>
      <input
        type="text"
        placeholder="City"
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="text"
        placeholder="State"
        className="block w-full mb-4 p-2 border"
      />
    </div>
  );
}

function Step3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Preferences</h2>
      <label className="block mb-2">
        <input type="checkbox" /> Option 1
      </label>
      <label className="block mb-2">
        <input type="checkbox" /> Option 2
      </label>
    </div>
  );
}

function Step4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Review & Submit</h2>
      <p>Summary of information...</p>
    </div>
  );
}
