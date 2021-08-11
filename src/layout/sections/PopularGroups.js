import React from "react";
import PopularGroupCard from "../../components/cards/PopularGroupCard";
import Section from "../../components/general/Section";
import user1 from "../../assets/images/icons/user-3-icon.png";
import user2 from "../../assets/images/icons/user-4-icon.png";
import user3 from "../../assets/images/icons/user-2-icon.png";
import user4 from "../../assets/images/icons/user-1-icon.png";

const PopularGroups = () => {
  const images = [user1, user2, user3, user4];
  const groups = [
    {
      title: "Embrace the Curl",
      desc: "May our curls pop and never stop!",
    },
    {
      title: "Embrace the Curl",
      desc: "May our curls pop and never stop!",
    },
    {
      title: "Embrace the Curl",
      desc: "May our curls pop and never stop!",
    },
    {
      title: "Embrace the Curl",
      desc: "May our curls pop and never stop!",
    },
  ];

  return (
    <Section
      title="Popular Groups"
      subtitle="Where the beauty TALK are"
      seeMore
    >
      <div className="flex-between">
        {groups.map((group, index) => (
          <PopularGroupCard
            key={index}
            title={group.title}
            image={images[index]}
            desc={group.desc}
          />
        ))}
      </div>
    </Section>
  );
};

export default PopularGroups;
