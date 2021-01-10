import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import SimpleTestimonial from "../../../components/kit/components/pagesection/testimonial/SimpleTestimonial";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="Testimonials section free Bulma components"
      desc="Testimonials and more components for Bulma css"
    >
      <SectionHeader title="Testimonials" />
      <ComponentLayout
        title="Small"
        hasDarkMode={true}
        containerWidth={4}
        element={<SimpleTestimonial />}
        component={Button}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
