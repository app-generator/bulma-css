import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SimpleProfile from "../../../components/kit/components/pagesection/profile/SimpleProfil";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="Profile cards free Bulma components"
      desc="Profile cards and more components for bulma css"
    >
      <SectionHeader title="Profile / Team" />
      <ComponentLayout
        hasDarkMode={true}
        containerWidth={2}
        title="Simple horizontal"
        element={<SimpleProfile />}
        component={SimpleProfile}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
