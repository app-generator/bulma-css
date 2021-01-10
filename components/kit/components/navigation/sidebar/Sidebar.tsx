import React from "react";

interface Props {
  isDark?: boolean;
}

const theme = {
  dark: {
    background: "has-background-dark",
    title: "has-text-white",
    list: "has-text-grey-light",
  },
  light: {
    background: "has-background-white",
    title: "has-text-grey-dark",
    list: "has-text-grey-dark",
  },
};
const Sidebar = (props: Props) => {
  const mode = props.isDark ? "dark" : "light";
  return (
    <div className={`box ${theme[mode].background}`}>
      <aside className="menu">
        <p className={`menu-label ${theme[mode].title}`}>General</p>
        <ul className="menu-list">
          <li>
            <a className={`${theme[mode].list}`}> Dashboard</a>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>Customers</a>
          </li>
        </ul>
        <p className={`menu-label ${theme[mode].title}`}>Administration</p>
        <ul className="menu-list">
          <li>
            <a className={`menu-label ${theme[mode].title}`}>Team Settings</a>
          </li>
          <li>
            <a className="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a className={`${theme[mode].list}`}>Members</a>
              </li>
              <li>
                <a className={`${theme[mode].list}`}>Plugins</a>
              </li>
              <li>
                <a className={`${theme[mode].list}`}>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>Invitations</a>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>
              Cloud Storage Environment Settings
            </a>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>Authentication</a>
          </li>
        </ul>
        <p className={`menu-label ${theme[mode].title}`}>Transactions</p>
        <ul className="menu-list">
          <li>
            <a className={`${theme[mode].list}`}>Payments</a>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>Transfers</a>
          </li>
          <li>
            <a className={`${theme[mode].list}`}>Balance</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default Sidebar;
