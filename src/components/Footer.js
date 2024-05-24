import React from "react";
import logo from "../assets/Image/logo.png"
import lettercrafts from "../assets/Image/letterCarfts.png"

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#000000] text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex lg:flex-row md:flex-row sm:flex-col min-[250px]:flex-col justify-between">
            <div class="flex lg:flex-col md:flex-col sm:flex-row min-[250px]:flex-row justify-between w-full pr-8">
              <div class="mb-4">
                <img
                  src={lettercrafts}
                  alt="Logo"
                  class="w-24 mb-4"
                />
                <p class="mb-4 w-[40%]">
                  Elementum cras euismod sem in enim vel nunc nulla. At
                  scelerisque tristique purus.
                </p>
                <div class="flex items-center w-[20%] justify-between">
                  <a href="#" class=" text-[rgb(61,101,255)]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-[#3D65FF]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-[#3D65FF]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" class="text-[#3D65FF] text-xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  class="lg:w-[35%] md:w-[30%] sm:w-[80%] min-[250px]:w-[20rem] mb-4"
                />
              </div>
            </div>
            <div class="w-full flex justify-between ">
              <div class="flex flex-wrap">
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">Nam felis a</h3>
                  <ul>
                    <li>Enim maecenas</li>
                    <li>facilisi amet amet</li>
                    <li>duis. Natoque</li>
                    <li>massa urna vitae</li>
                    <li>Posuere dis.</li>
                  </ul>
                </div>
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">Volutpat</h3>
                  <ul>
                    <li>consequat tellus</li>
                    <li>luctus viverra</li>
                    <li>bibendum morbi</li>
                    <li>bibendum morbi</li>
                    <li>Eleifend dui enim.</li>
                  </ul>
                </div>
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">Adipiscing</h3>
                  <ul>
                    <li>Amet diam aliquet</li>
                    <li>eget posuere</li>
                    <li>tincidunt. Sed nunc </li>
                    <li>aucibus at </li>
                    <li>pellentesque. </li>
                  </ul>
                </div>
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">Sit ut vitae</h3>
                  <ul>
                    <li>Lectus sapien sem</li>
                    <li>massa libero</li>
                    <li>bibendum. Purus</li>
                    <li>placerat arcu diam </li>
                    <li>ultrices. Non aliquet</li>
                    <li>quam arcu proin.</li>
                  </ul>
                </div>
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">In libero enim</h3>
                  <ul>
                    <li>In cursus tellus</li>
                    <li>non etiam</li>
                    <li>volutpat massa </li>
                    <li>varius libero</li>
                    <li>justo. Eu</li>
                    <li>ultrices donec</li>
                    <li>leo diam.</li>
                  </ul>
                </div>
                <div class="w-1/3 px-4 mb-8">
                  <h3 class="text-lg font-semibold mb-2">Congue auctor</h3>
                  <ul>
                    <li>Nunc convallis</li>
                    <li>consectetur nulla</li>
                    <li>sollicitudin</li>
                    <li>elementum sagittis</li>
                    <li>gravida quisque.</li>
                    <li> Aliquam eu tristique</li>
                    <li>id sed placerat vel</li>
                    <li>rhoncus.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#697587] text-white py-4 ">
      <h4 className="ml-28">© 2023 All rights reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
