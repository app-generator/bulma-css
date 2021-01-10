import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import PricingCard from "../../../components/kit/components/commerce/pricing/PricingCard";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="Pricing cards free Bulma components"
      desc="Pricing cards and more components for Bulma css"
    >
      <SectionHeader title="Pricing" />

      <ComponentLayout
        title="Pricing card 1"
        hasDarkMode={true}
        containerWidth={3}
        element={<PricingCard />}
        component={PricingCard}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
