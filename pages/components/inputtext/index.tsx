import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import InputText from "../../../components/kit/components/form/inputtext/InputText";

const InputTextPage: FC = () => {
  return (
    <AppLayout
      title="Inputs text free bulma components"
      desc="Input and more components for bulma css"
    >
      <SectionHeader title="Input" />

      <ComponentLayout
        title="Simple"
        containerWidth={4}
        element={<InputText />}
        component={InputText}
      />
    </AppLayout>
  );
};

export default InputTextPage;
