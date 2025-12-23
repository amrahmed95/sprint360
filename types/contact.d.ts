interface ContactFormData {
  // Required fields
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  consent: boolean;

  // Strongly recommended optional fields
  currentChallenge?: string;
  company?: string;
  companySize?: string;
  businessContext?: string;

  // Nice-to-have optional fields
  message?: string;
  referral?: string;
  preferredContactMethod?: string;

  // Auto-generated fields
  submissionDate?: string;
}

export type { ContactFormData };