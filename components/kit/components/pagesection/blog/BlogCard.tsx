import React from "react";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    background: "has-background-dark",
    title: "has-text-white",
    desc: "has-text-white-ter",
  },
  light: {
    background: "has-background-white",
    title: "has-text-grey-dark",
    desc: "has-text-grey",
  },
};

const BlogCard = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="/images/blog/1.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div className={`card-content ${theme[mode].background}`}>
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="/images/person/1.jpg"
                alt="Placeholder image"
                className="is-rounded"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className={`title is-4 ${theme[mode].title}`}>John Smith</p>
            <p className={`subtitle is-6 ${theme[mode].desc}`}>@johnsmith</p>
          </div>
        </div>

        <div className={`content ${theme[mode].desc}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time>11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
