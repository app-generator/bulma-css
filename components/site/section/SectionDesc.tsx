import React from "react";
import Link from "next/link";

interface Props {
  items: section[];
  title: string;
  id: string;
}

interface section {
  title: string;
  items: number;
  img: string;
  link: string;
}

const SectionDesc = ({ title, items, id }: Props) => {
  return (
    <div className="mb-8" id={id}>
      <h1 className="is-size-4 has-text-weight-light mb-4 has-text-grey-dark">
        {title}
      </h1>

      <div className="columns is-mobile is-multiline">
        {items.map((section) => {
          return (
            <div
              key={section.title}
              className="mb-2 column is-one-fifth-desktop is-one-third-tablet is-half-mobile"
            >
              <Link href={section.link}>
                <a
                  className="box  pt-0 pl-0 pr-0 pb-2"
                  style={{ border: "1px rgb(229, 231, 235) solid" }}
                >
                  <img
                    height="150px"
                    style={{ opacity: 0.7 }}
                    src={section.img}
                    alt={section.title}
                    className="rounded-lg w-60 md:h-36 opacity-50 hover:opacity-100"
                  />
                  <p className="pl-3 pr-3 has-text-grey-dark has-text-weight-semibold">
                    {section.title}{" "}
                  </p>
                  <span className="pl-3 pr-3 has-text-grey has-text-weight-light">
                    ({section.items} components)
                  </span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionDesc;
