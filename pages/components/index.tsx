import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Elements from "../../components/kit/components/elements";
import Forms from "../../components/kit/components/form";
import Commerce from "../../components/kit/components/commerce";
import Navigation from "../../components/kit/components/navigation";
import Pagesection from "../../components/kit/components/pagesection";
import ListPage from "../../components/kit/components/list";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="Bulma components"
      desc="Dree and open source components for Bulma css, with live code edition to build beautiful UI"
    >
      <Elements />
      <Forms />
      <Commerce />
      <Navigation />
      <Pagesection />
      <ListPage />
    </AppLayout>
  );
};

export default ComponentsPage;
