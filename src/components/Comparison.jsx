import React from "react";
import find from "../images/Find.jpg";
import analyse from "../images/Analyse.jpg";
import explore from "../images/Explore.jpg";
import approved from "../images/Approved.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Comparison = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const gokul = [
    {
      Image: find,
      Head: "Find",
      Para: "Tell us about yourself and what you're looking for. We'll search 100s of products to find the ones that suit.",
    },
    {
      Image: analyse,
      Head: "Analyze",
      Para: "Choose the products that sound up your alley and compare them side by side.",
    },

    {
      Image: explore,
      Head: "Explore",
      Para: "Made up your mind? Click the green button. Simple!",
    },

    {
      Image: approved,
      Head: "Approved",
      Para: "Creating a finance template depends on the specific financial document or report you need.",
    },
  ];
  return (
    <div>
      <h1 class ="text-[45px] font-serif font-medium text-center">Are you new to using a comparison website?</h1>
      <p class = "text-[20px] text-gray-500 text-center">It's easy. Here's what you do.</p>
      <div class="grid grid-cols-2 m-20 text-center gap-[15px]">
      {gokul.map((srav) => (
          <div>
            <img src={srav.Image} class="h-[220px] w-[260px] mx-auto animate-bounce" />
            <h1 class="text-[28px] font-semibold">{srav.Head}</h1>
            <p class="text-[22px] text-gray-500 mb-12">{srav.Para}</p>
          </div>
      ))}
      </div>
    </div>
  );

};

export default Comparison;
