import Link from "next/link";

export const LINK_TYPE = ["Github", "Notion"] as const;

interface ProjectLinkProps {
  href: string;
  linkType: (typeof LINK_TYPE)[number];
  className: string;
  target?: string;
  rel?: string;
  icon: React.ReactElement;
}
export default function ProjectLink({
  href,
  target,
  rel,
  className,
  icon,
  linkType,
}: ProjectLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={`${linkType} 페이지 열기`}
    >
      {icon}
    </Link>
  );
}
