import React from "react";

import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import logo from "/images/footerLogo.svg";
import footer_Desktop_Top_Wave from "/images/bg-footer-top-desktop.svg";
import footer_Mobile_Top_Wave from "/images/bg-footer-top-mobile.svg";
import phone from "/images/icon-phone.svg";
import mail from "/images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="text-white">
      <img
        className="hidden md:block -mb-2"
        width={"100%"}
        src={footer_Desktop_Top_Wave}
        alt={footer_Desktop_Top_Wave}
      />
      <img
        className="block md:hidden -mb-2"
        width={"100%"}
        src={footer_Mobile_Top_Wave}
        alt={footer_Mobile_Top_Wave}
      />
      <section className="bg-VeryDarkCyan pt-20 pb-10">
        <div className="w-[85%] mx-auto flex flex-col-reverse md:grid gap-10 md:grid-cols-2">
          <div>
            <img src={logo} alt={logo} />
            <article className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptate assumenda eaque molestiae atque temporibus sapiente
              repellat fugiat facilis obcaecati.
            </article>

            <ul className="mt-6 grid gap-3">
              <li className="flex items-center">
                <img className="mr-6" src={phone} alt={phone} />
                Phone: +1-543-123-4567
              </li>
              <li className="flex items-center">
                <img className="mr-6" src={mail} alt={mail} />
                example@huddle.com
              </li>
            </ul>

            <div id="icons" className="flex items-center gap-3 mt-10 md:mt-16">
              <FaFacebookSquare />
              <FaInstagram />
              <FaTwitterSquare />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-2xl">NEWSLETTER</h4>
            <article className="my-6">
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. we'll never send your span or pass on your
              email address.
            </article>
            <dir className="flex flex-col md:flex-row gap-6 p-0">
              <input
                type="text"
                className="py-2 rounded-md w-[100%] md:w-[300px]"
              />
              <button className="bg-Pink py-2 md:py-0 rounded-md text-[1rem] px-8 font-semibold">
                Subscribe
              </button>
            </dir>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
