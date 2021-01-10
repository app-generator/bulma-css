import React from "react";

interface Props {
  type: "is-success" | "is-danger";
  value: string;
}

const ProgressBar = (props: Props) => {
  return (
    <progress
      className={`progress ${props.type}`}
      value={props.value}
      max="100"
    >
      {props.value}%
    </progress>
  );
};
export default ProgressBar;
