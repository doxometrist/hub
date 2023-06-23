import Hero from "@/components/Hero";
import { Main } from "@/components/Main";
import SeriesCard, { SeriesProps } from "@/components/post-related/Series";
import { Header } from "@/components/sitewide/Header";
import { series } from "@/data/series";

// todo show the non-completed ones
export default async function Home() {
  const unfinishedSeries: SeriesProps[] = series.filter((s) => !s.completed);
  return (
    <>
      <Header />

      <h3>just testing</h3>
      <Hero />
      {unfinishedSeries.map((s) => {
        return <SeriesCard {...s} />;
      })}
      <Main />
    </>
  );
}
