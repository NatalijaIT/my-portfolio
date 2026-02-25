export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Natalie Virt.
      </div>
    </footer>
  );
}
