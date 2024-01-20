import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Customer = () => {
  return (
    <>
      <div class="text-center">
        <div class="mt-24">
          <h1 class="text-[45px] font-serif font-medium">
            Our customer base or clientele.
          </h1>
          <p class="text-[20px] text-gray-500">
            We have established partnership with several Fortune 500+ clients.
          </p>
        </div>
        <div class="grid grid-cols-7 p-10 mb-12">
          <FaInstagram class="text-5xl animate-pulse" />
          <FaFacebook class="text-5xl animate-pulse" />
          <FaGoogle class="text-5xl animate-pulse" />
          <FaAmazon class="text-5xl animate-pulse" />
          <FaTwitter class="text-5xl animate-pulse" />
          <FaYoutube class="text-5xl animate-pulse" />
          <FaLinkedin class="text-5xl animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default Customer;
