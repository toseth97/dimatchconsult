import React from "react";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "@/public/icons/footer-location.svg";
import messageIcon from "@/public/icons/footer-message.svg";
import phoneIcon from "@/public/icons/phone.svg";
import trenovaLogo from "@/public/icons/trenova-logo.png";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import pintrestIcon from "@/public/icons/pintrest.svg";

const Footer = () => {
  return (
    <footer className="py-6 bg-darkGray">
      <div className="w-[70%] m-auto">
        <section className="lg:flex lg:justify-between">
          <div className="flex items-center justify-center lg:justify-start gap-2 -ml-10 lg:gap-1 lg:-ml-0">
            <div>
              <Image src={trenovaLogo} alt="logo" width={30} />
            </div>
            <h2 className="text-white font-poppinsBold text-xl">
              WhiteCo<span className="text-blue">ll</span>ar
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center md:justify-between md:items-baseline">
            <div className="flex flex-col gap-4 mt-5 md:flex-row md:mt-0 md:gap-20">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={phoneIcon} alt="phone" width={50} />
                </div>
                <div>
                  <h2 className="text-white text-sm font-poppinsBold font-bold tracking-widest">
                    Call Us
                  </h2>
                  <p className="text-white text-sm font-extralight mt-1 font-interRegular tracking-widest">
                    +01 469 896 654
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href="">
                  <Image src={messageIcon} alt="message" width={50} />
                </Link>
                <div>
                  <h2 className="text-white text-sm font-poppinsBold font-bold tracking-widest">
                    Mail Us
                  </h2>
                  <p className="text-white text-sm font-extralight mt-1 font-interRegular tracking-widest">
                    info@Example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Image src={locationIcon} alt="" width={50} />
                </div>
                <div>
                  <h2 className="text-white text-sm font-poppinsBold font-bold tracking-widest">
                    Location
                  </h2>
                  <p className="text-white text-sm font-extralight mt-1 font-interRegular tracking-widest">
                    Amsterdam, 109-74
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border border-solid border-gray-600 my-6"></div>

        <section className="flex flex-col items-center lg:flex-row md:justify-between lg:items-left">
          <div className=" flex flex-col gap-10  items-center lg:flex-row md:gap-20">
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-blue"></div>
                <h2 className="text-green font-poppinsSemiBold font-bold tracking-widest text-lg lg:text-sm">
                  Quick Link
                </h2>
              </div>
              <div className="flex flex-col items-center lg:items-baseline gap-3 mt-4">
                <Link
                  href="/"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-green text-sm font-interRegular tracking-widest font-light"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Blog
                </Link>
                <Link
                  href="/services"
                  className="text-white text-sm font-interRegular tracking-widest font-light "
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex gap-2 flex-col items-center lg:items-baseline">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-blue"></div>
                <h2 className="text-green font-poppinsSemiBold font-bold tracking-widest text-lg lg:text-sm">
                  Our Services
                </h2>
              </div>
              <div className="flex flex-col items-center lg:items-baseline gap-3 mt-4">
                <Link
                  href="/"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Financial Consulting
                </Link>
                <Link
                  href="/about"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Business Management
                </Link>
                <Link
                  href="/blog"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Consultant & Programs
                </Link>
                <Link
                  href="/services"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Company Management
                </Link>
                <Link
                  href="/contact"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Insurance & Finance
                </Link>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-blue"></div>
                <h2 className="text-green font-poppinsSemiBold font-bold tracking-widest text-lg lg:text-sm">
                  Utility Page
                </h2>
              </div>

              <div className="flex flex-col items-center lg:items-baseline gap-3 mt-4">
                <Link
                  href="/"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Style guide
                </Link>
                <Link
                  href="/about"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Licenses
                </Link>
                <Link
                  href="/blog"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Instructions
                </Link>
                <Link
                  href="/services"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  Changelog
                </Link>
                <Link
                  href="/contact"
                  className="text-white text-sm font-interRegular tracking-widest font-light"
                >
                  404 Page
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-10 mt-8 lg:mt-0">
            <div className="text-center md:text-left">
              <h2 className="text-white font-semibold tracking-widest text-xl md:text-lg">
                Subscribe
              </h2>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-extralight tracking-wider text-sm mt-3 mb-5">
                Join Our Mailing List to get our news
              </p>
            </div>
            <form>
              <div className="flex flex-col lg:flex-row lg:gap-0 justify-center items-center gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="your email address"
                    className="flex-1 md:w-[100%] p-2 text-sm lg:p-4 lg:text-base"
                  />
                </div>
                <div>
                  <button
                    role="submit"
                    className="rounded-sm lg:rounded-none py-2 px-4 lg:p-4 text-center text-white font-light lg:text-base tracking-widest bg-blue"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <div className="border border-solid border-gray-600 my-6"></div>

        <section className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col lg:flex-row">
            <div className="md:flex md:items-center md:gap-2">
              <span className="text-white text-sm font-interRegular font-light">
                Copyright
              </span>
              <span className="text-white mx-1 text-sm font-interRegular">
                &copy;
              </span>
              <Link
                href=""
                className="text-green text-sm font-interRegular font-light"
              >
                WhiteCollar
              </Link>
              <span className="text-white mx-1">|</span>
              <span className="text-white text-sm font-interRegular font-light">
                Designed by
              </span>
            </div>
            <div>
              <Link
                href=""
                className="text-blue text-sm font-interRegular font-light px-2"
              >
                VictorFlow
              </Link>
              <span className="text-white text-sm font-interRegular font-light">
                Powered by - Webflow
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <h3 className="text-white text-sm font-poppinsBold font-bold tracking-widest">
              Follow:
            </h3>
            <div className="flex gap-3 items-center">
              <Image src={instagramIcon} alt="instagram" width={16} />
              <Image src={facebookIcon} alt="facebook" width={16} />
              <Image src={twitterIcon} alt="twitter" width={16} />
              <Image src={pintrestIcon} alt="pintrest" width={16} />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
