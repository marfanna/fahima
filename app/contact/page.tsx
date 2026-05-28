import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fahima Sultana — open to research collaborations, academic positions, and professional opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">Get in Touch</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Open to research collaborations, academic positions, and professional opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-xl font-semibold text-foreground">Contact Information</h2>
          <div className="flex flex-col gap-4">
            <Link
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <span>{profile.email}</span>
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                <LinkedInIcon className="h-4 w-4 text-primary" />
              </div>
              <span>linkedin.com/in/fsltana</span>
            </Link>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
