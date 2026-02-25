import Button from '@/components/ui/Button';
import ConnectingDots from '@/components/ui/ConnectingDots';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center dark:bg-zinc-950"
    >
      <ConnectingDots />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Hello, I&apos;m Natalie.
        </h1>
        <p className="mb-8 max-w-md text-lg text-zinc-500 dark:text-zinc-400">
          I am a full-stack developer specializing in front-end development · Building clean, fast, and accessible web
          experiences.
        </p>
        <div className="flex gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
