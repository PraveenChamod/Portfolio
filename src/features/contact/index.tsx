import React from "react";
import { MailIcon, PhoneIcon } from "../../assets/images/icons";

function Contact() {
  return (
    <div className="flex flex-col mb-12 w-full h-full lg:px-60 md:px-20 sm:px-20 px-10">
      <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-center my-8">
        Contact Me
      </p>
      <div className="text-center p-8 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] shadow-lg bg-gradient-to-tr from-[#03346E] to-purple-500">
        <div className="border-b-2 border-white-500 pb-6">
          <p className="mt-4 text-lg text-justify">
            Say Hello, I’m always here. I’d love to hear from you !
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <div className="mb-2 flex items-center space-x-2">
            <MailIcon className="w-6 h-6 text-white" />
            <a
              href="mailto:praveenchamod23@gmail.com"
              className="text-sm sm:text-md md:text-lg text-white"
            >
              praveenchamod23@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-6 h-6 text-white" />
            <p className="text-sm md:text-md lg:text-lg">+94-77-860-1398</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
