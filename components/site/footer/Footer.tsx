import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="has-text-grey-light">
          <a href="https://bulma.io/made-with-bulma/">
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
          <br />
          This page is{" "}
          <strong className="has-text-grey-dark">open source</strong>. Noticed a
          component? Or something unclear?
          <br />
          <a
            className="has-text-grey"
            href="https://github.com/app-generator/bulma-css"
            style={{ borderBottom: "1px solid currentColor" }}
          >
            Improve this page on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
