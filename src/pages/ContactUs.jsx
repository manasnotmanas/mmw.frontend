import React from "react";
import { MessageSquare, Mail } from "lucide-react";
import usePageTitle from "../components/AddTitle";

const ContactCard = () => {
  usePageTitle("Contact us")
  return (
    <div className="min-h-screen bg-[#0f0e47] px-8 md:px-20 py-12 flex flex-col items-start md:flex-row md:justify-between md:items-start">
      {/* Left Side */}
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-white mb-6">
          get <span className="text-white">in touch</span>
        </h1>
        <p className="text-white text-lg leading-relaxed">
          we are always eager to connect with our
          <br />
          current or new clients and provide
          <br />
          exceptional service
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-10 mt-12 md:mt-0">
        {/* Call Us */}
        <div className="flex items-center gap-6">
          <div className="w-36 h-36 rounded-full bg-red-300 flex justify-center items-center">
            <MessageSquare className="w-16 h-16 text-white" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2">call us</h2>
            <p className="text-white text-lg">+917011393062</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-center gap-6">
          <div className="w-36 h-36 rounded-full bg-green-100 flex justify-center items-center">
            <Mail className="w-16 h-16 text-[#0f0e47]" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2">email us</h2>
            <p className="text-white text-lg"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
