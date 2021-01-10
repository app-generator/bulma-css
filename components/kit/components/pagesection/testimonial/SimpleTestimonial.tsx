import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    background: "has-background-dark",
    text: "has-text-white-ter",
  },
  light: {
    background: "has-background-white",
    text: "has-text-grey-dark",
  },
};

const SimpleTestimonial = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className={`box ${theme[mode].background} ${theme[mode].text}`}>
      <p>
        <span className="font-bold has-text-primary is-size-5">“</span>To get
        social media testimonials like these, keep your customers engaged with
        your social media accounts by posting regularly yourself
        <span className="font-bold has-text-primary is-size-5">”</span>
      </p>
      <div className="is-flex is-align-items-center is-justify-content-start mt-4">
        <a href="#" className="image is-48x48">
          <img alt="profil" src="/images/person/1.jpg" className="is-rounded" />
        </a>
        <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
          <span className="font-semibold has-text-weight-bold">
            Jean Miguel
          </span>
          <span className="is-size-7 is-flex is-align-items-center">
            User of Bulma-css
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimpleTestimonial;
