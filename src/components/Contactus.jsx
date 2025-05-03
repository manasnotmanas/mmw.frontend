import React from "react";

const ContactCard = () => {
  return (
    <div className="min-h-screen bg-[#0f0e47] p-8 flex flex-col items-start md:flex-row md:justify-between md:items-start">
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
            <div className="text-4xl text-[#0f0e47]">💬</div> {/* Replace with actual icon */}
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2">call us</h2>
            <p className="text-white text-lg">+911204832550</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-center gap-6">
          <div className="w-36 h-36 rounded-full bg-green-100 flex justify-center items-center">
            <div className="text-4xl text-[#0f0e47]">📬</div> {/* Replace with actual icon */}
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2">email us</h2>
            <p className="text-white text-lg">email@cogenteservices.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
