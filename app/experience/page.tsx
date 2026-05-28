import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar } from "lucide-react";
import { workExperience } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Professional and academic work experience of Fahima Sultana — research, teaching, administration, and international development.",
};

const roleColors: Record<string, "default" | "secondary" | "outline"> = {
  Research: "default",
  Teaching: "secondary",
  Administrative: "outline",
  Compliance: "outline",
  NGO: "secondary",
  Survey: "outline",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">Work Experience</h1>
        <p className="mt-3 text-muted-foreground">
          Academic, research, administrative, and international development roles.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden sm:block" />

        <div className="flex flex-col gap-10">
          {workExperience.map((job, jobIdx) => (
            <div key={jobIdx} className="sm:pl-10 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Organization header */}
              <div className="mb-4">
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {job.organization}
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {job.dateRange}
                  </span>
                </div>
              </div>

              {/* Roles */}
              <div className="flex flex-col gap-6">
                {job.roles.map((role, roleIdx) => (
                  <div key={roleIdx}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-medium text-foreground">{role.title}</span>
                      <Badge variant={roleColors[role.type] ?? "outline"} className="text-xs">
                        {role.type}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {jobIdx < workExperience.length - 1 && (
                <Separator className="mt-8 sm:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
