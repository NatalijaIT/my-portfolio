import SectionHeading from '@/components/ui/SectionHeading';
import SkillCard from '@/components/ui/SkillCard';
import { skills } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-10 px-6 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About Me" />
        <div className="flex flex-col gap-12 md:flex-row md:justify-around">
          <div className="flex flex-col gap-5 md:max-w-xl md:shrink-0">
            <p className="border-l-2 border-zinc-200 pl-5 text-lg leading-8 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
              I&apos;m a front-end developer with nearly seven years of experience.
              I have mainly worked on Scrum-managed projects and actively joined all ceremonies.
              My projects have varied — from starting with a browser extension to my latest work on a startup focused on forms.
              I follow guidelines, contribute to feature discussions, and understand the importance of accessibility.
              I&apos;m a team player with experience in large teams, code reviews, and collaborating with QA and designers.
              I&apos;ve also handled projects alone in senior roles, confidently estimating the scope of work and delivering results.
              I often present demos, communicate with customers, and have experience interviewing and mentoring newcomers. I regularly learn through Udemy and welcome new ideas for problem solving.
            </p>

            <div
              id="resume"
              className="rounded-xl p-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-red-500"
            >
              <div className="flex flex-col items-center gap-4 rounded-xl bg-white px-4 py-3 text-center dark:bg-zinc-900">
                <p className="text-zinc-600 dark:text-zinc-300">
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
          </div>

          <div className="flex flex-col gap-4">
            {[2, 3, 2, 3, 2].reduce<{ rows: typeof skills[]; idx: number }>(
              (acc, count) => {
                acc.rows.push(skills.slice(acc.idx, acc.idx + count));
                acc.idx += count;
                return acc;
              },
              { rows: [], idx: 0 }
            ).rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex justify-center gap-4">
                {row.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
