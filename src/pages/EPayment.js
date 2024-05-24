
import React from 'react';
import "../CSS/Home.css";
import panaA from "../assets/Image/panaA.png"
import panaB from "../assets/Image/panaB.png"
import panaC from "../assets/Image/panaC.png"
import panaD from "../assets/Image/panaD.png"
import { Icon } from "@iconify/react";

const EPayment = () => {
  return (
    <div>
      <div class="bgImage6 lg:h-[48rem] min-[250px]:h-[70rem] sm:h-[40rem] px-[10%] relative">
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col pt-[6%]  w-full  justify-between">
          <div class="">
            <h1 class="text-4xl text-white font-bold mb-2">
            We are always looking for {" "}<br/>the best of the best
            </h1>
            <p class=" text-white mb-2 py-2 text-lg">
            Developers, designers, product managers, planners, creatives and operations{" "}<br/> specialists. Get in touch with us, tell us your interests and skills, and we’ll let you{" "}<br/> know when a position that fits you opens up
            </p>
            <p class=" text-white mb-2 py-2 text-3xl">
            Why work with us
            </p>
            <p class=" text-white mb-2 py-2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            Fair and Transparent
            </p>
            <p class=" text-white mb-2 py-2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            Work remotely and strike work life balance
            </p>
            <p class=" text-white mb-2 py-2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 512 512" className=" text-[#697587] text-[30px] inline-flex"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></svg>
            Always open to pushing the limits and exploring new technology & ideas .
            </p>
          </div>
          
        </div>
      </div>

      
        <div className="lg:py-14 md:py-14 sm:py-8 lg:px-28 md:px-16 sm:px-8">
          <h1 className="text-4xl text-black font-bold mb-2">We are constantly looking for</h1>
        </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-28 my-6 ">
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={panaA}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold mt-[4rem] mb-3">Translators</h1>
          <p className="text-[#697587] ">
          Dapibus eget mi et eu ut <br/>tortor ipsum. Volutpat nec <br/>fusce mattis consectetur <br/>velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={panaB}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold mt-[4rem] mb-3">Industry Bloggers</h1>
          <p className="text-[#697587]">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md  ">
          <img
            src={panaC}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold mt-[4rem] mb-3 ">
          Digital Marketing experts
          </h1>
          <p className="text-[#697587]">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md  ">
          <img
            src={panaD}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold  mt-[4rem] mb-3">
          Social Media<br/> Influencers
          </h1>
          <p className="text-[#697587]  ">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
      </div>

      <div className="bgImage4  lg:h-[70rem] sm:h-[120rem] md:[100rem] ">
      <div className="flex items-center justify-center h-screen">
          <div className="relative mt-[20%] h-3/4">
            <h1 className="text-4xl absolute -top-[15%] left-[10%] text-white font-bold items-center">Process for Talent to be onboarded</h1>
            <div className="hidden lg:block">
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
                     icon="uil:linkedin"
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
                     icon="jam:messages-f"
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
            <div className="md:block sm:block">
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
              <div className="relative flex items-center py-3 px-3 hidden md:block lg:block sm:block">
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
              <div className="relative flex items-center py-3 px-3 hidden md:block lg:block sm:block">
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
    </div>
  );
};

export default EPayment;