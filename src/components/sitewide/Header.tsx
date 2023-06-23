import Link from "next/link";

export function Header() {
  const home = "Doxometrist's Hub";
  return (
    <header className="flex justify-between mb-4 items-center">
      <Link className="text-xl bold" href="/">{home}</Link>
    </header>
  );
}
