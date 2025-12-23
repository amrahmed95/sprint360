"use client";

import { useState } from "react";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="card bg-[--color-accent]/10 border-none text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Turn Vision into Measurable Reality?
        </h2>
        <p className="text-[--color-muted] max-w-2xl mx-auto mb-8">
          Stop the cycle of endless pilot projects and let’s build the future
          together. <br />
          Let's define your first tangible outcome and Contact us today to
          discuss your project and discover how our 360° approach can drive your
          success.
        </p>

        {/* CTA Button */}
        <Button
          className="btn-cta shadow-[0_0_15px_var(--color-accent)] hover:scale-105 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          <span className="cta-label">Get a free Consultation</span>
        </Button>

        {/* Modal with slotting */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h3 className="text-xl font-semibold mb-4">Choose an Option</h3>
          <p className="text-[--color-muted] mb-6">
            How would you like to get in touch?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_SCHEDULING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full shadow-[0_0_10px_var(--color-accent)] hover:scale-105 transition-transform">
                Book a Meeting
              </Button>
            </a>
            <a href="mailto:sprint360hq@gmail.com" className="flex-1">
              <Button className="w-full shadow-[0_0_10px_var(--color-accent)] hover:scale-105 transition-transform">
                Send an Email
              </Button>
            </a>
          </div>
        </Modal>
      </div>
    </section>
  );
}
