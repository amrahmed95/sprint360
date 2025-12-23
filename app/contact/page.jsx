import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import CalendlyBlock from "./components/CalendlyBlock";
import ContactAlternatives from "./components/ContactAlternatives";
import ContactHeader from "./ContactHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <ContactHeader />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left column: intro + alternatives */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="card bg-gradient-to-b from-[rgba(30,144,255,0.06)] to-transparent border-transparent">
                <ContactHero />
                <p className="mt-4 text-sm text-neutral-400">
                  Prefer to discuss live? Schedule a 30‑minute discovery call
                  and we'll review your brief.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://calendly.com/amr-ahmedm95/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cta text-base font-bold flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, #174ea6 0%, #1e3a8a 100%)",
                      color: "#fff",
                      border: "1px solid #1e3a8a",
                      boxShadow:
                        "0 6px 18px rgba(30,144,255,0.14), 0 0 28px rgba(30,144,255,0.08) inset",
                    }}
                  >
                    <span className="cta-label">Book Free Consultation</span>
                  </a>
                  <div className="sm:ml-2 flex-1 flex items-center justify-center">
                    <ContactAlternatives />
                  </div>
                </div>
              </div>

              {/* Quick scheduling */}
              {/* <div className="card bg-gradient-to-b from-[rgba(30,144,255,0.06)] to-transparent border-transparent">
                <h4 className="font-semibold text-lg text-center py-4 tracking-wide text-white bg-gradient-to-r   rounded-t-2xl mb-0">
                  Quick scheduling
                </h4>
                <CalendlyBlock />
              </div> */}
            </div>
          </aside>

          {/* Right column: form */}
          <section className="lg:col-span-7">
            <div className="card p-0 overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-2">
                  Tell us about your project
                </h2>
                <p className="text-sm text-neutral-500 mb-6">
                  Share as much as you can — attach a brief if available. We'll
                  follow up within one business day.
                </p>

                <ContactForm />
              </div>
            </div>

            <div className="mt-6 text-sm text-neutral-500">
              By submitting, you agree to be contacted about this inquiry. See
              our privacy policy for details.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
