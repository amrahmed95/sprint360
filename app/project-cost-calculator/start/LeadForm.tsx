"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "./actions";

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tempDomains = new Set(["tempmail.com", "mailinator.com"]);

  function isLikelyValid(email: string) {
    if (!email.includes("@")) return false;
    const domain = email.split("@")[1].toLowerCase();
    return !tempDomains.has(domain);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email")?.toString() || "").trim();

    if (!isLikelyValid(email)) {
      setLoading(false);
      setError(
        "Please use a valid company or reliable email address (no temporary emails)."
      );
      return;
    }

    try {
      const result = await submitLead(formData);

      if (result?.error) {
        setLoading(false);
        setError(result.error);
        return;
      }

      // Redirect immediately after successful submission
      router.push("/project-cost-calculator/app");
    } catch (err: any) {
      setLoading(false);
      setError("Submission failed. Please try again.");
      console.error("submitLead error:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {error && <p className="text-red-500">{error}</p>}

      <input
        name="name"
        required
        placeholder="Your name"
        className="input border p-3 rounded"
      />

      <input
        name="email"
        required
        type="email"
        placeholder="Your email"
        className="input border p-3 rounded"
      />

      <textarea
        name="CurrentChallenge"
        required
        placeholder="Briefly describe your project"
        className="border p-3 rounded min-h-[120px]"
      />

      <button
        type="submit"
        disabled={loading}
        className="btn-cta px-4 py-3 text-white font-semibold rounded"
      >
        {loading ? "Submitting..." : "Unlock cost estimator"}
      </button>
    </form>
  );
}
