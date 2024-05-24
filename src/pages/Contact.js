import React from "react";
import { Icon } from "@iconify/react";
import "../CSS/Home.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
      <div class="min-[250px]:bg-[#101d2e] lg:h-[48rem] min-[250px]:h-[70rem] sm:h-[40rem] px-[10%] relative">
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col pt-[6%]  w-full  justify-between">
          <div class="">
            <h1 class="text-4xl text-white font-bold mb-2">
            Contact Us{" "}
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
          <div class="flex absolute top-[35%] lg:left-[50%] min-[250px]:mt-[10%] min-[250px]:left-0 min-[250px]:mx-[10%] lg:flex-row md:flex-row sm:flex-row lg:w-[32%]  bg-white shadow-2xl rounded-xl min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between">
            <div class="pr-8 flex flex-col items-start p-4">
              <div>
                <h2 class="text-4xl text-black">Send us a message</h2>
                <p class="text-black mb-10">
                  Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
                  vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
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
                    type="Email"
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
      <div className="map grid-rows-2 lg:grid-rows-2 sm:grid-rows-1 lg:h-[5rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[40rem] justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16 "></div>
    </div>
  );
};

export default Contact;


// import React from 'react';
// import { Icon } from "@iconify/react";
// import {useRef} from "react"
// import emailjs from '@emailjs/browser';
// import "react-toastify/dist/ReactToastify.css";

// const EPayment = () => {
//     const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log("succesfully");

//     emailjs
//       .sendForm('service_3cfyo3n', 'template_xt1ztwq', form.current, {
//         publicKey: 'FohGakYxSK5btaCcX',
//       })
//       .then(
//         (result) => {
//           console.log(result.text);
//         },(error) => {
//           console.log( error.text);
//         });
//         e.target.reset();
//   };
//     return (
//         <div>
//              <div className="w-1/2 pr-8">
//               <div>
//                 <h2 className="text-3xl font-bold mb-10 text-white sm:text-center lg:text-left">
//                   Get in touch
//                 </h2>
//                 <p className="text-white mb-10 sm:text-center lg:text-left">
//                   Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
//                   vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
//                   id aliquam pulvinar neque.
//                 </p>
//               </div>
//               <form onSubmit={sendEmail} ref={form}>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="fa6-solid:user" />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Name"
//                     name="user_name required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="mdi:email" />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Email"
//                     name="user_email required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="mdi:cellphone" />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Phone"
//                     name="user_phone required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:translate"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Translate-1"
//                     name="user_name required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:translate"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Translate-2"
//                     name="user_name required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:truck-delivery"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Delivery"
//                     name="user_name required"
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:file"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Message"
//                     name="user_message required"
//                   />
//                 </div>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//         </div>
//     );
// };

// export default EPayment;


// import React, { useState } from 'react';
// import { Icon } from "@iconify/react";
// import "react-toastify/dist/ReactToastify.css";
// import Axios from "axios"


// const EPayment = () => {
//   const url='https://jsonplaceholder.typicode.com/posts'
//   const [data,setData]=useState({
//     name:"",
//     email:"",
//     phone:"",
//     translate:"",
//     delivery:"",
//     message:""
//   })
//   function submit (e){
//     e.preventDefault()
//     Axios.post(url,{
//       name:data.name,
//       email:data.email,
//       phone:data.phone,
//       translate:data.translate,
//       delivery:data.delivery,
//       message:data.message
//     })
//     .then(res=>{
//       console.log(res.data)
//     })
   
//   }
//   function handle(e){
//     const newdata={...data}
//     newdata[e.target.id]=e.target.value
//     setData(newdata)
//     console.log(newdata)
//   }
//     return (
//         <div>
//              <div className="w-1/2 pr-8">
//               <div>
//                 {/* <h2 className="text-3xl font-bold mb-10 text-white sm:text-center lg:text-left">
//                   Get in touch
//                 </h2> */}
//                 {/* <p className="text-white mb-10 sm:text-center lg:text-left">
//                   Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
//                   vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
//                   id aliquam pulvinar neque.
//                 </p> */}
//               </div>
//               <form onSubmit={(e)=>submit(e)}>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="fa6-solid:user" />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Name" 
//                     name="user_name required"
//                     onChange={(e)=>handle(e)} id='name' value={data.name}
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="mdi:email" />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Email"
//                     name="user_email required"
//                     onChange={(e)=>handle(e)} id='email' value={data.email}
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                     <Icon icon="mdi:cellphone" />
//                   </span>
//                   <input
//                     type="number"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Phone"
//                     name="user_phone required"
//                     onChange={(e)=>handle(e)} id='phone' value={data.phone}
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:translate"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Translate-1"
//                     name="user_name required"
//                     onChange={(e)=>handle(e)} id='translate' value={data.translate}
//                   />
//                 </div>
//                 {/* <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:translate"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Translate-2"
//                     name="user_name required"
//                   />
//                 </div> */}
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:truck-delivery"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Delivery"
//                     name="user_name required"
//                     onChange={(e)=>handle(e)} id='delivery' value={data.delivery}
//                   />
//                 </div>
//                 <div className="relative mb-6">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-1">
//                     <Icon
//                       className=""
//                       icon="mdi:file"
//                       style={{ color: "black", fontSize: "25px" }}
//                     />
//                   </span>
//                   <input
//                     type="text"
//                     className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
//                     placeholder="Message"
//                     name="user_message required"
//                     onChange={(e)=>handle(e)} id='message' value={data.message}
//                   />
//                 </div>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//         </div>
//     );
// };

// export default EPayment;



// src/ContactForm.js
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     sourceLanguage: '',
//     toLanguage: '',
//     deliveryOptions: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.send('service_3cfyo3n', 'template_xt1ztwq', formData, 'FohGakYxSK5btaCcX')
//       .then((response) => {
//         alert('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           sourceLanguage: '',
//           toLanguage: '',
//           deliveryOptions: '',
//           message: ''
//         });
//       })
//       .catch((error) => {
//         alert('Failed to send message. Please try again later.');
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-gray-700">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sourceLanguage" className="block text-gray-700">Source Language</label>
//           <input
//             type="text"
//             id="sourceLanguage"
//             name="sourceLanguage"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.sourceLanguage}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="toLanguage" className="block text-gray-700">To Language</label>
//           <input
//             type="text"
//             id="toLanguage"
//             name="toLanguage"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.toLanguage}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="deliveryOptions" className="block text-gray-700">Delivery Options</label>
//           <input
//             type="text"
//             id="deliveryOptions"
//             name="deliveryOptions"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.deliveryOptions}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="message" className="block text-gray-700">Your Message</label>
//           <textarea
//             id="message"
//             name="message"
//             className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



