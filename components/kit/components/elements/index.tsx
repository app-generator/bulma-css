import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Elements: FC = () => {
  const elementsSection = [
    {
      title: "Buttons",
      items: 2,
      img: "images/sections/button.png",
      link: "/components/buttons",
    },
    {
      title: "Badges",
      items: 1,
      img: "images/sections/badges.png",
      link: "/components/badges",
    },
    {
      title: "Avatars",
      items: 3,
      img: "images/sections/avatar.png",
      link: "/components/avatar",
    },
    {
      title: "Menu list",
      items: 1,
      img: "images/sections/ddm.png",
      link: "/components/ddm",
    },
    {
      title: "Alerts",
      items: 1,
      img: "images/sections/alerte.png",
      link: "/components/alert",
    },
    {
      title: "Dashboards",
      items: 1,
      img: "images/sections/data.png",
      link: "/components/data",
    },
    {
      title: "Progress bars",
      items: 2,
      img: "images/sections/progress.png",
      link: "/components/progress",
    },
  ];

  return <SectionDesc id="elements" items={elementsSection} title="Elements" />;
};

export default Elements;