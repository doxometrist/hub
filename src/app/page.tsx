import Hero from "@/components/Hero";
import SeriesCard from "@/components/post-related/SeriesCard";
import { SeriesProps } from "@/components/post-related/SeriesProps";
import { series } from "@/data/series";
import Link from "next/link";
import Image from "next/image";
const cta = "There's only 1 call to action here:";
export default async function Home() {
  const featured: SeriesProps[] = series.filter((s) => s.featured);
  return (
    <>
      <h3>Welcome to my Hub</h3>
      <Hero />
      <div className="m-2 p-2 rounded-xl border-1 border border-solid">
        <Image
          src={"/images/outline.png"}
          alt={"Outline image"}
          width={280}
          height={240}
        />
        <div className="m-2 p-2 w-4/5 border-2 border border-solid border-red-800">

        <Link
        
          href="/files/pagan-acc.pdf"
          aria-label="pagan-acc pdf BETA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-50"
        >
          Download Discovering Pagan/Acc (Beta)
        </Link>
        </div>
      </div>

      <div
        id="featured"
        className="m-2 p-2 rounded-xl border-1 border border-solid"
      >
        <h4 className="text-xl m-2 p-2 ">Featured posts</h4>
        <div id="paraCarousel" className="m-2 p-1 flex flex-row">
          {featured.map((s, i) => {
            return <SeriesCard key={`series-${i}`} {...s} />;
          })}
        </div>
      </div>
      <div id="cta" className="m-2 p-2">
        <h3 id="cta" className="m-2 p-2">
          {cta}
        </h3>
        <span>
          <a
            href="https://twitter.com/doxometrist?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="true"
          >
            Follow @doxometrist
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
          >
          </script>
        </span>
      </div>
    </>
  );
}
