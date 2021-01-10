import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SimpleList from "../../../components/kit/components/list/list/SimpleList";

const ListPages: FC = () => {
  return (
    <AppLayout
      title="List display text free Bulma components"
      desc="List, Ordered list and more components for Bulma css"
    >
      <SectionHeader title="List" />
      <ComponentLayout
        hasDarkMode={true}
        containerWidth={4}
        title="Simple list"
        element={<SimpleList />}
        component={SimpleList}
      />
    </AppLayout>
  );
};

export default ListPages;
