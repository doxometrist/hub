import Link from "next/link";

export function Navbar() {
  return (
    <div className="w3-top  flex flex-row gap-2 justify-end" id="navbar ">
      <div className="w3-bar w3-black w3-card">
        <Link href="/" className="w3-bar-item w3-button w3-padding-large">
          HOME
        </Link>
      </div>
      <div className="w3-bar w3-black w3-card">
        <Link href="/tldr" className="w3-bar-item w3-button w3-padding-large">
          TLDR
        </Link>
      </div>
      <div className="w3-bar w3-black w3-card">
        <Link
          href="/software"
          className="w3-bar-item w3-button w3-padding-large"
        >
          SOFTWARE
        </Link>
      </div>
    </div>
  );
}
