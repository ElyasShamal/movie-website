import React from "react";

function SectionTwo() {
  return (
    <section className="section-two">
      <article className="article-two">
        <h2>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </article>
      <video controls>
        <source
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          type="video/mp4"
        ></source>
      </video>
    </section>
  );
}

export default SectionTwo;
