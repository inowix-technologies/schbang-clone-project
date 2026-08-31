import { CLIENT_LOGO_SLUGS, INOWIX_PROJECTS } from "@/data/inowix-content";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";

export const HeroMicroMarquee = () => {
  const items = CLIENT_LOGO_SLUGS.slice(0, 8).map((slug) => {
    const project = INOWIX_PROJECTS[slug];
    return { name: project.name, image: project.logo || project.image };
  });

  return (
    <div className="mt-8 hidden lg:block max-w-md">
      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-3">
        Trusted by brands we build for
      </p>
      <ClientLogoMarquee items={items} direction="left" speed="normal" className="max-w-md" />
    </div>
  );
};
