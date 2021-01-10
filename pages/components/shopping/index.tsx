import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SimpleShoppingCard from "../../../components/kit/components/commerce/shopping/SimpleShoppingCard";

const ShoppingPage: FC = () => {
  return (
    <AppLayout
      title="Shopping cards free Bulma components"
      desc="Shopping cards components for Bulma css"
    >
      <SectionHeader title="Shopping" />

      <ComponentLayout
        title="Simple"
        hasDarkMode={true}
        vertical={true}
        containerWidth={6}
        element={<SimpleShoppingCard />}
        component={SimpleShoppingCard}
      />
    </AppLayout>
  );
};

export default ShoppingPage;
