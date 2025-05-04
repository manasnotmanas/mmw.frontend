import React, { useState } from "react";
import { User } from "lucide-react";
import { devender } from "../assets"; // Make sure the image is available in this path

const teamMembers = [
  {
    name: "Ritesh Pal",
    role: "Founder & Director",
    bio: "Make My Way Pvt. Ltd Ritesh Pal is the founder and director of Make My Way Private Limited, a process-driven BPO company delivering specialized services in tele-calling, delivery partner hiring, and customer support. With a hands-on leadership style and deep industry insight, Ritesh has been the driving force behind the company's vision, growth, and operational excellence. His strong focus on team development, performance tracking, and client satisfaction has positioned Make My Way as a reliable partner in the BPO sector. Under his leadership, the company continues to expand its service capabilities and client base across India.",
  },
  {
    name: "Devendar Sahu",
    role: "Co-founder",
    bio: "Make My Way Pvt. Ltd.Devender Sahu is the co-founder of Make My Way Private Limited, a full-service BPO company delivering end-to-end business process solutions across industries. With over 10 years of experience in the BPO sector, he has worked with leading organizations such as Tech Mahindra, Energizer, Cogent, Karvy, Radical Minds, and Teleperformance. His background in business administration and deep operational expertise have helped him build and lead high-performing teams in customer service, tele-calling, and delivery partner hiring. Devender's strategic mindset and commitment to quality have played a vital role in the company’s rapid growth and trusted reputation.",
  },
];

export default function AboutUs() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative bg-[#0f0e47] text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-bubble1 absolute w-40 h-40 bg-white/10 rounded-full top-10 left-10 blur-2xl"></div>
        <div className="animate-bubble2 absolute w-32 h-32 bg-white/10 rounded-full top-1/2 left-1/3 blur-2xl"></div>
        <div className="animate-bubble3 absolute w-52 h-52 bg-white/10 rounded-full bottom-10 right-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-12">
          At Make My Way Private Limited, we specialize in delivering reliable and scalable BPO solutions tailored to meet the evolving needs of modern businesses. From high-volume tele-calling to delivery partner hiring and customer support operations, we offer end-to-end services that help our clients focus on growth while we handle the process.
          <br /><br />
          Founded by Devender and Ritesh, Make My Way was built on the vision of creating a performance-driven BPO that blends smart execution with strong accountability. With a team of trained professionals, robust quality control systems, and a deep understanding of the Indian market, we pride ourselves on being a trusted partner for startups, enterprises, and delivery platforms alike.
          <br /><br />
          We don’t just deliver results—we build long-term value through consistency, speed, and commitment.
        </p>

        <h3 className="text-3xl font-semibold mb-10">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => {
            const isExpanded = expandedIndexes.includes(index);
            const shortBio = member.bio.slice(0, 200);
            return (
              <div
                key={index}
                className="bg-white text-[#0f0e47] rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center transition-transform hover:scale-105 duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-[#0f0e47]">
                  {member.name === "Devendar Sahu" ? (
                    <img
                      src={devender}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <User className="text-white w-12 h-12" />
                  )}
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-center mb-2">
                  {isExpanded ? member.bio : `${shortBio}...`}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-sm text-blue-600 hover:underline focus:outline-none"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes bubble1 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes bubble2 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes bubble3 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }

        .animate-bubble1 {
          animation: bubble1 6s ease-in-out infinite;
        }

        .animate-bubble2 {
          animation: bubble2 8s ease-in-out infinite;
        }

        .animate-bubble3 {
          animation: bubble3 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
