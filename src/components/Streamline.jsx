import React from "react";
import homeloan from "../images/4311700.jpg";
import businessloan from "../images/5510773.jpg";
import croploan from "../images/2317497.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Streamline = () => {
    useEffect(() => {
        AOS.init({
          
        });
      }, []);
  return (
    <div class="text-center mb-24">
      <h1 class="text-[45px] font-serif font-medium">Streamlined comparison</h1>
      <p class="text-[20px] text-gray-500">
        Compare insurance, credit cards, and loans from various insurers and
        banks. We're simplifying it to <br />
        help you easily select the most suitable insurance and banking products
        for your needs.
      </p>
      <div class="grid grid-cols-3 text-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/people-with-icons-related-car-insurance_53876-43023.jpg?size=626&ext=jpg&ga=GA1.1.1602862278.1689709897&semt=ais"
            class="h-64 w-80 mx-auto" data-aos="flip-left" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Car Insurance</h1>
          <p class="text-[22px] text-gray-500">
            Protect your ride with comprehensive car insurance.
          </p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/cartoon-couple-holding-huge-credit-card-together-woman-giving-card-man-flat-vector-illustration-finances-banking-family-budget-concept-banner-website-design-landing-web-page_74855-20962.jpg?w=740&t=st=1704438593~exp=1704439193~hmac=e953f125ae1fa7c37a5cae2ccefcecef915c515f0839488265c86dd01528ddeb"
            class="h-64 w-80 mx-auto"  data-aos="flip-up" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Credit cards</h1>
          <p class="text-[22px] text-gray-500">
            Unlock financial freedom with our credit card.
          </p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg?size=626&ext=jpg&ga=GA1.1.1602862278.1689709897&semt=ais"
            class="h-64 w-80 mx-auto" data-aos="flip-right" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Personal Insurance</h1>
          <p class="text-[22px] text-gray-500">Secure your future with personal insurance</p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>
        
        <div class ="mt-12">
          <img
            src= {homeloan}
            class="h-64 w-80 mx-auto" data-aos="flip-right" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Home loan</h1>
          <p class="text-[22px] text-gray-500">Secure your future with Home Loan</p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>

        <div class ="mt-12">
          <img
            src= {businessloan}
            class="h-64 w-80 mx-auto" data-aos="flip-right" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Business Loan</h1>
          <p class="text-[22px] text-gray-500">Improve your Business with Us</p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>

        <div class ="mt-12">
          <img
            src= {croploan}
            class="h-64 w-80 mx-auto" data-aos="flip-right" data-aos-duration = "2000"/>
          <h1 class="text-[28px] font-semibold">Crop Loan</h1>
          <p class="text-[22px] text-gray-500">Save Green with our Crop Loan</p>
          <button class="h-10 w-36 text-violet-500 rounded-lg outline outline-violet-500 outline-2 mt-5 animate-pulse">COMPARE NOW</button>
        </div>
      </div>
    </div>
    
  );
};

export default Streamline;
