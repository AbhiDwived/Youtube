import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const btnList = [
    "All",
    "Live",
    "Trending",
    "Bhojpuri",
    "Movies",
    "Love Babber",
    "Comedy",
    "News",
    "Sports",
    "Recently ",
    "New to you",
  ];

  return (
    <div className="flex overflow-x-auto justify-start">
      {btnList.map((btnName) => {
        return (
          <Buttons name={btnName} key={btnName} />
        );
      })}
    </div>
  );
};

export default ButtonList;
