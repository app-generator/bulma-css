import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Badge from "../../../components/kit/components/elements/badges/Badge";

const BadgesPage: FC = () => {
  return (
    <AppLayout
      title="Badges free Bulma components"
      desc="Badges, Popins... components for Bulma css"
    >
      <SectionHeader title="Badges" />

      <ComponentLayout
        title="Simple Badge"
        hasDarkMode={true}
        containerClasses="has-text-centered"
        containerWidth={2}
        element={<Badge label="I'm a badge" />}
        component={Badge}
      />
    </AppLayout>
  );
};

export default BadgesPage;
