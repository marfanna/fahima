import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Calendar, BookOpen, BarChart2, Image as ImageIcon } from "lucide-react";
import { researchProjects } from "@/lib/data";
import type { Metadata } from "next";
import type { ResearchType } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return researchProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = researchProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Fahima Sultana`,
      description: project.shortDescription,
    },
  };
}

const typeIcon: Record<ResearchType, React.ReactNode> = {
  Paper: <BookOpen className="h-4 w-4" />,
  Poster: <BarChart2 className="h-4 w-4" />,
  Exhibition: <ImageIcon className="h-4 w-4" />,
};

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = researchProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/research"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Research
      </Link>

      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              headline: project.title,
              author: { "@type": "Person", name: "Fahima Sultana" },
              datePublished: project.date,
              description: project.shortDescription,
            }),
          }}
        />

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="default" className="gap-1">
            {typeIcon[project.type]}
            {project.type}
          </Badge>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 shrink-0" />
            <span>{project.venue}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{project.date}</span>
          </div>
        </div>

        <Separator className="mb-8" />

        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          {project.shortDescription}
        </p>

        <h2 className="font-serif text-xl font-semibold mb-4">Methodology &amp; Findings</h2>
        <ul className="space-y-3 mb-8">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-xl font-semibold mb-4">Methods &amp; Tools</h2>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </article>
    </div>
  );
}
