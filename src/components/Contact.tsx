export function Contact() {
  return (
    <div className="w3-container w3-content w3-padding-64" id="contact">
      <h2 className="w3-wide w3-center">CONTACT</h2>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6 w3-large w3-margin-bottom">
          <i className="fa fa-map-marker"></i> London <br />
          <i className="fa fa-twitter"></i> Twitter:
          <a
            href="https://twitter.com/doxometrist"
            className="w3-bar-item w3-button"
          >
            @doxometrist
          </a>
          <i className="fa fa-envelope"></i>{" "}
          Email: doxometrist at protonmail.com<br />
        </div>
      </div>
    </div>
  );
}
