import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external,
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors';
  const styles = {
    primary: `${base} bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200`,
    outline: `${base} border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800`,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
