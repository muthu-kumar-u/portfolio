import { useState, type FormEvent } from "react";
import { FiAlertCircle, FiArrowUpRight, FiCheckCircle, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { sendContactMessage, isEmailJsConfigured } from "@/lib/emailjs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass = "w-full border-b border-border/25 bg-transparent px-0 py-3 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-muted focus:border-accent-cyan";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-shell pb-8">
      <div className="container-content">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/15 bg-ink-primary p-6 text-base-950 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-base-950/10" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-base-950/10" />

            <div className="relative grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-950/55">05 / Start a conversation</p>
                <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                  Have a hard backend problem?
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-base-950/65 sm:text-base">
                  I’m open to remote SDE opportunities and thoughtful product teams working on backend, cloud, or applied-AI systems.
                </p>

                <a
                  href={`mailto:${personal.email}`}
                  className="mt-10 inline-flex items-center gap-3 border-b border-base-950/25 pb-2 text-sm font-semibold transition-colors hover:border-base-950"
                >
                  <FiMail size={15} /> {personal.email} <FiArrowUpRight size={14} />
                </a>

                <div className="mt-12 flex items-center gap-2 text-xs text-base-950/60">
                  <FiMapPin size={14} /> {personal.location}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="flex items-center gap-2 rounded-full border border-base-950/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors hover:bg-base-950 hover:text-ink-primary"
                    >
                      <social.icon size={12} /> {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-base-950 p-6 text-ink-primary shadow-card sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink-muted">Your name</label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                      className={fieldClass}
                      placeholder="What should I call you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink-muted">Email address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink-muted">The opportunity or problem</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    className={`${fieldClass} resize-none`}
                    placeholder="A little context goes a long way..."
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.11em] text-ink-muted">
                    Direct to my inbox
                  </p>
                  <Button type="submit" disabled={status === "sending"} icon={<FiSend />}>
                    {status === "sending" ? "Sending" : isEmailJsConfigured ? "Send message" : "Open email"}
                  </Button>
                </div>

                {status === "success" && (
                  <p className="mt-5 flex items-center gap-2 text-sm text-accent-cyan">
                    <FiCheckCircle size={15} /> Message sent. I’ll be in touch.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-5 flex items-center gap-2 text-sm text-red-400">
                    <FiAlertCircle size={15} /> {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
