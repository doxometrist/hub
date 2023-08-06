import Link from "next/link";

interface NavButtonProps {
  link: string;
  text: string;
}

function NavButton({ link, text }: NavButtonProps) {
  return (
    <div className="w3-bar w3-black w3-card">
      <Link href={link} className="w3-bar-item w3-button w3-padding-large">
        {text}
      </Link>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="w3-top  flex flex-row gap-2 justify-end" id="navbar ">
      <NavButton link="history-book" text="On history" />
      <NavButton link="philosophy-book" text="On philosophy" />
      <NavButton link="religion-book" text="On religion" />
      <p>|</p>
      <NavButton link="/tldr" text="TLDR" />
      <NavButton link="/software" text="SOFTWARE" />
    </div>
  );
}
