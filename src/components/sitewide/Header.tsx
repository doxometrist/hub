import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between mb-4 items-center">
      <Link className="text-xl bold" href="/">Doxometrist's Hub</Link>
    </header>
  );
}
