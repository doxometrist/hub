import { SeriesProps } from "@/components/post-related/SeriesProps";
import { series } from "@/data/series";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const thisSeries = series.find((s) => s.id === parseInt(params.id));
  console.group("params slug, ", params.id);
  console.group("params slug type ", typeof params.id);
  console.group("this series", thisSeries);
  return (
    <div>
      {thisSeries ? <SeriesView {...thisSeries} /> : "404 not found"}
    </div>
  );
}

function SeriesView(
  { href, id, title, description, longDescription, completed }: SeriesProps,
) {
  return (
    <div id={id.toString()}>
      <div id="heading" className="m-2 p-2 flex flex-col">
        <h3 className="text-xl bold m-2 p-2">{title}</h3>
        <Link
          className="border w-80 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href={`/hub/${href}`}
        >
          Start reading the first post!
        </Link>
      </div>
      {completed ? <FontAwesomeIcon icon="check" /> : "upcoming"}

      <div id="descriptions" className="m-4">
        <p>{description}</p>
        {longDescription
          ? <p>{longDescription}</p>
          : <p>no description available</p>}
      </div>
    </div>
  );
}
