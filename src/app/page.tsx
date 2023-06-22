import { Main } from "@/components/Main";
import { SeriesProps } from "@/components/post-related/Series";
import { Header } from "@/components/sitewide/Header";
import { series } from "@/data/series";

// todo show the non-completed ones
export default async function Home() {
  const unfinishedSeries: SeriesProps[] = series.filter((s) => !s.completed);
  return (
    <>
      <Header />

      <h3>just testing</h3>
      <Main />
    </>
  );
}
