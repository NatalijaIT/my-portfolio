import Image from 'next/image';
import type { Project } from '@/lib/types';
import Button from '@/components/ui/Button';

export default function ProjectCard({ title, description, tags, href, repo, images, details }: Project) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 max-w-2xl mx-auto">
      <div className="flex flex-row">
        {images && images.length > 0 && (
          <div className="relative flex w-56 shrink-0 items-center justify-center bg-zinc-100 dark:bg-zinc-800" style={{ minHeight: '240px' }}>
            {images.map((src, i) => {
              const transforms = [
                { rotate: '-8deg', translateX: '-34px', translateY: '10px', zIndex: 0 },
                { rotate: '5deg', translateX: '0px', translateY: '-6px', zIndex: 10 },
                { rotate: '-2deg', translateX: '34px', translateY: '4px', zIndex: 20 },
              ];
              const t = transforms[i] ?? transforms[0];
              return (
                <div
                  key={i}
                  className="absolute w-32 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-zinc-700"
                  style={{ transform: `rotate(${t.rotate}) translate(${t.translateX}, ${t.translateY})`, zIndex: t.zIndex }}
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-1.5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {href && (
              <Button href={href} external>
                Live
              </Button>
            )}
            {repo && (
              <Button href={repo} variant="outline" external>
                GitHub
              </Button>
            )}
          </div>
        </div>

      </div>
      {details && (
        <div className="border-t border-zinc-100 px-5 py-4 dark:border-zinc-800">
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{details}</p>
        </div>
      )}

    </div>
  );
}
