import React, { FC, useState } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";

const ComponentsPage = () => {
  return (
    <AppLayout
      title="Buttons free Bulma components"
      desc="Buttons, Social buttons and more components for Bulma css"
    >
      <SectionHeader title="Buttons" />
      <ComponentLayout
        hasDarkMode={true}
        title="Button"
        containerClasses="has-text-centered"
        containerWidth={1}
        element={<Button label="Valider" />}
        component={Button}
      />
      <ComponentLayout
        hasDarkMode={true}
        containerClasses="has-text-centered"
        containerWidth={1}
        title="Loading button"
        element={<Button label="Valider" isLoading={true} />}
        component={Button}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
