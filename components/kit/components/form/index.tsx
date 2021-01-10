import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Forms: FC = () => {
  const formSections = [
    {
      title: "Inputs",
      items: 1,
      img: "images/sections/input.png",
      link: "/components/inputtext",
    },
    {
      title: "Selects",
      items: 1,
      img: "images/sections/select.png",
      link: "/components/inputselect",
    },
    {
      title: "Toggles",
      items: 1,
      img: "images/sections/toggle.png",
      link: "/components/toggle",
    },
    {
      title: "Layouts",
      items: 1,
      img: "images/sections/login.png",
      link: "/components/form",
    },
  ];

  return <SectionDesc id="forms" items={formSections} title="Forms" />;
};

export default Forms;
