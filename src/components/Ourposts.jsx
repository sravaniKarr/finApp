import React from "react";
const Ourposts = () => {
  return (
    <div>
      <h1 class="text-[45px] font-serif font-medium text-center">
        Our Posts.{" "}
        <span class="text-violet-500">
          Stay informed with HighBull insights.
        </span>
      </h1>
      <p class="text-[20px] text-gray-500 text-center">
        Our Bull Talk blog provides insights, promotions, and the most recent
        updates in the field. And, just to clarify, we're not referring to the
        "honey pot and tree climbing" sector!
      </p>
      <div class ="grid grid-cols-3">
        <div class ="">
          <div>
            <p>Here’s What Will Happen If You Miss A Credit Card Payment</p>
            <button>Read More</button>
          </div>
        </div>

        <div>
          <div>
            <p>Car Insurance Hacks That Will Save You Money</p>
            <button>Read More</button>
          </div>
        </div>

        <div>
          <div>
            <p>Here’s Why Even Celebrities Are OK with Travel Insurance</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourposts;
