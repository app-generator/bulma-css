import React from "react";
import Avatar from "../../elements/avatars/Avatar";
import Button from "../../elements/buttons/Button";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    background: "has-background-dark",
    title: "has-text-white",
    desc: "has-text-white-ter",
  },
  light: {
    background: "has-background-white",
    title: "has-text-grey-dark",
    desc: "has-text-grey-dark-light",
  },
};

const SimpleProfile = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className={`box has-text-centered ${theme[mode].background}`}>
      <div>
        <div className="flex-shrink-0">
          <Avatar size="medium" />
        </div>
        <div className="mb-4">
          <p className={`${theme[mode].title}`}>Charlie</p>
          <p className={`${theme[mode].desc} is-size-7`}>CTO</p>
        </div>

        <Button label="Add" />
      </div>
    </div>
  );
};
export default SimpleProfile;
