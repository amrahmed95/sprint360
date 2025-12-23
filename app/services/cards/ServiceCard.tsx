"use client";
import React, { JSX } from "react";
import Link from "next/link";
import { Service } from "../types/Services";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props): JSX.Element {
  const slug = service.slug ?? service.id;
  return (
    <Link href={`/services/${slug}`} className="group block">
      <article className="card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
        {/* Content Section with optimized spacing */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full">
          {/* Title */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
              {service.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="text-base md:text-lg text-muted mb-8 leading-relaxed">
            {service.summary}
          </p>

          {/* Bullet Points */}
          {service.bullets && service.bullets.length > 0 && (
            <div className="mb-8 space-y-3">
              {service.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 group/bullet">
                  <span className="text-accent font-bold mt-0.5 shrink-0 text-lg">
                    ✓
                  </span>
                  <span className="text-sm md:text-base text-foreground group-hover/bullet:text-accent/80 transition-colors">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Link with better spacing */}
          <div className="pt-4 border-t border-card-border/30">
            <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:text-accent-hover transition-all duration-200 group/link mt-4">
              <span>Learn more</span>
              <span className="text-lg group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
