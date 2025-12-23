import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Cost Calculator | Get Instant Software Development Quote",
  description:
    "Use our free project cost calculator to estimate custom software, AI, and data project budgets. Get instant pricing for web, mobile, and AI development.",
  keywords:
    "software cost calculator, project estimation, development pricing, AI project cost",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
