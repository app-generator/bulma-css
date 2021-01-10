import React from "react";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    text: "has-text-white",
    background: "has-background-dark",
  },
  light: {
    text: "has-text-dark",
    background: "has-background-white",
  },
};

const InfoNumberCard = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className="tile is-primary">
      <article className={`tile is-child p-4 box ${theme[mode].background}`}>
        <p className={`title ${theme[mode].text}`}>43000k</p>
        <p className={`subtitle ${theme[mode].text}`}>Sales</p>
        <progress className="progress is-success" value="70" max="100">
          70%
        </progress>
      </article>
    </div>
  );
};
export default InfoNumberCard;
