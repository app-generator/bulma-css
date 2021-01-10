import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SimpleAlert from "../../../components/kit/components/elements/alert/SimpleAlert";

const AlertPage = () => {
  return (
    <AppLayout
      title="Alert free Bulma components"
      desc="Alerts, Modales, Banners ... components for Bulma css"
    >
      <SectionHeader title="Simple Alert" />
      <ComponentLayout
        vertical={true}
        title="Simple alert"
        element={<SimpleAlert />}
        component={SimpleAlert()}
      />
    </AppLayout>
  );
};

export default AlertPage;
