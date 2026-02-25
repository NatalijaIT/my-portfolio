import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Projects" subtitle="Things I've built" />
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
