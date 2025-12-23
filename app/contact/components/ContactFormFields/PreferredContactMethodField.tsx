import React from "react";

const options = ["Email", "Phone", "LinkedIn", "WhatsApp"];

export default function PreferredContactMethodField() {
  return (
    <div>
      <span className="block mb-1 font-medium text-gray-700">
        Best way to contact you?
      </span>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-gray-900">
            <input
              type="radio"
              name="preferredContactMethod"
              value={option}
              defaultChecked={option === "Email"}
              className="accent-blue-600"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
