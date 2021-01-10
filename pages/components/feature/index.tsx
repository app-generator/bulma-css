import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import Features from "../../../components/kit/components/pagesection/feature/Features";

const FeaturePage = () => {
  return (
    <AppLayout
      title="Features sections free Bulma components"
      desc="Features sections more components for Bulma css"
    >
      <SectionHeader title="Features" />
      <ComponentLayout
        vertical={true}
        containerWidth={11}
        title="Features"
        element={<Features />}
        component={Features}
      />
    </AppLayout>
  );
};

export default FeaturePage;
