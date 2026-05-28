import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wrench, Languages } from "lucide-react";
import { skillGroups, languages } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tools",
  description: "Research tools, software, and language skills of Fahima Sultana — NVivo, RStudio, KoBo Toolbox, and more.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">Skills &amp; Tools</h1>
        <p className="mt-3 text-muted-foreground">
          Software, research tools, and languages used across academic and professional work.
        </p>
      </div>

      {/* Tools by category */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">Tools &amp; Software</h2>
        </div>

        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1 font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Languages */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Languages className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">Languages</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-lg border border-border p-4 text-center"
            >
              <p className="font-serif font-semibold text-foreground">{lang.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{lang.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
