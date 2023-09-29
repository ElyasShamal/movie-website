import React from "react";
import Form from "./Form";

function SectionOne() {
  return (
    <section className="home-section">
      <article className="article">
        <p>Unlimited movies, TV shows, and more</p>
        <p>Watch anywhere. Cancel anytime.</p>
      </article>
      <Form />
    </section>
  );
}

export default SectionOne;
