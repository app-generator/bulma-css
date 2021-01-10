import React, { useState } from "react";

interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
}

const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`dropdown is-right ${
        isOpen || props.forceOpen ? "is-active" : ""
      }`}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="dropdown-menu"
        >
          <span>Content</span>
          <span className="icon is-small">
            <svg
              width="10"
              fill="currentColor"
              height="10"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z" />
            </svg>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Dropdown item
          </a>
          <a className="dropdown-item">Other dropdown item</a>
          <a href="#" className="dropdown-item is-active">
            Active dropdown item
          </a>
        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
