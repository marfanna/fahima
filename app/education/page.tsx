import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { education, certificates } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic degrees and certifications of Fahima Sultana — University of Memphis and Shahjalal University of Science and Technology.",
};

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">Education</h1>
        <p className="mt-3 text-muted-foreground">
          Academic background in Sociology and Anthropology across two countries.
        </p>
      </div>

      {/* Degrees */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">Degrees</h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="flex flex-col gap-8">
            {education.map((deg, i) => (
              <div key={i} className="sm:pl-10 relative">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {deg.degree}, {deg.field}
                  </h3>
                  <p className="font-medium text-foreground/80 mt-0.5">{deg.institution}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {deg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {deg.dateRange}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Certificates */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Certificates &amp; Training
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {certificates.map((cert, i) => (
            <div key={i} className="rounded-lg border border-border p-5">
              <h3 className="font-serif text-base font-semibold text-foreground">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {cert.date}
              </p>
              {cert.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {cert.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
