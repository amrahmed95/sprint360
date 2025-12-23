"use client";
import React, { useState } from "react";

const options = [
  "Startup (1-50 employees)",
  "Small Business (51-200)",
  "Mid-Market (201-1000)",
  "Enterprise (1000+)",
];

export default function CompanySizeField() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <label
        htmlFor="companySize"
        className="block mb-1 font-medium text-gray-700"
      >
        Company Size <span className="text-gray-400">(optional)</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={`px-4 py-2 rounded-xl border transition
              ${
                selected === option
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            onClick={() => setSelected(option)}
            aria-pressed={selected === option}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Hidden input to submit value */}
      <input type="hidden" name="companySize" value={selected} />
    </div>
  );
}
