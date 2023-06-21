import Image from "next/image";

export function Andromeda() {
  return (
    <figure>
      <Image
        width={80}
        height={90}
        src="/../../assets/images/andromeda.jpg"
        // className="w3-image w3-greyscale-min w-full"
        alt="Andromeda Galaxy, photo by ESA/Hubble"
      />
      <figcaption>
        <i>Andromeda Galaxy, photo by ESA/Hubble</i>
      </figcaption>
    </figure>
  );
}
