import React from "react";
import aboutfirst from "../assets/Image/aboutfirst.png";
import abgirl from "../assets/Image/abgirl.png";
import pana3 from "../assets/Image/pana3.png";
import pana4 from "../assets/Image/pana4.png";
import para2 from "../assets/Image/pana2.png";
import Gone from "../assets/Image/Gone.png";
import Reactangle_6 from "../assets/Image/Rectangle 6.png";
import Reactangle_7 from "../assets/Image/Rectangle 7.png";
import Reactangle_8 from "../assets/Image/Rectangle 8.png";
import Reactangle_9 from "../assets/Image/Rectangle 9.png";
import Reactangle_10 from "../assets/Image/Rectangle 10.png";
import Reactangle_11 from "../assets/Image/Rectangle 11.png";
import certificate1 from "../assets/Image/certificate1.png";
import "../CSS/About.css";

const About = () => {
  return (
    <div>
      <div className="flex min-[250px]:bg-[#101d2e] lg:flex-row md:flex-row sm:flex-col min-[250px]:flex-col  home-page lg:h-[48rem] min-[250px]:h-[80rem] sm:h-[40rem] ">
        <div className="lg:py-28 md:py-16 sm:py-8 lg:px-28 md:px-16 sm:px-8">
          <h1 className="text-4xl text-white font-bold mb-2">About us</h1>
          <p className="text-lg text-[#ffffff]">
            In mi nunc auctor eget a donec placerat. Enim turpis turpis sed eu
            eu.
            <br /> Neque duis orci nam in mauris a sed. Ac id leo posuere et
            mattis in cras
            <br /> dapibus. Tortor sapien amet cursus at consequat faucibus
            laoreet eu at.
            <br /> Eu ac mattis risus augue. Ultricies adipiscing euismod id
            egestas lacus
            <br />
            platea senectus mattis mattis. Erat sit amet non porttitor id
            elementum.
            <br /> Et vel placerat eros risus molestie hac diam sed. Lectus
            fusce volutpat
            <br /> consequat augue. Tortor cras urna risus accumsan cursus.
            Molestie
            <br /> libero ut sapien ultrices amet nunc fusce.
          </p>
        </div>
        <div className="flex flex-col w-[20rem] h-[20rem] sm:mt-[-3rem] lg:mt-[5rem] ml-[5rem] p-6 rounded-lg justify-center items-center md:mt-[7rem]">
          <img src={aboutfirst} alt="" />
        </div>
      </div>
      
      <div className="flex lg:flex-row md:flex-row sm:flex-row lg:mt-[1%] min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between">
        <div className="lg:py-28 md:py-16 sm:py-8 lg:px-28 md:px-16 sm:px-8">
          <h1 className="text-4xl text-black font-bold mb-2">The Team</h1>
          <p className="text-[#697587]">
            We are a passionate team of professional Translators. With years of
            experience in <br />
            translating over 80 language pairs and handling complex projects -
            We can cater
            <br />
            to all your Translation needs.
          </p>
          <p className="text-[#697587]">
            Our People: the diversity and rich experience they bring in is our
            biggest asset that
            <br />
            has enabled us to move from strength to strength.
          </p>
          <p className="text-[#697587]">
            Founded in Singapore, we are now expanding our footprint into Hong
            Kong, Japan, <br />
            ndia, UAE, and the UK.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-28 my-10 ">
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={abgirl}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold">Brooklyn Simmons</h1>
          <p className="text-[#697587] ">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={abgirl}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold">Brooklyn Simmons</h1>
          <p className="text-[#697587]">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={abgirl}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold align-center ">
            Brooklyn Simmons
          </h1>
          <p className="text-[#697587]">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
        <div class="bg-[white] p-4 rounded-md justify-center items-center ">
          <img
            src={abgirl}
            alt="Person 1"
            class="w-[24] h-[24] object-cover rounded-md mb-2"
          />
          <h1 className="text-2xl font-semibold items-center align-center justify-center">
            Brooklyn Simmons
          </h1>
          <p className="text-[#697587] items-center align-center justify-center ">
            Dapibus eget mi et eu ut <br />
            tortor ipsum. Volutpat nec <br />
            fusce mattis consectetur <br />
            velit sit nunc urna. Id massa.
          </p>
        </div>
      </div>

      <div className="bgImage5 grid-rows-2 lg:grid-rows-2 sm:grid-rows-1 lg:h-[5rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[40rem] justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16 ">
        <div className="lg:mt-[7rem] mt-[-5rem] md:mt-[6rem] sm:mt-[5rem] md:py-[80] py-5 flex mx-auto max-w-[1320px] md:flex-row  sm:flex-row flex-col pb-5">
          <div className="basis-[30%]">
            <div className="">
              <img src={pana3} alt="img" className=" " />
            </div>
          </div>
          <div className="basis-[70%] px-8 ">
            <h1 className="text-4xl pb-5 text-[#ffffff]">Our Mission</h1>
            <p className="py-3 text-[#ffffff]">
              We operate with a single-minded focus to deliver high quality,
              fast and an affordable Translation service.
            </p>
            <p className="py-3 text-[#ffffff]">
              As a translations company we are conscious of the value
              proposition we bring to our clients and so we strive to do our
              best every-time a client engages us. Providing customized
              solutions and being sensitive to client's requirements are values
              that are ingrained in our ways of working.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:py-[80] py-5 flex mx-auto max-w-[1320px] md:flex-row sm:flex-row flex-col pb-5">
        <div className="basis-[70%] px-8 ">
          <h1 className="text-4xl pb-5 ">Our Process</h1>
          <p className="py-3">
            We continuously refine our processes to adapt to the latest
            technology and best project management practices.
          </p>
          <p className="py-3">
            Projects are assigned only to Translators with the relevant language
            proficiency, industry background and qualifications. All large
            projects undergo a peer-peer review and QA checks to ensure
            consistency in tone and writing style. Initial assessment, drafting
            of the Translation, QA check, Customer Service and Client Feedback -
            Every stage of the translation project is logged and reviewed for
            continuous improvement.
          </p>
        </div>
        <div className="basis-[30%]">
          <div className="">
            <img src={pana4} alt="img" className=" " />
          </div>
        </div>
      </div>

      <div className="bgImage3 lg:h-[66rem] sm:h-[40rem]">
        <div className="flex items-center flex-col px-4 py-8 ">
          <h2 className="text-4xl font-bold lg:mt-[10%] sm:mt-[7%] mb-4 md:mb-1 sm:mb-4 text-white">
            Our Clients
          </h2>
          <p className="text-white mb-6 w-[60%] text-left sm:text-center">
            Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque
            interdum id imperdiet viverra
            <br /> gravida sit scelerisque. Id consequat lorem praesent mauris.
            Dolor aenean eleifend etiam amet.
          </p>
          <div className="sm:w-1/2 w-full sm:block hidden text-[#ffffff] space-x-1 mb-4">
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

      <div className="max-w-7xl mx-auto p-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-700 mb-8 w-[60%]">
            Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque
            interdum id imperdiet viverra gravida sit scelerisque. Id consequat
            lorem praesent mauris. Dolor aenean eleifend etiam amet.
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col sm:items-center">
          <div className="w-2/3 pr-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Title</h3>
              <p className="text-gray-700 mb-8 w-[50%]">
                Quis suscipit facilisis consectetur netus egestas. Orci semper
                rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut
                risus enim aliquam tincidunt. Condimentum sit risus sit non sit.
                Volutpat vitae nibh iaculis aliquam.
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

      <div class="bgImage3 lg:h-[60rem] min-[250px]:h-[70rem] ">
        <div class="pt-[15%] lg:ml-[10%] mb-[5%]">
        <h1 className="text-4xl text-center py-5 lg:mb-[5rem] mb-0 text-white font-bold">
            Certifications & Memberships
          </h1>
          <div class="flex flex-wrap justify-center lg:gap-9 md:gap-5 sm:gap-1 gap-2 mt-[6rem] ">
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate1}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Globalization and Localization Association (GALA)</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate1}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Globalization and Localization Association (GALA)</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate1}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Globalization and Localization Association (GALA)</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg">
              <img
                src={certificate1}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5">Globalization and Localization Association (GALA)</h4>
            </div>
            <div class="w-44 sm:w-1/3 md:w-1/6 p-2 bg-[#ffffff] rounded-lg sm:hidden md:block">
              <img
                src={certificate1}
                alt="Img"
                class="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold ml-5 ">Globalization and Localization Association (GALA)</h4>
            </div>
          </div>
        </div>
      </div>

      <div class=" lg:h-[60rem] min-[250px]:h-[70rem]">
        <div class="pt-[15%] lg:ml-[0%] ml-[7%] lg:mb-[0%] mb-[5%] lg:mt-5 sm:mt-2 mt-0">
          <h1 className="text-4xl text-center py-5 lg:mb-[5rem] mb-0 text-black font-bold">
            Technology
          </h1>
          <div class="flex flex-wrap justify-center lg:gap-7 md:gap-5 sm:gap-1 gap-7 sm:mt-[2rem]">
          <div class="lg:w-[20rem] sm:w-[15rem] w-60 h-72 bg-[#ffffff] rounded-lg sm:px-[1rem] ">
              <img src={Gone} alt="Img" class="lg:w-full lg:h-auto w-60 h-36 lg:px-0 px-2 " />
              <h1 className="text-lg font-semibold">
                Translation management <br />
                system (TMS)
              </h1>
              <p className="">
                To record all project details
                systematically and assign jobs to in-
                house linguists or freelancers
                automatically.
              </p>
            </div>
            <div class="lg:w-[20rem] sm:w-[15rem] w-60 h-72 bg-[#ffffff] rounded-lg sm:px-[1rem]">
              <img src={Gone} alt="Img" class="lg:w-full lg:h-auto w-60 h-36 lg:px-0 px-2 " />
              <h1 className="text-lg font-semibold">
                Translation management <br />
                system (TMS)
              </h1>
              <p className="">
                To record all project details
                systematically and assign jobs to in-
                house linguists or freelancers
                automatically.
              </p>
            </div>
            <div class="lg:w-[20rem] sm:w-[15rem] w-60 h-72 bg-[#ffffff] rounded-lg sm:mt-[5rem] md:mt-[0rem] ">
              <img src={Gone} alt="Img" class="lg:w-full lg:h-auto w-60 h-36 lg:px-0 px-2 " />
              <h1 className="text-lg font-semibold">
                Translation management <br />
                system (TMS)
              </h1>
              <p className="">
                To record all project details
                systematically and assign jobs to in-
                house linguists or freelancers
                automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
