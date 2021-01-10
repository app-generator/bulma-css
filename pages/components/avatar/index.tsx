import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Avatar from "../../../components/kit/components/elements/avatars/Avatar";

const AvatarPage: FC = () => {
  return (
    <AppLayout
      title="Avatars free Bulma components"
      desc="Avatars, profile pictures... components for Bulma css"
    >
      <SectionHeader title="Avatar" />
      <ComponentLayout
        title="Small avatar"
        element={<Avatar size="small" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Medium avatar"
        element={<Avatar size="medium" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Large avatar"
        element={<Avatar size="large" />}
        component={Avatar}
      />
    </AppLayout>
  );
};

export default AvatarPage;
