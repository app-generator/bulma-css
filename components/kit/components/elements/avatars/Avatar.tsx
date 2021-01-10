import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

const Avatar = ({ size }: Props) => {
  let sizeClasses = "is-48x48";
  if (size && size !== "small") {
    sizeClasses = size === "medium" ? "is-64x64" : "is-96x96";
  }

  return (
    <a href="#" className={`image ${sizeClasses} m-auto`}>
      <img alt="profil" src="/images/person/1.jpg" className="is-rounded" />
    </a>
  );
};
export default Avatar;
