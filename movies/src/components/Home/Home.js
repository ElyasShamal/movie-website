import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <main className="main-container">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  );
}

export default Home;
