import { Andromeda } from "./Andromeda";

export function Main() {
  return (
    <div className="w3-content max-w-120 mt-18">
      <div
        className="w3-container w3-content w3-black w3-center w3-padding-64"
        id="band"
      >
        <a
          href="#navbar"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          At the top
        </a>
        you'll find both the long and short versions of the text. They are
        unoptimized, structure will change. There might be some additions, too.
        <br />
        The key notions will remain the same. The short version should take a
        couple of minutes, if that raises your interest go to the long one -
        that should take about 4 hours to read.
        <br />
        Feel free to skip the sometimes lengthy quotes. They add to the
        experience, ground this work in some traditions of thought, yet are not
        necessary for the comprehension.
      </div>
    </div>
  );
}
