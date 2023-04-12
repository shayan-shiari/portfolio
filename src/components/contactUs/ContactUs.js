import React, { useState } from "react";
import img from "../../assets/images/contact us.jpg";
import Shared from "../shared/Shared";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div onClick={openHandler}>
        <Shared image={img} />
      </div>
      {isOpen && (
        <MainBook open={setIsOpen}>
          <HTMLFlipBook width={500} height={600}>
            <BookPage number="22"></BookPage>
            <BookPage number="33"></BookPage>
          </HTMLFlipBook>
          <div className="flex justify-between absolute w-[95%] h-[500px]">
            <div className="p-8 g-red-300 w-[50%]">
              <h3 className="text-3xl mb-8">Contact Info</h3>
              <div className="flex flex-col gap-y-4">
                <div>
                  <div className="flex items-center text-gray-600">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>Email</p>
                  </div>
                  <p>test@gmail.com</p>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <ion-icon name="call-outline"></ion-icon>
                    <p>Phone</p>
                  </div>
                  <p>09453563467</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] p-8">
              <h3 className="text-3xl mb-8">Contact Us</h3>
              <form className="flex flex-col gap-y-4 w-[70%] mx-auto">
                <input
                  className="rounded-lg p-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
                <input
                  className="rounded-lg p-1"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="rounded-lg p-1"
                  type="text"
                  placeholder="Number"
                />
                <textarea
                  className="rounded-lg p-1 resize-none"
                  placeholder="Message"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </MainBook>
      )}
    </>
  );
};

export default ContactUs;
