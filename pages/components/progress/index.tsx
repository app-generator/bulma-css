import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import ProgressBar from "../../../components/kit/components/elements/progress/ProgressBar";

const ProgressPage = () => {
  return (
    <AppLayout
      title="Progress bar free Bulma components"
      desc="Progress bar and more components for Bulma css"
    >
      <SectionHeader title="Progress bar" />
      <ComponentLayout
        vertical={true}
        containerWidth={4}
        title="Simple progress bar"
        element={<ProgressBar type="is-success" value="70" />}
        component={ProgressBar}
      />
      <ComponentLayout
        vertical={true}
        containerWidth={4}
        title="Danger progress bar"
        element={<ProgressBar type="is-danger" value="20" />}
        component={ProgressBar}
      />
    </AppLayout>
  );
};

export default ProgressPage;
