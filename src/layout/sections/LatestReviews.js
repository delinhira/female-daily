import React, { useState } from "react";
import ReviewCard from "../../components/cards/ReviewCard";
import Section from "../../components/general/Section";
import user1 from "../../assets/images/icons/user-5-icon.png";
import user2 from "../../assets/images/icons/user-2-icon.png";
import Ads from "../../components/general/Ads";
import Carousel from "../../components/general/Carousel";
import { Loading, NoData } from "../../components/general/Utility";

const LatestReviews = ({ data = [], loading }) => {
  const userImage = [user1, user2];
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(2);
  const lastIndex = activePage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  return (
    <div className="latest-review flex-between-align-center">
      <Section
        title="Latest Reviews"
        subtitle="So you can make better purchace decision"
        seeMore
      >
        <div className="flex-between">
          {loading ? (
            <Loading />
          ) : data.length > 0 ? (
            currentItems.map((row, index) => (
              <ReviewCard
                key={index}
                user={row.user}
                userImage={userImage[index]}
                profile={row.profile}
                product={row.product}
                star={row.star}
                comment={row.comment}
              />
            ))
          ) : (
            <NoData />
          )}
        </div>
        <div className="flex-center">
          <Carousel
            totalItem={data.length}
            itemsPerPage={itemsPerPage}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </Section>
      <div>
        <Ads type="mr">
          MR 2<br />
          300x250
        </Ads>
      </div>
    </div>
  );
};

export default LatestReviews;
