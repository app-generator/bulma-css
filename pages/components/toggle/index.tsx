import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Checkbox from "../../../components/kit/components/form/toggle/Checkbox";

const TogglePage: FC = () => {
  return (
    <AppLayout
      title="Toggle elements section free Bulma components"
      desc="Toggle elements and more components for Bulma css"
    >
      <SectionHeader title="Toggle" />
      <ComponentLayout
        title="Checkbox"
        containerWidth={4}
        element={<Checkbox />}
        component={Checkbox}
      />
    </AppLayout>
  );
};

export default TogglePage;
