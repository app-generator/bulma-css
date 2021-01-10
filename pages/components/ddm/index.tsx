import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import DropDownMenu from "../../../components/kit/components/elements/ddm/DropDownMenu";

const DdmPages: FC = () => {
  return (
    <AppLayout
      title="Drop down menu free Bulma components"
      desc="Drop down menu and more components for Bulma css"
    >
      <SectionHeader title="Drop Down" />
      <ComponentLayout
        containerClasses="pb-6 has-text-centered"
        title="Simple ddm"
        containerWidth={1}
        jsLink="https://github.com/app-generator/bulma-css"
        element={<DropDownMenu forceOpen={true} />}
        component={Button}
      />
    </AppLayout>
  );
};

export default DdmPages;
