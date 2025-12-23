"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import NameField from "./ContactFormFields/NameField";
import CompanyField from "./ContactFormFields/CompanyField";
import EmailField from "./ContactFormFields/EmailField";
import ProjectTypeField from "./ContactFormFields/ProjectTypeField";
import TimelineField from "./ContactFormFields/TimelineField";
import MessageField from "./ContactFormFields/MessageField";
import ReferralField from "./ContactFormFields/ReferralField";
import ConsentCheckbox from "./ConsentCheckbox";
import HiddenFields from "./HiddenFields";
import BusinessContextOptionsField from "./ContactFormFields/businessContextOptionsField";
import CurrentChallengeField from "./ContactFormFields/CurrentChallengeField";
import CompanySizeField from "./ContactFormFields/CompanySizeField";
import PreferredContactMethodField from "./ContactFormFields/PreferredContactMethodField";
import { getRecaptchaToken } from "@/lib/getRecaptchaToken";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const name = data.name as string;

    try {
      // 1️⃣ Get reCAPTCHA v3 token
      const recaptchaToken = await getRecaptchaToken("contact_form_submit");

      // 2️⃣ Append token
      const payload = {
        ...data,
        recaptchaToken,
      };

      // 3️⃣ Send request
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        router.push(`/contact/thank-you?name=${encodeURIComponent(name)}`);
      } else {
        alert(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 p-6 rounded-2xl border bg-white shadow-sm"
    >
      <div className="grid gap-3">
        {/* Required Fields */}
        <NameField />
        <EmailField />
        <ProjectTypeField />
        <TimelineField />

        {/* STRONGLY RECOMMENDED OPTIONAL FIELDS */}
        <CurrentChallengeField />
        <CompanyField />
        <CompanySizeField />
        <BusinessContextOptionsField />

        {/* NICE-TO-HAVE OPTIONAL FIELDS */}
        <MessageField />
        <ReferralField />
        <PreferredContactMethodField />
      </div>

      <ConsentCheckbox />
      <HiddenFields />

      <button
        type="submit"
        disabled={loading}
        className="mt-4 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : <span className="cta-label">Submit</span>}
      </button>
    </form>
  );
}
