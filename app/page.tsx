import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, ArrowRight, GraduationCap } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahima Sultana — Sociologist & Researcher",
  description: profile.summary,
  openGraph: {
    title: "Fahima Sultana — Sociologist & Researcher",
    description: profile.summary,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: "Sociologist & Researcher",
            email: profile.email,
            url: "https://fahimasultana.com",
            address: { "@type": "PostalAddress", addressLocality: "Bronx", addressRegion: "NY" },
            sameAs: [profile.linkedin],
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
          <div className="shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-4 ring-primary/10 shadow-lg">
              <Image
                src={profile.headshot}
                alt={`${profile.name} headshot`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 208px, 256px"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-primary font-medium tracking-wide">
                {profile.tagline}
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{profile.location}</span>
            </div>

            {/* PhD callout */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 w-fit">
              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm text-primary font-medium">
                Currently pursuing PhD at{" "}
                <Link href="/education" className="underline underline-offset-2 hover:text-primary/80 transition-colors">
                  Binghamton University
                </Link>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-xl">
              {profile.summary}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Link
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email Fahima"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{profile.email}</span>
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
              <Link href="/research" className={buttonVariants({ variant: "default", className: "gap-2" })}>
                View Research <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "3", label: "Research Presentations" },
            { value: "9+", label: "Years Experience" },
            { value: "4", label: "Languages" },
            { value: "7+", label: "Tools & Software" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
