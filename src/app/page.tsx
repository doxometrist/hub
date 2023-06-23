import Hero from "@/components/Hero";
import SeriesCard from "@/components/post-related/SeriesCard";
import { SeriesProps } from "@/components/post-related/SeriesProps";
import { series } from "@/data/series";
import Link from "next/link";

export default async function Home() {
  const featured: SeriesProps[] = series.filter((s) => s.featured);
  return (
    <>
      <h3>Welcome to my Hub</h3>
      <Hero />

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
          There's only 1 call to action here:
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
            charSet="utf-8"
          >
          </script>
        </span>
      </div>
    </>
  );
}
