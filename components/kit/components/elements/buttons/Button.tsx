import React from "react";

interface Props {
  label: string;
  isDark?: boolean;
  isLoading?: boolean;
}
const theme = {
  dark: {
    background: "is-dark",
  },
  light: {
    background: "is-primary",
  },
};
const Button = ({ label, isDark, isLoading }: Props) => {
  const mode = isDark ? "dark" : "light";
  return (
    <button
      className={`button ${theme[mode].background} ${
        isLoading ? "is-loading" : ""
      }`}
    >
      {label}
    </button>
  );
};
export default Button;
