import { FC } from "react";
import Header from "../site/header/header";
import Meta from "../site/Meta";
import { menuEntry } from "./AppLayout";

const HomeLayout: FC = ({ children }) => {
  return (
    <>
      <Meta
        pageTitle="Bulma-css Free and open source components"
        description="Over 200 free and open source components and templates for Bulma css to build beautiful UI"
      />

      <div
        className="has-background-white is-clipped h-screen"
        style={{ height: "100vh" }}
      >
        <div className="pb-8 has-background-white pr-4 pl-4">
          <Header
            items={menuEntry}
            ddmMode={true}
            hideHelp={true}
            hideGithub={true}
          />

          <main className="container bd-lead is-max-widescreen mt-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
