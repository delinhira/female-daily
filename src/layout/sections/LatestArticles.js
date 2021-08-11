import React from "react";
import ArticleCard from "../../components/cards/ArticleCard";
import Section from "../../components/general/Section";
import { Loading, NoData } from "../../components/general/Utility";

const LatestArticles = ({ data = [], loading }) => {
  return (
    <Section
      title="Latest Articles"
      subtitle="See our weekly most reviewed products"
      seeMore
    >
      <div className="flex-between">
        {loading ? (
          <Loading />
        ) : data.length ? (
          data.map((row, index) => (
            <ArticleCard
              key={index}
              title={row.title}
              author={row.author}
              image={row.image}
              published_at={row.published_at}
            />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </Section>
  );
};

export default LatestArticles;
