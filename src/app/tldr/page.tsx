import Quote from "@/components/post-related/Quote";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">tldr</h1>
      </header>
      <div
        id="quotes"
        className="m-2 p-2 rounded-xl border-1 border-solid border border-white"
      >
        <Quote
          author={"Dharmakirti"}
          content={"vanquish all the heretics"}
          link={"https://en.wikipedia.org/wiki/Dharmakirti#History"}
        />
        <div>
          <h3>Commentary:</h3>
          <p>Too many people are wrong on the internet</p>
        </div>
      </div>
    </>
  );
}
