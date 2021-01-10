import React, { FC } from "react";
import Button from "../../elements/buttons/Button";

interface Props {
  isDark?: boolean;
}

export const prices = [
  {
    label: "All illimited link",
    include: true,
  },
  {
    label: " Own analitycs plateform",
    include: true,
  },
  {
    label: "24/24 support link",
    include: true,
  },
  {
    label: " Unlimited user",
    include: true,
  },
  {
    label: "Best ranking",
    include: true,
  },
  {
    label: "Prenium svg",
    include: false,
  },
  {
    label: "Free Fonts",
    include: false,
  },
];

const theme = {
  dark: {
    background: "has-background-dark",
    title: "has-text-white",
    list: "has-text-white-ter",
    indications: "has-text-grey-lighter",
  },
  light: {
    background: "has-background-white",
    title: "has-text-grey-dark",
    list: "has-text-grey-dark",
    indications: "has-text-grey-light",
  },
};

const PricingCard = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className={`box ${theme[mode].background}`}>
      <p className={`${theme[mode].title} is-size-4 font-medium mb-2`}>
        Entreprise
      </p>
      <p className={`${theme[mode].title} is-size-2 has-text-weight-bold`}>
        $199{" "}
        <span className={`${theme[mode].indications} text-gray-300 is-size-6`}>
          / month{" "}
        </span>
      </p>
      <p className={`${theme[mode].list} is-size-7 mt-2`}>
        For most businesses that want to optimize web queries.
      </p>

      <ul className={`${theme[mode].list} is-size-6 mt-3 mb-6`}>
        {prices.map((price) => {
          return (
            <li
              key={price.label}
              className={`mb-3 is-flex is-align-items-center ${
                price.include ? "" : theme[mode].indications
              }`}
            >
              {price.include ? (
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  fill="#10b981"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="h-6 w-6 mr-2"
                  fill="red"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                </svg>
              )}

              {price.label}
            </li>
          );
        })}
      </ul>
      <div className="has-text-centered mt-3">
        <Button label="Choose plan" />
      </div>
    </div>
  );
};
export default PricingCard;
