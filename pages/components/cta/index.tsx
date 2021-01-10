import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SimpleTextCta from "../../../components/kit/components/pagesection/cta/SimpleTextCta";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="CTA free Bulma components"
      desc="CTA, Banners and more bulma for Bulma css"
    >
      <SectionHeader title="CTA" />
      <ComponentLayout
        vertical={true}
        title="Simple TA"
        element={<SimpleTextCta />}
        component={SimpleTextCta}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
