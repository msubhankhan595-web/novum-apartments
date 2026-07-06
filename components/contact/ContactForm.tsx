"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { CONTACT_PAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * ContactForm — wired to Resend email API.
 * Sends to group@vicintas.com on submission.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [interest, setInterest] = useState("studio");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interest,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-mist border border-ink/8 p-10 md:p-14 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 border border-gold mb-8">
          <span className="text-gold text-xl">✓</span>
        </div>
        <p className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight">
          Thank you.
        </p>
        <div className="origin-center mx-auto mt-6 h-px w-16 bg-gold" />
        <p className="mt-8 text-base text-stone leading-relaxed max-w-md mx-auto">
          Your message has been received. Our leasing team will be in touch
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <FormField label="Name" type="text" name="name" required />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <FormField label="Email" type="email" name="email" required />
        <FormField label="Phone" type="tel" name="phone" />
      </div>

      {/* Interest radios */}
      <div>
        <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
          Interested In
        </label>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {CONTACT_PAGE.interests.map((option) => (
            <label
              key={option.id}
              className="group inline-flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="interest"
                value={option.id}
                checked={interest === option.id}
                onChange={() => setInterest(option.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  "relative inline-flex items-center justify-center w-4 h-4 border transition-colors duration-300",
                  interest === option.id
                    ? "border-gold"
                    : "border-ink/30 group-hover:border-ink/60"
                )}
              >
                {interest === option.id && (
                  <span className="w-2 h-2 bg-gold" />
                )}
              </span>
              <span
                className={cn(
                  "text-sm transition-colors duration-300",
                  interest === option.id ? "text-ink" : "text-stone"
                )}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what you are looking for..."
          className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-sm md:text-base text-ink placeholder:text-stone/60 transition-colors duration-300 resize-none"
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 border border-red-200">
          {error}
        </p>
      )}

      {/* Submit */}
      <div className="pt-6">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className={loading ? "opacity-60 cursor-not-allowed" : ""}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>

      <p className="text-[10px] text-stone leading-relaxed pt-2 max-w-md">
        By submitting this form, you agree to be contacted by Novum
        Apartments regarding your inquiry. We respect your privacy.
      </p>
    </form>
  );
}

function FormField({
  label,
  type,
  name,
  required = false,
}: {
  label: string;
  type: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-sm md:text-base text-ink transition-colors duration-300"
      />
    </div>
  );
}