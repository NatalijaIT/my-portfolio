interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
