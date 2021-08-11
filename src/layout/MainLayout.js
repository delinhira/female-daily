import React, { useEffect, useState } from "react";
import { getData } from "../services/API";

import Ads from "../components/general/Ads";
import Footer from "./Footer";
import Header from "./Header";
import EditorsChoice from "./sections/EditorsChoice";
import FemaleDaily from "./sections/FemaleDaily";
import LatestArticles from "./sections/LatestArticles";
import LatestReviews from "./sections/LatestReviews";
import LatestVideos from "./sections/LatestVideos";
import PopularGroups from "./sections/PopularGroups";
import Recommendation from "./sections/Recommendation";
import TopBrands from "./sections/TopBrands";
import TrendingThisWeek from "./sections/TrendingThisWeek";
import TopBar from "./TopBar";
import LeftMenu from "../components/general/LeftMenu";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataHandle();
  }, []);

  const getDataHandle = () => {
    setLoading(true);

    const onSuccess = (response) => {
      setData(response.data);
      setLoading(false);
    };
    const onFailure = (err) => {
      setLoading(false);
    };

    getData(onSuccess, onFailure);
  };

  return (
    <>
      <main className="main">
        <TopBar />
        <LeftMenu />
        <div className="main-content">
          <Header />
          <EditorsChoice data={data["editor's choice"]} loading={loading} />
        </div>
        <Recommendation />
        <div className="main-content">
          <Ads type="billboard">
            Horizontal 970x250
            <br />
            (Internal campaign only)
          </Ads>
          <LatestArticles data={data["latest articles"]} loading={loading} />
          <LatestReviews data={data["latest review"]} loading={loading} />
          <PopularGroups />
          <LatestVideos />
          <TrendingThisWeek />
          <TopBrands />
          <FemaleDaily />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
