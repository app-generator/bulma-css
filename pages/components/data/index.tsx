import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import InfoNumberCard from "../../../components/kit/components/elements/data/InfoNumberCard";

const DataPage = () => {
  return (
    <AppLayout
      title="Data display free Bulma components"
      desc="Data, Cards and more components for Bulma css"
    >
      <SectionHeader title="Alert" />
      <ComponentLayout
        vertical={false}
        hasDarkMode={true}
        title="Sales card"
        containerWidth={3}
        element={<InfoNumberCard />}
        component={InfoNumberCard}
      />
    </AppLayout>
  );
};

export default DataPage;
