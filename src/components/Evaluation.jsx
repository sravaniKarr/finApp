import React from "react";
import review from "../images/19197319.jpg";
import rating from "../images/19197200.jpg";
import checklist from "../images/Checklist.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Evaluation = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const eData = [
    {
      Image: review,
      head: "Feedback from individuals similar to you.",
      para: "Take a look at the testimonials for candid opinions from individuals who share your experiences. Be sure to contribute your own feedback as well.",
    },

    {
      Image: rating,
      head: "In-depth, impartial coverage ratings.",
      para: "If you're pressed for time and seeking the top-notch insurance plan, our scoring mechanism handles the heavy lifting on your behalf.",
    },

    {
      Image: checklist,
      head: "Financial Audit Checklist.",
      para: "This basic checklist focuses on the fundamental aspects of a financial audit, covering the income statement and balance sheet.",
    },
  ];
  return (
    <div>
      <h1 class="text-[45px] font-serif font-medium text-center">
        Evaluations and rating.
        <span class="text-violet-500">
          Assisting you in crafting the right choice.
        </span>
      </h1>
      {eData.map((myData) => (
        <div class="grid grid-cols-2 m-10">
          <div>
            <img
              src={myData.Image}
              class="h-[375px] w-[575px]"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>
          <div class="p-14 mt-8" data-aos="fade-left" data-aos-duration="2000">
            <h1 class="text-[37px] font-semibold">{myData.head}</h1>
            <p class="text-[25px] text-gray-500">{myData.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evaluation;
