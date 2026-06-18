import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/lib/data';
import SkillCard from '../ui/SkillCard';

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-50 py-10 px-6 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        <div>
          <div className="flex flex-wrap gap-10 justify-center">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        <div
          id="resume"
          className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-8 py-10 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          <p className="text-zinc-500 dark:text-zinc-400">
            You can find the full list of my skills and commercial experience in my CV.
          </p>
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
