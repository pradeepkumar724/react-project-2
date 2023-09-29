import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Button = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div>
          <button className="border border-black py-1.5 px-4 bg-black text-white font-semibold rounded flex items-center gap-2">
            <span>
              <MdMessage />
            </span>
            VIA SUPPORT CHAT
          </button>
        </div>
        <div>
          <button className="border border-black py-1.5 px-4 bg-black text-white font-semibold rounded flex items-center gap-2">
            <span>
              <MdCall />
            </span>
            VIA SUPPORT CHAT
          </button>
        </div>
      </div>
      <div className="flex align-center">
        <button className="flex align-center justify-center border border-black py-1.5 px-8 mt-4 font-semibold rounded flex items-center gap-2 w-8/12">
          <span>
            <MdCall />
          </span>
          VIA SUPPORT CHAT
        </button>
      </div>
    </div>
  );
};

export default Button;
