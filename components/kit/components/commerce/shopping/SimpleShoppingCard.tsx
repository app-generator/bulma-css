import React from "react";
import Button from "../../elements/buttons/Button";

interface Props {
  isDark?: boolean;
}
const theme = {
  dark: {
    background: "has-background-dark",
    text: "has-text-white",
  },
  light: {
    background: "has-background-white",
    text: "has-text-grey-dark",
  },
};

const SimpleShoppingCard = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className={`box ${theme[mode].background}`}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img src="/images/object/2.png" alt="Image" />
          </figure>
        </div>
        <div className={`media-content ${theme[mode].text}`}>
          <div className="content">
            <p>
              <strong className={theme[mode].text}>Hibiscus Ficus</strong>{" "}
              <small>@NewCollection</small> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <p className="level-item is-size-3 has-text-primary has-text-weight-bold">
                699$
              </p>
            </div>
            <div className="level-right">
              <p className="level-item">
                <Button label="Buy" />
              </p>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};
export default SimpleShoppingCard;
