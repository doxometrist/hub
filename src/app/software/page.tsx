import SoftwareProjectCard from "@/components/post-related/SoftwareProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function SoftwarePage() {
  const readyProjects = projects.filter((s) => s.title);
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Software</h1>
      </header>
      <div
        id="featured"
        className="m-2 p-2 rounded-xl border-1 border border-solid"
      >
        <h4 className="text-xl m-2 p-2 ">My software projects</h4>
        <div id="paraCarousel" className="m-2 p-1 flex flex-row">
          {readyProjects.map((s, i) => {
            return <SoftwareProjectCard key={`project-${i}`} {...s} />;
          })}
        </div>
      </div>
    </>
  );
}
