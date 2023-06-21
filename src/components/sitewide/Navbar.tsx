export function Navbar() {
  return (
    <div className="w3-top" id="navbar">
      <div className="w3-bar w3-black w3-card">
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0)"
          onClick="myFunction()"
          title="Toggle Navigation Menu"
        >
          <i className="fa fa-bars"></i>
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">HOME</a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          CONTACT
        </a>
        <a
          href="/doxometry-writings/Book of Gnon.md"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          Book of Gnon - 60'000 words
        </a>
        <a
          href="/doxometry-writings/short-version.md"
          className="w3-bar-item w3-button w3-padding-large w3-hide-small"
        >
          Book of Gnon extract - 1800 words
        </a>
        <p>Akashic Dharma - TBA</p>
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-padding-large w3-button" title="More">
            MORE <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <a
              href="https://twitter.com/doxometrist"
              className="w3-bar-item w3-button"
            >
              Twitter
            </a>
            <a
              href="https://doxometrist.substack.com/"
              className="w3-bar-item w3-button"
            >
              Main blog @ Substack
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
