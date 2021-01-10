import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SimpleTeam from "../../../components/kit/components/pagesection/team/SimpleTeam";

const TeamPage: FC = () => {
  return (
    <AppLayout
      title="Teams section free Bulma components"
      desc="Teams and more components for Bulma css"
    >
      <SectionHeader title="Team" />
      <ComponentLayout
        title="Simple"
        hasDarkMode={true}
        containerWidth={3}
        element={<SimpleTeam />}
        component={SimpleTeam}
      />
    </AppLayout>
  );
};

export default TeamPage;
