import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Button = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div>
          <button className="border border-black rounded bg-black py-1 px-2 lg:px-4 lg:py-2 lg:my-1 text-xs text-white font-semibold flex items-center gap-2">
            <span>
              <MdMessage />
            </span>
            VIA SUPPORT CHAT
          </button>
        </div>
        <div>
          <button className="border border-black rounded bg-black  py-1 px-2 mb-3 lg:px-4 lg:py-2 lg:my-1 text-xs text-white font-semibold flex items-center gap-2">
            <span>
              <MdCall />
            </span>
            VIA SUPPORT CHAT
          </button>
        </div>
      </div>
      <div className="flex align-center">
        <button className="border border-black rounded bg-white  py-1 px-2 lg:px-4 lg:py-3 lg:text-base lg:my-1 text-xs lg:w-6/12 text-black font-semibold flex items-center gap-2">
          <span>
            <MdEmail />
          </span>
          VIA EMAIL FORM
        </button>
      </div>
    </div>
  );
};

export default Button;
