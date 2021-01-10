import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

const Header = ({ hideGithub, hideHelp, ddmMode, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const listElement = useRef<HTMLDivElement>();
  const selectButton = useRef<HTMLAnchorElement>();
  const handleClickOutside = useCallback((event) => {
    const myHTMLWrapper = listElement.current;
    const btnElement = selectButton.current;
    if (
      myHTMLWrapper &&
      btnElement &&
      !myHTMLWrapper.contains(event.target) &&
      !btnElement.contains(event.target)
    ) {
      setIsSectionOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container is-max-widescreen pt-5 pb-5">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
          </Link>
          <a
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            role="button"
            ref={selectButton}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            {ddmMode ? (
              <div
                ref={listElement}
                className={`navbar-item has-dropdown ${
                  isSectionOpen ? "is-active" : ""
                }`}
              >
                <a
                  className="navbar-link has-text-dark is-size-5 ml-4"
                  onClick={() => setIsSectionOpen(!isSectionOpen)}
                >
                  Components
                </a>

                <div className="navbar-dropdown is-boxed">
                  {items.map((item, index) => {
                    return (
                      <div key={item.label}>
                        <Link href={item.link}>
                          <a className="navbar-item is-size-6 has-text-dark">
                            <div className="is-flex is-flex-direction-row is-align-items-center">
                              <span className="mr-3">{item.icon}</span>
                              <div>
                                <p className="ml-2">{item.label}</p>
                                <p className="ml-2 has-text-grey-light">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>

                        {index !== items.length - 1 && (
                          <hr className="navbar-divider" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                {items.map((item) => {
                  return (
                    <Link key={item.link} href={item.link}>
                      <a className="navbar-item" key={item.label}>
                        {item.label}
                      </a>
                    </Link>
                  );
                })}
              </>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!hideHelp && (
                  <Link href="/started">
                    <a className="button is-primary">
                      <strong>Help</strong>
                    </a>
                  </Link>
                )}

                {!hideGithub && (
                  <a
                    target="_blank"
                    className="button is-light"
                    href="https://github.com/app-generator/bulma-css"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="mr-2"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                    </svg>
                    <span>Github</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
