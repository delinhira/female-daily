import React from "react";
import EditorsChoiceCard from "../../components/cards/EditorsChoiceCard";
import Section from "../../components/general/Section";
import { Loading, NoData } from "../../components/general/Utility";

const EditorsChoice = ({ data = [], loading }) => {
  return (
    <Section
      title="Editor's Choice"
      subtitle="See our weekly most reviewed products"
    >
      <div className="flex-between">
        {loading ? (
          <Loading />
        ) : data.length > 0 ? (
          data.map((row, index) => (
            <EditorsChoiceCard
              key={index}
              editor={row.editor}
              role={row.role}
              product={row.product}
            />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </Section>
  );
};

export default EditorsChoice;
