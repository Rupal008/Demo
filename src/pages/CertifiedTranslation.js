import React from 'react'
import { Icon } from "@iconify/react";
import certificate2 from "../assets/Image/certificate2.png";
import first from "../assets/Image/first.png";
import second from "../assets/Image/second.png";
import third from "../assets/Image/third.png";
import fourth from "../assets/Image/forth.png";
import frame44 from "../assets/Image/Frame 44.png";
import pana5 from "../assets/Image/pana5.png";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function CertifiedTranslation() {
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
    <section>
      <div class="min-[250px]:bg-[#101d2e] lg:h-[48rem] min-[250px]:h-[70rem] sm:h-[40rem] px-[10%] relative">
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col pt-[6%]  w-full  justify-between">
          <div class="">
            <h1 class="text-4xl text-white font-bold mb-2">
            Certified & Notarised <br/>Translations in<br/><Icon icon="openmoji:flag-singapore" className=" text-[#3D65FF] text-[40px] inline-flex" /> Singapore
            </h1>
            <p class=" text-white mb-2 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1em" viewBox="0 0 20 20" className=" text-[#3D65FF] text-[20px] inline-flex"><path fill="currentColor" d="M10 0a7.65 7.65 0 0 0-8 8c0 2.52 2 5 3 6s5 6 5 6s4-5 5-6s3-3.48 3-6a7.65 7.65 0 0 0-8-8m0 11.25A3.25 3.25 0 1 1 13.25 8A3.25 3.25 0 0 1 10 11.25"/></svg>
            Servcorp, Suntec Tower Three, #42-01, 8 Temasek Boulevard Singapore 038988
            </p>
            <p class=" text-white mb-2 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1em" viewBox="0 0 20 20" className=" text-[#3D65FF] text-[20px] inline-flex"><path fill="currentColor" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
            +65 8695 7260
            </p>
            <p class=" text-white mb-2 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1em" viewBox="0 0 20 20" className=" text-[#3D65FF] text-[20px] inline-flex"><path fill="currentColor" d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
            +65 6711 0135
            </p>
            <p class=" text-white mb-2 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1em" viewBox="0 0 24 24" className=" text-[#3D65FF] text-[20px] inline-flex "><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
            info@lettercrafts.org
            </p>
            <p class=" text-white mb-2 py-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1em" viewBox="0 0 32 32" className=" text-[#3D65FF] text-[20px] inline-flex "><path fill="currentColor" d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"/><path fill="none" d="M20.587 22L15 16.41V7h2v8.582l5 5.005z"/></svg>
            09.00 AM-06.30 PM
            </p>
          </div>
          <div class="flex absolute top-[35%] lg:left-[50%] min-[250px]:mt-[10%] min-[250px]:left-0 min-[250px]:mx-[10%] lg:flex-row md:flex-row sm:flex-row lg:w-[30%]  bg-white shadow-2xl rounded-xl min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between lg:block md:hidden sm:hidden ">
            <div class="pr-8 flex flex-col items-start p-4">
              <div>
                <h2 class="text-4xl text-black">Get a quote</h2>
                <p class="text-black mb-10">
                  Lacus eu ultrices sagittis habitant. Etiam gravida<br/> lacus leo
                  vel. Nec viverra commodo at convallis<br/> faucibus amet. Aliquam a
                  id aliquam pulvinar neque.
                </p>
              </div>
              <form class="w-full" ref={form} onSubmit={sendEmail}>
                <div class="relative mb-2">
                  <span class="absolute inset-y-1 left-[-2] flex items-center pl-2">
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

      <div class=" lg:h-[60rem] min-[250px]:h-[70rem]">
        <div class="pt-[5%] lg:ml-[10%] mb-[1%]">
          <h1 class="text-4xl text-[#101D2E] font-semibold mb-1 w-[30%]">
            Samples of certified translations
          </h1>
          <div class="flex flex-wrap justify-center lg:gap-9 md:gap-5 sm:gap-1 gap-2 mt-[6rem]">
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2  rounded-lg border-blue-600 border shadow-md shadow-blue-300">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 border-blue-600 border shadow-md shadow-blue-300 rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 border-blue-600 border shadow-md shadow-blue-300 rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 border-blue-600 border shadow-md shadow-blue-300 rounded-lg">
              <img
                src={certificate2}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Birth certificate</h4>
              <h4 className="text-lg font-semibold ml-5">$45.00</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 border-blue-600 border shadow-md shadow-blue-300 rounded-lg">
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

      <div class="bgImage3 lg:h-[75rem] my-[5%]">
        <div className="pt-[9%]">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col min-[25px]:flex-col py-[6%] mx-[10%]">
            <div className="w-full mr-4">
              <h2 className="text-4xl font-semibold mb-7 mt-5 text-white lg:mt-14 sm:mt-14">
                Businesses love <br />
                working with us
              </h2>
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
                <div className="w-1/2 px-2 mb-4  md:hidden">
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
                <div className="w-1/2 px-2 mb-4  md:hidden">
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
              <h1 class="text-4xl absolute -top-[15%] left-[35%] text-black font-bold">
                Translation Process
              </h1>
              <div class="hidden lg:block">
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
                    <div class="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"></div>
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
                    <div class="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"></div>
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
                    <div class="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"></div>
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
                    <div class="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"></div>
                  </div>
                </div>
              </div>
              <div class="md:block sm:block">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgImage5 grid-rows-2 lg:grid-rows-2 sm:grid-rows-1 lg:h-[5rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[40rem] justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16 ">
      <div className=" md:py-[80] py-5 flex mx-auto max-w-[1320px] md:flex-row sm:flex-row flex-col pb-5">
        <div className="basis-[30%] mt-[-5rem] lg:mt-[7rem] md:mt-[7rem] sm:mt-[7rem]">
          <div className="">
            <img src={pana5} alt="img" className=" " />
          </div>
        </div>
        <div className="basis-[70%] px-8 lg:px-20 md:px-16 sm:px-14 ">
          <h2 class="text-2xl text-white md:text-3xl font-bold mt-3 pb-5">
            Why LetterCrafts?
          </h2>
          <p className="py-3 text-white">
          <h2 className="font-semibold text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            We provide quick, affordable and high-quality Certified Translations
            & Notarisation Services.</h2>
            </p>
          <p className="py-3 hidden md:block lg:block sm:block text-white">
            <h2 className="font-semibold text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
              Our translated documents are accepted in all the government bodies in Singapore:</h2>
            <li className="px-16">ICA, MOM, LTA, ROM</li>
            <li className="px-16">Visa, Immigration &amp; Embassy submissions</li>
            <li className="px-16">PR applications</li>
            <li className="px-16">Notarization service is available on request</li>
          </p>
          <p className="py-3 text-white ">
            <h2 className="font-semibold text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            We value your business and understand the importance of accurate translations.</h2>
          </p>
          <p className="py-3 hidden md:hidden lg:block sm:hidden text-white">
          <h2 className="font-semibold text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            To ensure professional-grade translations, we only engage industry
            experts and native translators. We help our clients with:</h2>
            <li className="px-16">Business and Ecommerce documentation translations</li>
          <li className="px-16">Personal document translations</li>
          <li className="px-16">Banking, Legal and Contracts translations</li>
          </p>
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
    </section>
  )
}
