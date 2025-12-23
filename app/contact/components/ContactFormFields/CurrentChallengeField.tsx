import React from "react";

export default function CurrentChallengeField() {
  return (
    <div>
      <label
        htmlFor="currentChallenge"
        className="block mb-1 font-medium text-gray-700"
      >
        Current Challenge/Problem Statement{" "}
        <span className="text-gray-400">(optional)</span>
      </label>
      <textarea
        id="currentChallenge"
        name="currentChallenge"
        placeholder="Briefly describe the problem you're trying to solve"
        maxLength={200}
        className="p-3 border rounded-xl w-full text-gray-900 placeholder:text-gray-400"
        rows={3}
      />
      <div className="text-right text-xs text-gray-400 mt-1">
        Max 200 characters
      </div>
    </div>
  );
}
