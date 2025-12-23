"use server";

import { headers  } from "next/headers";
import { saveCalculatorLeadToAirtable } from "@/lib/airtable-calculator";
import { isValidBusinessEmail } from "@/lib/validateEmail";

export async function submitLead(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const CurrentChallenge = formData.get("CurrentChallenge")?.toString() || "";

  if (!name) return { error: "Name is required." };
  if (!email) return { error: "Email is required." };
  if (!CurrentChallenge) return { error: "Project description is required." };

  // Email validation
  const emailValidation = isValidBusinessEmail(email);
  if (!emailValidation.ok) {
    return { error: emailValidation.reason || "Please enter a valid business email. Temporary emails are not allowed." };
  }

  // Save lead to Airtable
  try {
    await saveCalculatorLeadToAirtable({ name, email, CurrentChallenge });
  } catch (err: any) {
    console.error("Failed to save calculator lead", err);
    return { error: "Failed to get your details. Please try again later." };
  }

  // Set cookie for 6 hours
  const cookieValue = `calc_access=yes; Path=/; Max-Age=${60 * 60 * 1}; HttpOnly; SameSite=Strict`;

 return {
    success: true,
    headers: {
      "Set-Cookie": cookieValue,
    },
  };
}
