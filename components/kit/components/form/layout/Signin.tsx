import React from "react";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    text: "has-text-white",
    background: "has-background-dark",
  },
  light: {
    text: "has-text-dark",
    background: "has-background-white",
  },
};

const Signin = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <form className={`box ${theme[mode].background}`}>
      <h2 className={`title has-text-centered ${theme[mode].text}`}>Signin</h2>
      <div className="field">
        <p className="control">
          <input className="input" type="email" placeholder="Email" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="password" placeholder="Password" />
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button className="button is-success">Login</button>
        </p>
      </div>
    </form>
  );
};
export default Signin;
