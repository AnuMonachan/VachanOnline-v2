import React, { Component } from "react";
import img from "./images/1.jpg";
import img1 from "./images/2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LanguageBar from "./LanguageBar";
import BibleIndex from "../bibleIndex/BibleIndex";
const ControlledCarousel = props => {
  let languages = [
    "অসমীয়া ",
    "বাঙালি",
    "ગુજરાતી",
    "हिंदी",
    "ಕನ್ನಡ",
    "മലയാളം",
    "मराठी",
    "ଓଡିଆ",
    "ਪੰਜਾਬੀ",
    "தமிழ்",
    "తెలుగు",
    "اردو"
  ];
  let versions= [
    "NIV",
    "KJV"
  ];
  let books=[
   "Mathew","Mark", "Luke", "John"

  ];
  let chapters=["1","2","3"];
  let label="Read";

  return (
    <div>
      <div>
        <LanguageBar languages={languages} />
      </div>
      <Carousel autoPlay>
        <div>
          <img src={img} />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
        <div>
          <img src={img1} />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
        <div>
          <img src={require("./images/3.jpg")} />
          <p className="legend">
            Your word is lamp of my feet ,<br />A light on my path
          </p>
        </div>
      </Carousel>
        <BibleIndex versions={versions } books={books } chapters={chapters } label={label } />
    </div>
  );
};

export default ControlledCarousel;
