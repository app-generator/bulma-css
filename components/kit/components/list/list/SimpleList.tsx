import React from "react";

interface Props {
  isDark?: boolean;
}

const persons = [
  {
    img: "/images/person/1.jpg",
    name: "Charlie Rikko",
    desc: "Travel and work arround the world during 7 years",
    twitter: "@johnsmith",
  },
  {
    img: "/images/person/2.jpeg",
    name: "Eric Rikko",
    desc: "CTO full time, Eric is the master of css 3",
    twitter: "@ericP",
  },
  {
    img: "/images/person/3.jpg",
    name: "Yonas Sanchez",
    desc: "Love dogs ans ice cream, Yonas is CEO and happy",
    twitter: "@yonnasan",
  },
  {
    img: "/images/person/4.jpg",
    name: "Maria Sukko",
    desc: "You say Design ? Call Maria now",
    twitter: "@mariaDesign",
  },
];

const theme = {
  dark: {
    background: "has-background-dark",
    title: "has-text-white",
    desc: "has-text-white-ter",
    indications: "has-text-grey-lighter",
  },
  light: {
    background: "has-background-white",
    title: "has-text-dark",
    desc: "has-text-grey-dark",
  },
};
const SimpleList = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <ul>
      {persons.map((person) => {
        return (
          <li
            key={person.name}
            className={`box mb-1 ${theme[mode].background}`}
          >
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={person.img} className="is-rounded" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong className={theme[mode].title}>{person.name}</strong>
                    <small className={theme[mode].desc}>{person.twitter}</small>
                    <br />
                    <span className={theme[mode].desc}>{person.desc}</span>
                  </p>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default SimpleList;
