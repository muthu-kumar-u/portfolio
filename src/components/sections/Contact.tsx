import { useState, type FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { sendContactMessage, isEmailJsConfigured } from "@/lib/emailjs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="06. Contact"
          title="Let's Build Something Together"
          subtitle="Open to remote SDE roles and interesting backend/cloud problems. The fastest way to reach me is email."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="glass-panel h-full space-y-6 p-8">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 text-ink-secondary transition-colors hover:text-accent-cyan"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border">
                  <FiMail size={16} />
                </span>
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 text-ink-secondary transition-colors hover:text-accent-cyan"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border">
                  <FiPhone size={16} />
                </span>
                {personal.phone}
              </a>
              <div className="flex items-center gap-4 text-ink-secondary">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border">
                  <FiMapPin size={16} />
                </span>
                {personal.location}
              </div>

              <div className="flex gap-3 border-t border-border-subtle pt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel space-y-5 p-8">
              {!isEmailJsConfigured && (
                <p className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-xs text-amber-300">
                  EmailJS isn't configured yet — add your service/template/public key to{" "}
                  <code className="font-mono">.env</code> (see{" "}
                  <code className="font-mono">.env.example</code>) to enable this form.
                </p>
              )}

              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-ink-secondary">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-lg border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm text-ink-primary outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-ink-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-lg border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm text-ink-primary outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-ink-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="w-full resize-none rounded-lg border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm text-ink-primary outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="Tell me a bit about the role or project..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                icon={<FiSend />}
                className="w-full sm:w-auto"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <FiCheckCircle size={16} /> Message sent — thanks for reaching out!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <FiAlertCircle size={16} /> {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
