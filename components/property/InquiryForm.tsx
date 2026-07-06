"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface InquiryFormProps {
  residenceName: string;
  priceFrom: string;
}

/**
 * InquiryForm — property detail page sidebar form.
 * Wired to the same /api/contact endpoint.
 */
export default function InquiryForm({
  residenceName,
  priceFrom,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interest: residenceName,
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
      <div className="bg-mist border border-ink/8 p-8 md:p-10 text-center">
        <p className="font-serif text-2xl text-ink font-light">
          Thank you.
        </p>
        <p className="mt-3 text-sm text-stone leading-relaxed">
          Your inquiry has been received. We will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-mist border border-ink/8 p-8 md:p-10">
      {/* Price header */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
          Inquire about
        </p>
        <p className="mt-2 font-serif text-2xl font-light text-ink leading-tight">
          {residenceName}
        </p>
        <p className="mt-4 font-serif text-xl text-gold">{priceFrom}</p>
      </div>

      <div className="my-8 h-px bg-ink/10" />

      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Name" type="text" name="name" required />
        <Field label="Email" type="email" name="email" required />
        <Field label="Phone" type="tel" name="phone" />

        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us what you are looking for..."
            className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-2 text-sm text-ink placeholder:text-stone/60 transition-colors duration-300 resize-none"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-3 border border-red-200">
            {error}
          </p>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            className={`w-full ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Request a Tour"}
          </Button>
        </div>

        <p className="text-[10px] text-stone leading-relaxed pt-2">
          By submitting, you agree to be contacted by Novum Apartments
          regarding your inquiry.
        </p>
      </form>
    </div>
  );
}

function Field({
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
        className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-2 text-sm text-ink placeholder:text-stone/60 transition-colors duration-300"
      />
    </div>
  );
}