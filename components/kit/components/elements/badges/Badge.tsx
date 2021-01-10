import React from "react";

interface Props {
  label: string;
  isDark?: boolean;
}

const compClasses = {
  dark: {
    tag: "is-dark",
  },
  light: {
    tag: "is-success",
  },
};

const Badge = ({ label, isDark }: Props) => {
  const classes = isDark ? compClasses.dark.tag : compClasses.light.tag;
  return (
    <span className={`tag ${classes} is-medium`}>
      {label}
      <button className="delete is-small"></button>
    </span>
  );
};
export default Badge;
