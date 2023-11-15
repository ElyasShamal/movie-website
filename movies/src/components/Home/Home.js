import React, { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Footer from "../Footer/Footer";
import image1 from "../photos/image-1.jpg";
import image2 from "../photos/image-2.jpg";
import image5 from "../photos/image-5.jpg";
import image8 from "../photos/image-8.jpg";
import image11 from "../photos/image-11.jpg";
import image12 from "../photos/image-12.jpg";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image5, image8, image11, image12];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <main className="main-container">
      <img
        className="background-image"
        src={images[currentImage]}
        alt="background"
      />

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  );
}

export default Home;
