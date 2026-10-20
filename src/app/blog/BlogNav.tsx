import Image from "next/image";
import Link from "next/link";

export default function BlogNav() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <Image src="/logo.svg" alt="" width={32} height={32} />
          <span>
            LeadDaily<span className="text-primary">.App</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/blog" className="text-primary">
            Blog
          </Link>
          <Link
            href="https://my.leaddaily.app"
            className="text-gray-700 transition hover:text-primary"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}