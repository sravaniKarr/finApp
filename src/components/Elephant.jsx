import React from "react";
import elephant from "../images/424.jpg"

const Elephant = () => {
  return (
    <div class="grid grid-cols-2">
      <div class="text-center mt-8">
        <p class="text-[20px] text-gray-500">
          Over 40 million individuals have discovered their desired outcome.
        </p>
        <h1 class="text-[50px] font-serif">
          Explore. Seek. Go!
          <br />{" "}
          <span class="text-violet-500">
            products from various <br /> suppliers.
          </span>
        </h1>
        <p class="text-[20px] text-gray-500">
          Browse hundreds of products offered by numerous suppliers.
        </p>
        <button class="animate-pulse h-12 w-36 bg-violet-500 text-white text-[22px] rounded-3xl mt-5">Register</button>
      </div>
      <div class="harika">
        <img src={elephant} class="h-[400px] w-[650px]" />
      </div>
    </div>
  );
};

export default Elephant;
