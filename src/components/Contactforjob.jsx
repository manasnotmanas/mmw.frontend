import React from "react";

const ContactFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0e47] px-4">
      <div className="bg-white text-[#0f0e47] rounded-2xl shadow-xl max-w-md w-full p-8 font-poppins">
        <h1 className="text-2xl font-semibold mb-4">Having trouble submitting?</h1>
        <p className="mb-4 text-base">
          Please send your details directly to the email below along with your resume.
        </p>
        <p className="text-base italic mb-6">
          (Upper link didn’t work)
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-[#0f0e47] text-white py-2 px-6 rounded-xl hover:bg-[#1a1a60] transition"
        >
          Send to: youremail@example.com
        </a>
      </div>
    </div>
  );
};

export default ContactFallback;
