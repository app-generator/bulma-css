import { FC } from "react";
import Button from "../../kit/components/elements/buttons/Button";
import PricingCard from "../../kit/components/commerce/pricing/PricingCard";
import InfoNumberCard from "../../kit/components/elements/data/InfoNumberCard";
import SimpleAlert from "../../kit/components/elements/alert/SimpleAlert";
import SimpleShoppingCard from "../../kit/components/commerce/shopping/SimpleShoppingCard";
import Sidebar from "../../kit/components/navigation/sidebar/Sidebar";
import BlogCard from "../../kit/components/pagesection/blog/BlogCard";
import SimpleProfile from "../../kit/components/pagesection/profile/SimpleProfil";
import SimpleList from "../../kit/components/list/list/SimpleList";
import SimpleTeam from "../../kit/components/pagesection/team/SimpleTeam";

const HomeComps: FC = () => {
  return (
    <div className="perspective">
      <div className="mb-4">
        <SimpleShoppingCard />
      </div>
      <div className="columns">
        <div className="column is-5">
          <div className="mb-4 is-flex is-justify-content-space-between">
            <Button label="Annuler text" />
            <Button label="Confirmer" />
          </div>

          <div className="mb-4">
            <SimpleAlert />
          </div>
          <div className="mb-4">
            <BlogCard />
          </div>
          <div className="mb-4">
            <SimpleProfile />
          </div>
        </div>
        <div className="column is-5">
          <div className="mb-4">
            <PricingCard />
          </div>

          <div className="mb-4">
            <InfoNumberCard />
          </div>

          <div className="mb-4">
            <Sidebar />
          </div>
        </div>
        <div className="column is-6">
          <div className="mb-4">
            <SimpleTeam />
          </div>
          <div className="mb-4">
            <SimpleList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComps;
