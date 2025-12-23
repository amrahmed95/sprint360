"use client";
import React, { JSX } from "react";
import Link from "next/link";
import ServiceCard from "../cards/ServiceCard";
import { SERVICES } from "../data/services";

export default function ServicesGrid(): JSX.Element {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-12">
      <div className="section-header">Our Services</div>
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}
