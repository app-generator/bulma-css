import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Table from "../../../components/kit/components/list/table/Table";

const TablesPage: FC = () => {
  return (
    <AppLayout
      title="Tables free Bulma components"
      desc="Tables and more components for Bulma css"
    >
      <SectionHeader title="Table" />
      <ComponentLayout
        title="Simple Table"
        containerWidth={8}
        element={<Table />}
        component={Table}
      />
    </AppLayout>
  );
};

export default TablesPage;
