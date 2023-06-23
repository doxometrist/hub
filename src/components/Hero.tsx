import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const outcomes = [
  "Substack series - online pseud philosophy",
  "Software projects - tools for the terminally online community",
  "All other stuff - if I do a podcast one day, it'll be referenced here!",
];


const Hero = () => {
  return (
    <div className="border border-gray-200 md:flex md:flex-row">
      <div className="bg-gray-100 text-center md:w-1/3">
        <Image src={""} alt={""} />
      </div>
      <div className="px-4 md:px-8 py-6 self-center md:w-2/3">
        <h2 className="font-bold text-2xl mb-3">this is a directory to my:</h2>
        <ul className="mb-6">
          {outcomes.map((i) => (
            <li key={i} className="text-slate-300 flex mb-2">
              <span className="self-center mr-2">
                <FontAwesomeIcon icon="check" />
              </span>
              <span className="opacity-75">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
