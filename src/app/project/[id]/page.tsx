import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientNotionRenderer from "@/components/markdown/ClientNotionRenderer";
import { getNotionPageById } from "@/lib/notion-api";
import { getAllProjectIds, getProjectById } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getAllProjectIds();

  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - 유진 Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.backgroundImgUrl ? [project.backgroundImgUrl] : [],
    },
  };
}

export const revalidate = 3600;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project || !project.notionPageId) {
    notFound();
  }

  const recordMap = await getNotionPageById(project.notionPageId);

  return <ClientNotionRenderer recordMap={recordMap} />;
}
