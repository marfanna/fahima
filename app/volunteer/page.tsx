import { Separator } from "@/components/ui/separator";
import { Heart, Award, MapPin, Calendar } from "lucide-react";
import { volunteerActivities, affiliations } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer & Affiliations",
  description: "Volunteer activities and professional affiliations of Fahima Sultana — American Sociological Association, Alpha Kappa Delta, and more.",
};

export default function VolunteerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">
          Volunteer &amp; Affiliations
        </h1>
        <p className="mt-3 text-muted-foreground">
          Community engagement, academic service, and professional memberships.
        </p>
      </div>

      {/* Volunteer Activities */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">Volunteer Activities</h2>
        </div>

        <div className="flex flex-col gap-4">
          {volunteerActivities.map((v, i) => (
            <div key={i} className="rounded-lg border border-border p-5 flex flex-col gap-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-foreground">{v.role}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{v.organization}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {v.date}
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {v.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Professional Affiliations */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Professional Affiliations
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          {affiliations.map((aff, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {aff}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
