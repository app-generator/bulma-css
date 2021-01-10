import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { LiveProvider, LiveEditor } from "react-live";
import EDITOR_THEME from "../../editorTheme";
import Link from "next/link";

const StartedPage: FC = () => {
  return (
    <AppLayout
      title="Configuration to use Bulma-css for Bulma components"
      desc="Free and open source build components for bulma"
    >
      <div className="pb-10 mb-10" id="installation">
        <div className="flex items-center">
          <h1 className="is-size-2 has-text-dark mb-4 has-text-weight-semibold">
            Installation
          </h1>
        </div>

        <p className="mt-1 mb-4 is-size-5 has-text-grey">
          Bulma-css is based on{" "}
          <a
            href="https://bulma.io/"
            className="has-text-primary has-text-weight-bold"
          >
            Bulma CSS framework{" "}
          </a>
          .
        </p>
        <p className="mt-1 mb-4 is-size-5 has-text-grey">
          You need to install the library to take the full advantage of Bulma
          Kit.
        </p>
        <div>
          <p className="mt-1 mb-4 is-size-5 has-text-grey">
            Link to install Bulma Framework :{" "}
            <a
              href="https://bulma.io/"
              className="underline is-size-4 has-text-grey-dark"
            >
              Documentation
            </a>
          </p>

          <p className="pt-4 is-size-5 has-text-grey is-flex is-align-items-center">
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Once Bulma CSS is installed, you can get started!
            <Link href="/components">
              <a className="button is-primary ml-4">Let's go !</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-4 mt-4 is-size-5 has-text-grey" id="configuration">
        <div className="flex items-center">
          <h1 className="is-size-2 has-text-dark mb-4 has-text-weight-semibold">
            Configuration
          </h1>
        </div>

        <p className="mt-1 mb-4">
          Bulma Kit no need configuration, all components only use bulma classes
          and helpers, there are no custom CSS added.
        </p>
        <p className="block items-center">
          Some components need javacript to work (NavBar, DropDown). There are
          indicated with this button:
          <a className="ml-4 button is-danger" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
            >
              <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
            </svg>
            Need JS
          </a>
        </p>
        <p>
          You can check the full implementation (with JS) on the Github link of
          the component.
        </p>
      </div>
    </AppLayout>
  );
};

export default StartedPage;
