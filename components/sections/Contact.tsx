import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-10 px-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project or opportunity? I'd love to hear from you."
        />
        <div className="mx-auto max-w-md rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="mailto:virtnatalie@gmail.com" external>
              Email Me
            </Button>
            <Button
              href="https://www.linkedin.com/in/nataliia-virt-65834a178/"
              variant="outline"
              external
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/NatalijaIT"
              variant="outline"
              external
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
