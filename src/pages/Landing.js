import React from "react";
import "../CSS/About.css";
import certificate2 from "../assets/Image/certificate2.png";
import { Icon } from "@iconify/react";
import pana5 from "../assets/Image/pana5.png";
import first from "../assets/Image/first.png";
import second from "../assets/Image/second.png";
import third from "../assets/Image/third.png";
import fourth from "../assets/Image/forth.png";
import frame44 from "../assets/Image/Frame 44.png";
import star from "../assets/Image/star.png";
import rate from "../assets/Image/rate.png";
import speed from "../assets/Image/speed.png";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Landing = () => {
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
          console.log('MESSAGE HAS BEEN SEND!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div class="home-page min-[250px]:bg-[#101d2e] lg:h-[48rem] min-[250px]:h-[70rem] sm:h-[40rem] px-[10%] relative">
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col pt-[6%]  w-full  justify-between">
          <div class="">
            <h1 class="text-4xl text-white font-bold mb-2">
              Professional & Native{" "}
            </h1>
            <h1 class="text-4xl text-white font-bold mb-2">
              Chinese transition services in<br/> <Icon icon="openmoji:flag-singapore" className=" text-[#3D65FF] text-[30px] inline-flex" /> Singapore.
            </h1>
            <p class=" text-white mb-2 py-2 text-lg font-thin sm:hidden md:hidden lg:block block">Embassies, State Court, MOM, MOE, LTA and ACRA.The ICA requires that the translated <br/>{" "} documents for visa applications are also notarised and authenticated by SAL. We arrange <br/>{" "} this for you as part of our Certified Translations service.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:hidden">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="flex absolute top-[35%] lg:left-[50%] min-[250px]:mt-[10%] min-[250px]:left-0 min-[250px]:mx-[10%] lg:flex-row md:flex-row sm:flex-row lg:w-[30%]  bg-white shadow-2xl rounded-xl min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between">
            <div class="pr-8 flex flex-col items-start p-4">
              <div>
                <h2 class="text-3xl font-bold  text-black">Get in touch</h2>
                <p class="text-black mb-10">
                  Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
                  vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
                  id aliquam pulvinar neque.
                </p>
              </div>
              <form class="w-full" ref={form} onSubmit={sendEmail}>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="fa6-solid:user" />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Name"
                    name="user_name"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:email" />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="E-mail"
                    name="user_email"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:cellphone" />
                  </span>
                  <input
                    type="number"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Phone"
                    name="user_phone"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Source Language"
                    name="user_sourceLanguage"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="To Language"
                    name="user_toLanguage"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-1">
                  <Icon
                      className=""
                      icon="mdi:truck-delivery"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Delivery Options"
                    name="user_delivery"
                  />
                </div>
                <div class="relative mb-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-1">
                  <Icon
                      className=""
                      icon="mdi:file"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    class="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Your Message"
                    name="user_message"
                  />
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[10%]">
        <div class="lg:p-16 lg:w-[60%] min-[250px]:p-5">
          <h1 class="text-xl font-bold mb-2">
            超过80种语言的商务，电子商务，技术和个人翻译服务
          </h1>
          <p class="text-gray-700 mb-4">
            Letter
            Crafts，我们知道生活和业务中可能充满无穷的挑战性，尤其是在诸如新加坡这样的多元文化枢纽中。这就是为什么我们提供了高达80多种语言的快速，优质和高效的翻译服务的原因。因此，无论您是想在新加坡工作和生活，还是想在新加坡开展业务，我们都可以满足您的商务翻译需求。当您搬到新加坡居住时，通常您需要把个人文件翻译成英文，Letter
            Crafts也能够为您提供这方面的帮助。最后，您可能希望将业务扩展到其他国家，例如中国。再一次，无论是基于电子商务的业务，技术业务还是传统业务，Letter
            Crafts都可以为您翻译所有业务和营销文件。为您提供高达80多种不同语言的快捷优质服务。
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Get a Quote in 30mins
          </button>
        </div>
      </div>

      <div class="bgImage3 lg:h-[60rem] min-[250px]:h-[70rem]">
        <div class="pt-[15%] lg:ml-[10%] mb-[5%]">
          <h1 class="text-4xl text-white font-bold mb-5 w-[30%]">
            Samples of certified translations
          </h1>
          <div class="flex flex-wrap justify-center lg:gap-9 md:gap-5 sm:gap-1 gap-2 mt-[6rem]">
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
          </div>
        </div>
      </div>


      <div className=" md:py-[80] py-5 flex mx-auto max-w-[1320px] md:flex-row sm:flex-row flex-col pb-5">
        <div className="basis-[30%]">
          <div className="">
            <img src={pana5} alt="img" className=" " />
          </div>
        </div>
        <div className="basis-[70%] px-8 ">
          <h2 class="text-2xl text-black md:text-3xl font-bold mt-3 pb-5">
            Why LetterCrafts?
          </h2>
          <p className="py-3">
            We provide quick, affordable and high-quality Certified Translations
            & Notarisation Services.
          </p>
          <p className="py-3">
            Our translated documents are accepted in all the government bodies
            in Singapore:
            <li>ICA, MOM, LTA, ROM</li>
            <li>Visa, Immigration &amp; Embassy submissions</li>
            <li>PR applications</li>
            <li>Notarization service is available on request</li>
          </p>
          <p className="py-3">
            We value your business and understand the importance of accurate
            translations.
          </p>
          <p className="py-3">
            To ensure professional-grade translations, we only engage industry
            experts and native translators. We help our clients with:
          </p>
          <li>Business and Ecommerce documentation translations</li>
          <li>Personal document translations </li>{" "}
          <li>Banking, Legal and Contracts translations</li>
        </div>
      </div>

      <div class="bgImage3 lg:h-[75rem] my-[5%]">
        <div className="pt-[9%]">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col min-[25px]:flex-col py-[6%] mx-[10%]">
            <div className="w-full mr-4">
              <h2 className="text-4xl font-semibold mb-7 mt-5 text-white lg:mt-24 sm:mt-14">Best Deals for You babby</h2>
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
                <div className="w-1/2 px-2 mb-4">
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
                <div className="w-1/2 px-2 mb-4">
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

      <div>
        <div class="lg:h-[55rem] md:h-[65rem] sm:h-[45rem] min-[250px]:h-[66rem]">
          <div class="flex items-center   justify-center h-screen">
            <div class="relative mt-[7%] h-3/4">
              <h1 class="text-4xl absolute -top-[15%] left-[12%] lg:left-[35%] text-black font-bold">
                Translation Process
              </h1>
              <div class="hidden md:block lg:block">
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 border-2 border-dashed border-[#3D65FF] lg:h-[30rem]"></div>
                <div class="relative flex items-center py-3 px-3 ">
                  <div class="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                    <Icon
                      className="ml-2 mt-2"
                      icon="fluent:comma-24-filled"
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </div>
                  <div class="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                    <div
                      class="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    ></div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                    <Icon
                      className="ml-2 mt-2"
                      icon="mdi:rename"
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </div>
                  <div class="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                    <div
                      class="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    ></div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                    <Icon
                      className="ml-2 mt-2"
                      icon="mdi:email"
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </div>
                  <div class="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                    <div
                      class="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    ></div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                    <Icon
                      className="ml-2 mt-2"
                      icon="mdi:headset-mic"
                      style={{ color: "white", fontSize: "30px" }}
                    />{" "}
                  </div>
                  <div class="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                    <div
                      class="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="md:hidden sm:block">
                <div class="relative flex items-center py-3 px-3">
                  <div class="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3">
                  <div class="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-center py-3 px-3 sm:hidden ">
                  <div class="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                    <div>
                      <h1 class="text-xl text-black font-bold mb-2">
                        Get a quote
                      </h1>
                      <p class="text-gray-700 mb-4">
                        Email your documents to info@lettercrafts.org or fill up
                        a short form to get a quote in 30 mins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div class="bgImage22 lg:h-[75rem]">
        <div class="pt-[15%]">
          <h1 class="text-4xl text-center text-white font-bold mb-20">
            Why LetterCrafts?
          </h1>
          <div class="flex justify-between lg:mx-[16%] gap-1">
            <div class=" bg-white flex items-center flex-col rounded-lg p-4 text-center w-[20rem]">
            <img src={rate} alt="rate" />
              <h2 class="text-lg font-bold mb-2">Best Rates</h2>
              <div class="w-[83%] ">
                <p class="text-gray-700 ">
                  You are welcome to provide any feedback or ask for
                  corrections. We assure 6 months post project support to all
                  our clients.
                </p>
              </div>
            </div>
            <div class=" bg-white flex items-center flex-col rounded-lg p-4 text-center w-[20rem]">
              <img src={star} alt="star" />
              <h2 class="text-lg font-bold mb-2">High Quality</h2>
              <div class="w-[83%] ">
                <p class="text-gray-700 ">
                  You are welcome to provide any feedback or ask for
                  corrections. We assure 6 months post project support to all
                  our clients.
                </p>
              </div>
            </div>
            <div class=" bg-white flex items-center flex-col rounded-lg p-4 text-center w-[20rem]">
            <img src={speed} alt="speed" />
              <h2 class="text-lg font-bold mb-2">Speed</h2>
              <div class="w-[83%] ">
                <p class="text-gray-700 ">
                  You are welcome to provide any feedback or ask for
                  corrections. We assure 6 months post project support to all
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="py-12">
          <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
                <p class="text-gray-700">
                  Turpis dui enim sed nisl facilisis. Tortor sapien bibendum
                  nibh imperdiet suspendisse mauris dolor lacus lectus. Semper a
                  eu lectus nisi augue. Condimentum augue ante nunc ornare amet.
                </p>
              </div>
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
              </div>
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
              </div>
              <div className="shadow-md rounded-md px-3 py-2 hidden">
                <h3 class="text-xl font-semibold mb-4">Question 2</h3>
                <p class="text-gray-700">Answer to question 2 goes here.</p>
              </div>
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
              </div>
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
              </div>
              <div className="shadow-md rounded-md px-3 py-2">
                <h3 class="text-xl font-semibold mb-4">
                  Eu lobortis nisl nulla quis cursus nisl aliquet ut metus.
                  Senectus?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
