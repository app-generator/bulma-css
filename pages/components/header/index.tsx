import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Header from "../../../components/kit/components/navigation/header/Header";

const HeaderPage: FC = () => {
  return (
    <AppLayout
      title="Headers sections free Bulma components"
      desc="Headers, TopBar, Navbar and more components for Bulma css"
    >
      <SectionHeader title="Header" />
      <ComponentLayout
        vertical={true}
        title="Header"
        containerWidth={12}
        jsLink="https://github.com/app-generator/bulma-css"
        element={<Header />}
        component={Header}
      />
    </AppLayout>
  );
};

export default HeaderPage;
