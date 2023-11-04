export const cta = "There's only 1 call to action here:";

export function CallToAction() {
  return (
    <div id="cta" className="m-2 p-2">
      <h3 id="cta" className="m-2 p-2">
        {cta}
      </h3>
      <span>
        <a
          href="https://twitter.com/doxometrist?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="true"
        >
          Follow @doxometrist
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
        >
        </script>
      </span>
    </div>
  );
}
