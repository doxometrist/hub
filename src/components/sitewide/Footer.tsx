export function Footer() {
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
      <p className="w3-medium">
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>{" "}
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
    </footer>
  );
}
