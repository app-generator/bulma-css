import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Select from "../../../components/kit/components/form/select/Select";

const InputTextPage: FC = () => {
  return (
    <AppLayout
      title="Select input free Bulma components"
      desc="Select input and more components for Bulma css"
    >
      <SectionHeader title="Select" />
      <ComponentLayout
        title="simple"
        containerClasses="has-text-centered"
        containerWidth={3}
        element={<Select />}
        component={Select}
      />
    </AppLayout>
  );
};

export default InputTextPage;
