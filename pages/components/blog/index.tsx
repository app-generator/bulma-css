import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import BlogCard from "../../../components/kit/components/pagesection/blog/BlogCard";

const BlogPage = () => {
  return (
    <AppLayout
      title="Blogs free Bulma components"
      desc="Blogs cards, Blogs layouts,... components for Bulma css"
    >
      <SectionHeader title="Blog" />
      <ComponentLayout
        vertical={false}
        hasDarkMode={true}
        containerWidth={4}
        title="Blog card"
        element={<BlogCard />}
        component={BlogCard}
      />
    </AppLayout>
  );
};

export default BlogPage;
