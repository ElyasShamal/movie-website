import React from "react";

function SectionThree() {
  return (
    <section className="section-two">
      <video controls>
        <source
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          type="video/mp4"
        ></source>
      </video>
      <article className="article-two">
        <h2>Watch everywhere</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </article>
    </section>
  );
}

export default SectionThree;
