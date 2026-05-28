import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, BookOpen, BarChart2, Image as ImageIcon } from "lucide-react";
import { researchProjects } from "@/lib/data";
import type { Metadata } from "next";
import type { ResearchType } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Research presentations and publications by Fahima Sultana — medical debt, health inequities, and social determinants of health.",
  openGraph: {
    title: "Research & Publications | Fahima Sultana",
    description: "Conference papers, poster presentations, and research projects by Fahima Sultana.",
  },
};

const typeIcon: Record<ResearchType, React.ReactNode> = {
  Paper: <BookOpen className="h-4 w-4" />,
  Poster: <BarChart2 className="h-4 w-4" />,
  Exhibition: <ImageIcon className="h-4 w-4" />,
};

const typeBadgeVariant: Record<ResearchType, "default" | "secondary" | "outline"> = {
  Paper: "default",
  Poster: "secondary",
  Exhibition: "outline",
};

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold text-foreground">Research &amp; Publications</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Conference papers, poster presentations, and exhibition work spanning medical debt, health inequities, and social determinants of health.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchProjects.map((project) => (
          <Card key={project.slug} className="flex flex-col hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={typeBadgeVariant[project.type]} className="gap-1 text-xs">
                  {typeIcon[project.type]}
                  {project.type}
                </Badge>
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>
              <h2 className="font-serif text-base font-semibold leading-snug text-foreground line-clamp-3">
                {project.title}
              </h2>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground/80">{project.venue}</p>
                <p>{project.location}</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                {project.shortDescription}
              </p>
              <Link
                href={`/research/${project.slug}`}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-auto"
              >
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
