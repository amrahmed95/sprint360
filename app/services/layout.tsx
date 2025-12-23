import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprint360 Services: Integrated Software, Data & AI Solutions",
  description:
    "Transform vision into reality with our sprint-based services: Data Analysis, Data Science & ML, Software Development, and AI Process Automation.",
  keywords:
    "digital transformation services, data analytics, AI implementation, software development sprints, business process automation",
  openGraph: {
    title: "Sprint360 Services: Integrated Software, Data & AI Solutions",
    description:
      "Transform vision into reality with our sprint-based services: Data Analysis, Data Science & ML, Software Development, and AI Process Automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprint360 Services: Integrated Software, Data & AI Solutions",
    description:
      "Transform vision into reality with our sprint-based services: Data Analysis, Data Science & ML, Software Development, and AI Process Automation.",
  },
};

export default function ServicesLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
