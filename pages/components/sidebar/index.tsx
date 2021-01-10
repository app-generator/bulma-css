import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Sidebar from "../../../components/kit/components/navigation/sidebar/Sidebar";

const SideBar: FC = () => {
  return (
    <AppLayout
      title="Sidebar free Bulma components"
      desc="Sidebar and more components for bulma css"
    >
      <SectionHeader title="Sidebar" />
      <ComponentLayout
        title="Sidebar"
        hasDarkMode={true}
        containerWidth={4}
        element={<Sidebar />}
        component={Sidebar}
      />
    </AppLayout>
  );
};

export default SideBar;
