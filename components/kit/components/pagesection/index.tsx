import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Pagesection: FC = () => {
  const pageSections = [
    {
      title: "CTAs",
      items: 1,
      img: "images/sections/cta.png",
      link: "/components/cta",
    },
    {
      title: "Testimonials",
      items: 1,
      img: "images/sections/testimonial.png",
      link: "/components/testimonial",
    },
    {
      title: "Profiles",
      items: 1,
      img: "images/sections/profile.png",
      link: "/components/profile",
    },
    {
      title: "Teams",
      items: 1,
      img: "images/sections/team.png",
      link: "/components/team",
    },
    {
      title: "FAQs",
      items: 1,
      img: "images/sections/faq.png",
      link: "/components/faq",
    },
    {
      title: "Features",
      items: 1,
      img: "images/sections/feature.png",
      link: "/components/feature",
    },
    {
      title: "Blogs",
      items: 1,
      img: "images/sections/blog.png",
      link: "/components/blog",
    },
  ];

  return (
    <SectionDesc id="pagesection" items={pageSections} title="Page sections" />
  );
};

export default Pagesection;
