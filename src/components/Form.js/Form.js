import React from "react";
import Button from "../Button/Button";
import Contact from "../../assets/contact.jpg";

const Form = () => {
  return (
    <div className="mt-5 container mx-auto p-2 md:mt-14">
      <section className="grid grid-cols-12 ">
        <div className="col-span-12 mb-2 lg:mb-4">
          <h1 className="text-2xl font-bold mb-2 lg:text-5xl lg:mb-4">
            Contact Us
          </h1>
          <p className="text-sm md:text-md font-medium">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="my-8">
            <Button />
          </div>
          <form>
            <div className="relative mb-6">
              <span className="absolute left-2 top-[-10px]  bg-white border-l-2 border-r-2 px-2 border-black uppercase pointer-events-none text-red-600 font-medium text-xs">
                Name
              </span>
              <input
                type="text"
                className="w-full border-2 border-black rounded outline-none p-2 text-md lg:w-7/12"
              />
            </div>
            <div className="relative ">
              <span className="absolute left-2 mt-2 top-[-25px] bg-white border-black border-2 px-2 py-1 rounded uppercase text-red-600 font-medium text-xs">
                E-mail
              </span>
              <input
                required
                type="text"
                className=" w-full border-2 p-2 font-medium border-black rounded text-md lg:w-7/12"
              />
            </div>
            <div className="mt-6 relative  ">
              <span className="absolute left-2 mt-2 top-[-25px] bg-white border-black border-2 px-2 py-1 rounded uppercase text-blue-600 font-medium text-xs">
                Abount Quary
              </span>
              <textarea
                className="w-full border-2 px-2 py-3 border-black rounded text-md font-medium  lg:w-7/12"
                cols={50}
                rows={5}
              />
            </div>
          </form>
        </div>

        <div className="col-span-12 mt-[-20px]  lg:col-span-6 ">
          <img src={Contact} alt="contact" />
        </div>
      </section>
    </div>
  );
};

export default Form;
