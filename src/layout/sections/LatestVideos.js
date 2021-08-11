import React from "react";
import Section from "../../components/general/Section";

const LatestVideos = () => {
  const videos = {
    video1: {
      title: "video 1",
      src: "https://www.youtube.com/embed/hgAgjErFIHk",
    },
    video2: {
      title: "video 2",
      src: "https://www.youtube.com/embed/8RWIzOHG0Fg",
    },
    video3: {
      title: "video 3",
      src: "https://www.youtube.com/embed/OZYjE7uWFmE",
    },
  };

  return (
    <Section title="Lates Videos" subtitle="Watch and learn, ladies" seeMore>
      <div className="flex-between">
        <div className="left-video">
          <iframe
            className="main-video"
            title={videos.video1.title}
            src={videos.video1.src}
          ></iframe>
        </div>
        <div className="right-video">
          <iframe
            className="small-video"
            title={videos.video1.title}
            src={videos.video2.src}
          ></iframe>
          <iframe
            className="small-video"
            title={videos.video1.title}
            src={videos.video3.src}
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default LatestVideos;
