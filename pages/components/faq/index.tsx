import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import Faq from "../../../components/kit/components/pagesection/faq/Faq";

const FaqPage = () => {
  return (
    <AppLayout
      title="Faq free Bulma components"
      desc="Faq, layouts and more components for Bulma css"
    >
      <SectionHeader title="Faq" />
      <ComponentLayout
        containerWidth={12}
        vertical={false}
        title="Simple faq"
        element={<Faq />}
        component={Faq}
      />
    </AppLayout>
  );
};

export default FaqPage;
