import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SignIn from "../../../components/kit/components/form/layout/SignIn";

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
        element={<SignIn />}
        component={SignIn}
      />
    </AppLayout>
  );
};

export default TogglePage;
