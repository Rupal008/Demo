import React from 'react';
import { Icon } from "@iconify/react";
import Reactangle_6 from "../assets/Image/Rectangle 6.png";
import Reactangle_7 from "../assets/Image/Rectangle 7.png";
import Reactangle_8 from "../assets/Image/Rectangle 8.png";
import Reactangle_9 from "../assets/Image/Rectangle 9.png";
import Reactangle_10 from "../assets/Image/Rectangle 10.png";
import Reactangle_11 from "../assets/Image/Rectangle 11.png";
import first from "../assets/Image/first.png";
import second from "../assets/Image/second.png";
import third from "../assets/Image/third.png";
import fourth from "../assets/Image/forth.png";
import frame44 from "../assets/Image/Frame 44.png";
import para2 from "../assets/Image/pana2.png";
import panaindustry from "../assets/Image/panaIndustry.png";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Services = () => {
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
        <section>
            <div class="home-page min-[250px]:bg-[#101d2e] lg:h-[48rem] min-[250px]:h-[70rem] sm:h-[40rem] px-[10%] relative">
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col pt-[6%]  w-full  justify-between">
          <div class="">
            <h1 class="text-4xl text-white font-bold mb-2">
            Lorem ipsum dolor 
            </h1>
            <h1 class="text-4xl text-white font-bold mb-2">
            sit amet consectetur.
            </h1>
            <h1 class="text-4xl text-white font-bold mb-2">
            Praesent sit enim.{" "}
            </h1>
            <p className='text-lg text-white font-thin sm:hidden'>Lorem ipsum dolor sit amet consectetur. Sed id nibh faucibus dolor sed.<br/>{''} Sit sed justo viverra massa in ut. Ut dignissim turpis egestas faucibus.</p>
          </div>
          <div class="flex absolute top-[35%] lg:left-[50%] min-[250px]:mt-[10%] min-[250px]:left-0 min-[250px]:mx-[10%] lg:flex-row md:flex-row sm:flex-row lg:w-[30%]  bg-white shadow-2xl rounded-xl min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between">
            <div class="pr-8 flex flex-col items-start p-4">
              <div>
                <h2 class="text-4xl   text-black">Get a quote</h2>
                <p class="text-black mb-20"></p>
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

        <div className="grid grid-cols-6 gap-4 mx-[10%] my-[5%]">
          <img src={Reactangle_6} alt="" className="w-full h-auto sm:hidden" />
          <img src={Reactangle_7} alt="" className="w-full h-auto sm:hidden" />
          <img src={Reactangle_8} alt="" className="w-full h-auto sm:hidden" />
          <img src={Reactangle_9} alt="" className="w-full h-auto sm:hidden" />
          <img src={Reactangle_10} alt="" className="w-full h-auto sm:hidden" />
          <img src={Reactangle_11} alt="" className="w-full h-auto sm:hidden" />
        </div>

        <div className="bgImage5 grid-rows-2 lg:grid-rows-2 sm:grid-rows-1 lg:h-[5rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[40rem] justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16 ">
      <div className=" md:py-[80] py-5 flex mx-auto max-w-[1320px] md:flex-row sm:flex-row flex-col pb-5">
        <div className="basis-[5%] lg:basis-[30%] md:basis-[30%] sm:basis-[30%] mt-[-2rem] lg:mt-[7rem] md:mt-[7rem] sm:mt-[7rem] sm:w-[5rem] sm:h-[5rem] w-[18rem] h-[18rem]">
          <div className="">
            <img src={panaindustry} alt="img" className=" " />
          </div>
        </div>
        <div className="basis-[70%] px-8 lg:px-20 md:px-16 sm:px-14 ">
          <h2 class="text-3xl text-white md:text-3xl font-semibold mt-3 pb-5">
          Lorem ipsum dolor sit amet <br/> consectetur
          </h2>
          <p className="py-3 text-white font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur. Vitae molestie venenatis pulvinar sed ullamcorper proin non nascetur quis. Aliquam donec sem vitae duis. Est odio massa facilisis nibh nullam nibh turpis odio aenean. Sed porta porta in auctor facilisi elit sed. Fusce viverra fames at aliquam urna vitae. 
            </p>
          <p className="py-3 font-semibold text-lg text-white hidden md:hidden lg:block sm:hidden ">
          Et nec tellus ac purus bibendum in. Diam donec ligula amet mauris urna. Ipsum nibh odio cras nec pulvinar consectetur vitae. Suspendisse enim odio sit feugiat tortor sed ornare tellus neque. Sed at nisl vel mattis. Enim pharetra facilisis tempus commodo. Vehicula lacus pellentesque id amet in venenatis quis phasellus. Dui sit est ullamcorper ultrices. Purus placerat placerat senectus eu euismod amet commodo velit. Eu id et mattis nec porta sed nisi sem ultrices. Fames viverra maecenas quis vitae id nisi. Laoreet praesent sapien ultricies aliquet faucibus augue neque sollicitudin.
          </p>
          <p className="py-3 text-white font-semibold text-lg hidden md:block lg:hidden xl:block sm:hidden ">
            Mattis et diam sapien nulla at ut condimentum. Fermentum nec faucibus risus mattis hac hendrerit amet. Ipsum sit mus pellentesque volutpat malesuada eu urna. Enim nunc urna molestie pharetra feugiat euismod sed. Porttitor hendrerit arcu sed ac lobortis.
          </p>
          
        </div>
      </div>
      </div>
        
      <div>
        <div class="lg:h-[55rem] md:h-[65rem] sm:h-[45rem] min-[250px]:h-[66rem]">
          <div class="flex items-center   justify-center h-screen">
            <div class="relative mt-[7%] h-3/4">
              <h1 class="text-4xl absolute -top-[15%] left-[35%] text-black font-bold md:mt-[2rem]">
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
              <div class="md:block sm:block md:mt-[4rem]">
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

      <div class="bgImage3 lg:h-[75rem] my-[5%]">
        <div className="pt-[9%]">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col min-[25px]:flex-col py-[6%] mx-[10%]">
            <div className="w-full mr-4 ">
              <h2 className="text-4xl font-semibold mb-7 mt-5 text-white lg:mt-14 sm:mt-14">
                Businesses love <br />
                working with us
              </h2>
              <div className="flex flex-wrap -mx-2 ">
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
                <div className="w-1/2 px-2 mb-4 md:hidden">
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
                <div class="w-1/2 px-2 mb-4 ">
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
                <div className="w-1/2 px-2 mb-4 md:hidden">
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
        </section>
    );
};

export default Services;