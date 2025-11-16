import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-baseline gap-2">
          <Link href="/" className="text-lg font-display font-bold text-foreground hover:text-primary transition-colors">
            Alan Brown
          </Link>
          <span className="text-sm text-muted-foreground">UI/UX Designer</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="mailto:hello@alanbrown.design"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
