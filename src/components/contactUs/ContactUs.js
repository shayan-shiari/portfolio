import React, { useState, useRef } from "react";
import img from "../../assets/images/contact us.jpg";
import Shared from "../shared/Shared";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9tlya9",
        "template_c41he48",
        form.current,
        "HLmYYA7xmGRU-jOTD"
      )
      .then(
        (result) => {
          toast.success('Successfully sent!')
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <>
      <Toaster position="top-center" />

      <div onClick={openHandler}>
        <Shared image={img} />
      </div>
      {isOpen && (
        <MainBook open={setIsOpen}>
          <HTMLFlipBook width={500} height={600}>
            <BookPage number="1"></BookPage>
            <BookPage number="2"></BookPage>
          </HTMLFlipBook>
          <div className="flex justify-between absolute max-[450px]:bottom-[120px] max-[450px]:right-[20px] w-[95%] h-[500px]">
            <div className="p-8 max-[450px]:p-4 w-[50%]">
              <h3 className="text-3xl mb-8 text-blue-400 max-[450px]:text-base">Contact Info</h3>
              <div className="flex flex-col gap-y-4 max-[450px]:text-[10px]">
                <div>
                  <div className="flex items-center text-gray-600">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>Email</p>
                  </div>
                  <p>suboneteam@gmail.com</p>
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
            <div className="w-[50%] p-8 max-[450px]:p-4">
              <h3 className="text-3xl text-blue-400 mb-8 max-[450px]:text-base">Contact Us</h3>
              <form
                form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-y-4 w-[70%] max-[450px]:w-[130%] mx-auto"
              >
                <input
                  className="shadow appearance-none border rounded-lg p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Name"
                />
                <input
                  className="shadow appearance-none border rounded-lg p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
                <input
                  className="shadow appearance-none border rounded-lg p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  type="text"
                  name="user_number"
                  placeholder="Number"
                />
                <textarea
                  className="shadow appearance-none border rounded-lg p-1 resize-none focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  placeholder="Message"
                  name="message"
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
