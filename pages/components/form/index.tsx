import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Signin from "../../../components/kit/components/form/layout/Signin";

const TogglePage: FC = () => {
  return (
    <AppLayout
      title="Input sections free Bulma components"
      desc="Input, Form sections more components for Bulma css"
    >
      <SectionHeader title="Form layout" />

      <ComponentLayout
        containerWidth={4}
        title="Login"
        hasDarkMode={true}
        element={<Signin />}
        component={Signin}
      />
    </AppLayout>
  );
};

export default TogglePage;
