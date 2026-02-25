import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="About Me" />
        <p className="border-l-2 border-zinc-200 pl-5 text-lg leading-8 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
          I&apos;m a front-end developer with nearly seven years of experience.
          I have mainly worked on Scrum-managed projects and actively joined all ceremonies.
          My projects have varied — from starting with a browser extension to my latest work on a startup focused on forms.
          I follow guidelines, contribute to feature discussions, and understand the importance of accessibility.
          I&apos;m a team player with experience in large teams, code reviews, and collaborating with QA and designers.
          I&apos;ve also handled projects alone in senior roles, confidently estimating the scope of work and delivering results.
          I often present demos, communicate with customers, and have experience interviewing and mentoring newcomers. I regularly learn through Udemy and welcome new ideas for problem solving.
        </p>
      </div>
    </section>
  );
}
