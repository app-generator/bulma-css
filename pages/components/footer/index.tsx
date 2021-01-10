import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import FooterLight from "../../../components/kit/components/navigation/footer/FooterLight";

const FooterPage: FC = () => {
  const links = [
    {
      label: "Components",
      subLinks: ["Elements", "Forms", "Commerces", "Navigation"],
    },
    {
      label: "Contacts",
      subLinks: ["Github", "Facebook", "Twitter", "LinkedIn"],
    },
    {
      label: "Customization",
      subLinks: ["Settings", "Themes", "Plugins", "LinkedIn"],
    },
  ];

  const simpleLinks = [
    {
      label: "FAQ",
    },
    {
      label: "Configuration",
    },
    {
      label: "Github",
    },
    {
      label: "LinkedIn",
    },
  ];

  return (
    <AppLayout
      title="Footers sections free Bulma components"
      desc="Footers sections more components for bulma css"
    >
      <SectionHeader title="Footer" />

      <ComponentLayout
        vertical={true}
        title="Light"
        element={<FooterLight />}
        component={FooterLight}
      />
    </AppLayout>
  );
};

export default FooterPage;
