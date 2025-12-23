import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[--color-background] text-[--color-foreground]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
