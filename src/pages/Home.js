import React from "react";
import icon from "../assets/Image/icon.png";
import Reactangle_6 from "../assets/Image/Rectangle 6.png";
import Reactangle_7 from "../assets/Image/Rectangle 7.png";
import Reactangle_8 from "../assets/Image/Rectangle 8.png";
import Reactangle_9 from "../assets/Image/Rectangle 9.png";
import Reactangle_10 from "../assets/Image/Rectangle 10.png";
import Reactangle_11 from "../assets/Image/Rectangle 11.png";
import icon1 from "../assets/Image/icon-1.png";
import icon2 from "../assets/Image/icon-2.png";
import icon3 from "../assets/Image/icon-3.png";
import icon4 from "../assets/Image/icon-4.png";
import icon5 from "../assets/Image/icon-5.png";
import icon6 from "../assets/Image/icon-6.png";
import icon7 from "../assets/Image/icons-7.png";
import icon8 from "../assets/Image/icons-8.png";
import icon9 from "../assets/Image/icons-9.png";
import para2 from "../assets/Image/pana2.png";
import first from "../assets/Image/first.png";
import second from "../assets/Image/second.png";
import third from "../assets/Image/third.png";
import fourth from "../assets/Image/forth.png";
import frame44 from "../assets/Image/Frame 44.png";
import "../CSS/About.css";
import pana from "../assets/Image/pana.png";
import { Icon } from "@iconify/react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
alert('Message sent successfully!');

    emailjs
      .sendForm('service_3cfyo3n', 'template_xt1ztwq', form.current, {
        publicKey: 'FohGakYxSK5btaCcX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="">
      <div className="flex min-[250px]:bg-[#101d2e] lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col   lg:h-[48rem] min-[250px]:h-[80rem] sm:h-[20rem] md:h-[20rem] ">
        <div className="lg:py-28 md:py-16 sm:py-8 lg:px-28 md:px-16 sm:px-8 lg:flex-row md:flex-col sm:flex-col ">
          <h1 className="text-4xl text-white font-bold mb-2">LetterCrafts</h1>
          <h1 className="text-4xl text-white font-bold mb-2">| T</h1>
          <h3 className="text-lg text-white font-semibold mb-4">
            Professional translators delivering High Quality, Fast & <br />{" "}
            Affordable translation services in <Icon icon="openmoji:flag-singapore" className=" text-[#3D65FF] text-[30px] inline-flex" /> Singapore.
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Learn More{" "}
            <Icon icon="ph:arrow-right-bold" className="inline-flex ml-1" />
          </button>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row lg:mt-[25%] min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between ">
          <div className="flex flex-col lg:w-[15rem] lg:h-[15rem]  bg-[#E6FFAF] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden">
            <div className="flex justify-center items-center pr-[80%] ">
              <img src={icon} alt="Logo" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br /> amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500  text-left">
              Learn More{" "}
              <Icon icon="ph:arrow-right-bold" className="inline-flex ml-1" />
            </a>
          </div>
          <div className="flex flex-col  lg:w-[15rem] lg:h-[15rem] bg-[#FFC4B1] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden">
            <div className="flex pr-[80%]">
              <img src={icon} alt="Logo" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br />
              amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500 text-left">
              Learn More{" "}
              <Icon icon="ph:arrow-right-bold" className="inline-flex ml-1" />
            </a>
          </div>
          <div className="flex flex-col  lg:w-[15rem] lg:h-[15rem]  bg-[#AEE7FF] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden">
            <div className="flex pr-[80%]">
              <img src={icon} alt="Logo" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2 text-left">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br /> amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500 text-left">
              Learn More{" "}
              <Icon icon="ph:arrow-right-bold" className="inline-flex ml-1" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-6 gap-4 mx-[10%] my-[5%]">
          <img src={Reactangle_6} alt="" className="w-full h-auto" />
          <img src={Reactangle_7} alt="" className="w-full h-auto" />
          <img src={Reactangle_8} alt="" className="w-full h-auto" />
          <img src={Reactangle_9} alt="" className="w-full h-auto" />
          <img src={Reactangle_10} alt="" className="w-full h-auto" />
          <img src={Reactangle_11} alt="" className="w-full h-auto" />
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col min-[250px]:flex-col justify-between mx-[10%] pb-20">
          <div className="lg:w-[30rem] overflow-hidden p-6">
            <h1 className="text-4xl font-bold mb-2">Translation Services</h1>
            <p className="text-lg mb-4">
              Letter Crafts is your partner for over 80 languages. Our team of
              native translators and industry experts can cater to all your
              translation needs.
            </p>
            <img src={pana} alt="" className="w-[25rem] h-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Box 1 */}
            <div className="p-4 shadow-xl">
              <img src={icon1} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Certified <br />
                translation and
                <br /> notarisation
              </p>
            </div>
            {/* Box 2 */}
            <div className="p-4 shadow-xl">
              <img src={icon2} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Business document
                <br /> translation
              </p>
            </div>
            {/* Box 3 */}
            <div className="p-4 shadow-xl">
              <img src={icon3} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Personal document
                <br /> translation
              </p>
            </div>
            {/* Box 4 */}
            <div className="p-4 shadow-xl">
              <img src={icon4} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Website and apps
                <br /> translation and
                <br /> localisation
              </p>
            </div>
            {/* Box 5 */}
            <div className="p-4 shadow-xl">
              <img src={icon5} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Typesetting and
                <br />
                copywriting
                <br />
                documents
              </p>
            </div>
            {/* Box 6 */}
            <div className="p-4 shadow-xl">
              <img src={icon6} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Marketing <br />
                translation and
                <br /> transcreation
              </p>
            </div>
            {/* Box 7 */}
            <div className="p-4 shadow-xl">
              <img src={icon7} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Business specific <br />
                translation
              </p>
            </div>
            {/* Box 8 */}
            <div className="p-4 shadow-xl">
              <img src={icon8} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Legal document <br />
                translation
              </p>
            </div>
            {/* Box 9 */}
            <div className="p-4 shadow-xl">
              <img src={icon9} alt="" className="block ml-auto mr-auto" />
              <p className="justify-center items-center text-center font-bold lg:block md:hidden sm:block">
                Technical and IT <br />
                translation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bgImage3 lg:h-[75rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[66rem]">
        <div className="flex items-center   justify-center h-screen">
          <div className="relative mt-[20%] h-3/4 md:mt-[4rem] lg:mt-[30rem]">
            <h1 className="text-4xl absolute -top-[15%] left-[35%] text-white font-bold items-center">
              Translation Process
            </h1>
            <div className="hidden  lg:block">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-2 border-dashed border-[#3D65FF] lg:h-[30rem]"></div>
              <div className="relative flex items-center py-3 px-3 ">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <Icon
                    className="ml-2 mt-2"
                    icon="fluent:comma-24-filled"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <Icon
                    className="ml-2 mt-2"
                    icon="mdi:rename"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <Icon
                    className="ml-2 mt-2"
                    icon="mdi:email"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <Icon
                    className="ml-2 mt-2"
                    icon="mdi:headset-mic"
                    style={{ color: "white", fontSize: "30px" }}
                  />{" "}
                </div>
                <div className="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="md:block sm:block lg:hidden" >
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page lg:h-[65rem] my-[5%]">
        <div className="pt-[9%]">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col min-[25px]:flex-col py-[6%] mx-[10%]">
            <div className="w-full mr-4">
              <h2 className="text-4xl font-semibold mb-4">Businesses love</h2>
              <h2 className="text-4xl font-semibold mb-4">working with us</h2>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <div className="bg-[#FFFFFF] p-4 rounded-md">
                    <h1 className="text-[#3D65FF] font-semibold text-3xl">
                      250+
                    </h1>
                    <p>
                      Posuere lacus dignissim eget
                      <br /> a venenatis aenean at
                      <br /> interdum.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-2 mb-4 md:hidden lg:block">
                  <div className="bg-[#FFFFFF] p-4 rounded-md">
                    <h1 className="text-[#3D65FF] font-semibold text-3xl">
                      250+
                    </h1>
                    <p>
                      Urna tincidunt vestibulum
                      <br /> massa placerat quis eget non
                      <br /> viverra.
                    </p>
                  </div>
                </div>
                <div class="w-1/2 px-2 mb-4">
                  <div className="bg-[#FFFFFF] p-4 rounded-md">
                    <h1 className="text-[#3D65FF] font-semibold text-3xl">
                      250+
                    </h1>
                    <p>
                      Posuere lacus dignissim eget
                      <br /> a venenatis aenean at
                      <br /> interdum.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-2 mb-4 md:hidden lg:block">
                  <div className="bg-[#FFFFFF] p-4 rounded-md">
                    <h1 className="text-[#3D65FF] font-semibold text-3xl">
                      250+
                    </h1>
                    <p>
                      Urna tincidunt vestibulum
                      <br /> massa placerat quis eget non
                      <br /> viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div classname="w-full">
              <div className="mb-4">
                <div className="bg-[#FFFFFF] p-4 rounded-md mb-4 flex">
                  <div>
                    <img src={first} alt="Other 1" className="" />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold mb-2">Floyd Miles</p>
                    <img src={frame44} alt="" />
                    <p className="text-sm">
                      “I ordered a Balmain T-shirt dress from here and it is
                      fabulous. The packaging was extremely professional and
                      nice and sweets were added in the box. Extremely sa...”
                    </p>
                  </div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-md mb-4 flex">
                  <div>
                    <img
                      src={second}
                      alt="Other 1"
                      className="mt-auto mb-auto block"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold mb-2">Arlene McCoy</p>
                    <img src={frame44} alt="" />
                    <p className="text-sm">
                      “The Services provided are really great, we received a
                      genuine advice and at very reasonable cost. all the work
                      went hassle-free and no complication. Mr. Qamar i...”
                    </p>
                  </div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-md mb-4 flex">
                  <div>
                    <img
                      src={third}
                      alt="Other 1"
                      className="mt-auto mb-auto block"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold mb-2">
                      Leslie Alexander
                    </p>
                    <img src={frame44} alt="" />
                    <p className="text-sm">
                      “Amazing service! Claire helped me to reduce the shipping
                      price a little and shipped it immediately after
                      purchasing. The amethyst cave I got is a beauty and I
                      c...”
                    </p>
                  </div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-md mb-4 flex">
                  <div>
                    <img
                      src={fourth}
                      alt="Other 1"
                      className="mt-auto mb-auto block"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold mb-2">
                      Marvin McKinney
                    </p>
                    <img src={frame44} alt="" />
                    <p className="text-sm">
                      “I ordered a Balmain T-shirt dress from here and it is
                      fabulous. The packaging was extremely professional and
                      nice and sweets were added in the box. Extremely sa...”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgImage3 lg:h-[66rem] sm:h-[40rem]">
        <div className="flex items-center flex-col px-4 py-8 ">
          <h2 className="text-4xl font-bold lg:mt-[10%] sm:mt-[1%] mb-4 text-white">
            Success Stories
          </h2>
          <p className="text-white mb-6 w-[43%] text-left sm:text-center">
            Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque
            interdum id imperdiet viverra gravida sit scelerisque. Id consequat
            lorem praesent mauris. Dolor aenean eleifend etiam amet.
          </p>

          <div className="sm:w-1/2 w-full sm:block hidden lg:text-center text-[#ffffff] space-x-1 mb-4">
            <span className="">Government & NGO</span>
            <span className="">Banking & Finance</span>
            <span className="">Travel & Leisure</span>
            <span className="">Legal</span>
            <span className="">Health</span>
            <span className="">Engineering</span>
            <span className="">Digital & Education</span>
          </div>
          <div className="grid grid-cols-6 gap-4 mx-[3%] ">
            <img src={Reactangle_6} alt="" className="w-full h-auto" />
            <img src={Reactangle_7} alt="" className="w-full h-auto" />
            <img src={Reactangle_8} alt="" className="w-full h-auto" />
            <img src={Reactangle_9} alt="" className="w-full h-auto" />
            <img src={Reactangle_10} alt="" className="w-full h-auto" />
            <img src={Reactangle_11} alt="" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-6 gap-4 mx-[3%] my-[3%]">
            <img src={Reactangle_6} alt="" className="w-full h-auto" />
            <img src={Reactangle_7} alt="" className="w-full h-auto" />
            <img src={Reactangle_8} alt="I" className="w-full h-auto" />
            <img src={Reactangle_10} alt="" className="w-full h-auto" />
            <img src={Reactangle_10} alt="" className="w-full h-auto" />
            <img src={Reactangle_11} alt="" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-6 gap-4 mx-[3%] my-[3%]">
            <img src={Reactangle_6} alt="" className="w-full h-auto" />
            <img src={Reactangle_7} alt="" className="w-full h-auto" />
            <img src={Reactangle_8} alt="" className="w-full h-auto" />
            <img src={Reactangle_9} alt="" className="w-full h-auto" />
            <img src={Reactangle_10} alt="" className="w-full h-auto" />
            <img src={Reactangle_11} alt="" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-6 gap-4 mx-[3%] my-[3%]">
            <img src={Reactangle_6} alt="" className="w-full h-auto" />
            <img src={Reactangle_7} alt="" className="w-full h-auto" />
            <img src={Reactangle_8} alt="" className="w-full h-auto" />
            <img src={Reactangle_9} alt="" className="w-full h-auto" />
            <img src={Reactangle_10} alt="" className="w-full h-auto" />
            <img src={Reactangle_11} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto p-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-700 mb-8 w-[60%]">
              Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque
              interdum id imperdiet viverra gravida sit scelerisque. Id
              consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.
            </p>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col sm:items-center">
            <div className="w-2/3 pr-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Title</h3>
                <p className="text-gray-700 mb-8 w-[50%]">
                  Quis suscipit facilisis consectetur netus egestas. Orci semper
                  rhoncus tortor suspendisse. Lacinia tincidunt elementum elit
                  ut risus enim aliquam tincidunt. Condimentum sit risus sit non
                  sit. Volutpat vitae nibh iaculis aliquam.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Quis integer non morbi eget non.</li>
                  <li>At porta vestibulum consequat libero duis id justo.</li>
                  <li>In urna at pulvinar adipiscing egestas neque.</li>
                  <li>
                    Et arcu sed sapien ligula ultricies nisl tincidunt commodo.
                  </li>
                  <li> Consectetur nam mattis mollis proin.</li>
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none">
                  Download CaseStudy
                </button>
              </div>
            </div>
            <div className="w-1/3 lg:block sm:hidden md:block min-[250px]:hidden">
              <img
                src={para2}
                alt="Project"
                className="w-full rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bgImage4  lg:h-[70rem] sm:h-[120rem] md:[100rem] ">
        <div className="max-w-7xl mx-auto p-8">
          <div className="flex mt-[20%] lg:flex-row md:flex-row sm:flex-col sm:items-center min-[250px]:items-center min-[250px]:flex-col ">
            {/* Left side div */}
            <div className="w-1/2 pr-8">
              <div>
                <h2 className="text-3xl font-bold mb-10 text-white sm:text-center lg:text-left">
                  Get in touch
                </h2>
                <p className="text-white mb-10 sm:text-center lg:text-left">
                  Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
                  vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
                  id aliquam pulvinar neque.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="fa6-solid:user" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Name"
                    name="user_name"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:email" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="E-mail"
                    name="user_email"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:cellphone" />
                  </span>
                  <input
                    type="number"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Phone"
                    name="user_phone"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Source Language"
                    name="user_sourceLanguage"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="To Language"
                    name="user_toLanguage"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:truck-delivery"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Delivery Options"
                    name="user_delivery"
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:file"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Your Message"
                    name="user_message"
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Send Message
                </button>
              </form>
            </div>
            {/* Right side div */}
            <div className="w-1/2">
              <div>
                <h2 className="text-3xl font-bold mb-10 text-white">
                  Tortor in ut nisi magna
                </h2>
                <p className="text-white mb-10">
                  Eget dui varius semper vel viverra. Rhoncus felis tristique
                  nisl eget ultricies semper vitae. Turpis porta maecenas quis
                  felis tempus sed nisl risus sit. Nam viverra lobortis arcu
                  justo netus quis fringilla sed lacus.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Box 1 */}
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:five-star-badge"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Certified translation and notarisation
                    </h3>
                  </div>
                </div>
                {/* Box 2 */}
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:user-business"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Business document translation
                    </h3>
                  </div>
                </div>
                {/* Box 3 */}
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:user"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Personal document translation
                    </h3>
                  </div>
                </div>
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:five-star-badge"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Certified translation and notarisation
                    </h3>
                  </div>
                </div>
                {/* Box 2 */}
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:user-business"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Business document translation
                    </h3>
                  </div>
                </div>
                {/* Box 3 */}
                <div className="px-2 mb-4">
                  <div className="text-white p-4 rounded-md bg-gray-800">
                    <Icon
                      className="w-full h-10 object-cover -ml-[40%] rounded-md mb-2"
                      icon="icon-park-outline:user"
                      style={{ color: "white", fontSize: "25px" }}
                    />
                    <h3 className="text-lg font-semibold">
                      Personal document translation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
