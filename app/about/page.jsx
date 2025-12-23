"use client";
import React from "react";
import AboutHero from "./AboutHero";
import AboutVisionMission from "./AboutVisionMission";
import AboutJourney from "./AboutJourney";
import AboutValues from "./AboutValues";
import AboutTeam from "./AboutTeam";
import AboutCTA from "./AboutCTA";

export default function AboutPage() {
  return (
    <main className="text-[--color-foreground] bg-[--color-background]">
      {/* ─────────────────────────────
          HERO SECTION
      ───────────────────────────── */}
      <AboutHero />

      {/* ─────────────────────────────
          VISION & MISSION SECTION
      ───────────────────────────── */}

      <AboutVisionMission />

      {/* ─────────────────────────────
          COMPANY STORY / JOURNEY
      ───────────────────────────── */}
      <AboutJourney />

      {/* ─────────────────────────────
          VALUES SECTION
      ───────────────────────────── */}
      <AboutValues />

      {/* ─────────────────────────────
          TEAM SECTION
      ───────────────────────────── */}

      {/* <AboutTeam /> */}

      {/* ─────────────────────────────
          CTA SECTION
      ───────────────────────────── */}
      <AboutCTA />
    </main>
  );
}
