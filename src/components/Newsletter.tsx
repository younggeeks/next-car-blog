import React from "react";

const Newsletter = ({ theme = "dark" }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm mb-4">Newsletter</h4>
      <input
        type="text"
        placeholder="Your name"
        className={`h-10 ${
          theme === "dark" ? "bg-gray-800" : "bg-white border"
        } text-xs px-3 rounded-sm mb-4 `}
      />
      <input
        type="text"
        placeholder="Email address"
        className={`h-10 ${
          theme === "dark" ? "bg-gray-800 " : "bg-white border"
        } text-xs px-3 rounded-sm mb-4`}
      />
      <button className="bg-blue-900 text-white text-md p-3 w-full rounded-md text-xs font-semibold mt-5">
        Subscribe to newsletter
      </button>
    </div>
  );
};

export default Newsletter;
