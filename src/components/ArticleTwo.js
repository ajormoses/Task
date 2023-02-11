import React, { useState } from "react";
import Line from "../images/Line.svg";
import star from "../images/star.svg";
import hightlight from "../images/Highlight.svg";
import smallCircle from "../images/smallCircle.svg";
import Modal from "./Modal";

const ArticleTwo = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="py-10 md:mt-20 md:pt-28 md:pb-16 container md:grid md:grid-cols-2 md:place-items-center md:gap-8  md:relative">
        <img
          className="hidden md:flex absolute w-5 h-5 top-[25%] left-[25%]"
          src={star}
        />
        <img
          className="hidden md:flex absolute w-8 h-8 top-[73%] left-[40%]"
          src={star}
        />
        <img
          className="hidden md:flex absolute w-8 h-8 right-0 bottom-[1.2rem]"
          src={star}
        />
        <img
          className="hidden md:flex absolute w-7 h-7 left-[40%] top-[17%]"
          src={hightlight}
        />

        <img
          className="hidden md:flex absolute w-7 h-7 right-[5%] top-[10%]"
          src={hightlight}
        />

        <img
          className="hidden md:flex absolute top-[16%] left-[5%] w-[3.5rem] h-[3.5rem] "
          src={smallCircle}
        />
        <div className="relative py-10 text-center md:text-left">
          <img className="absolute w-5 h-5 left-[50% md:hidden" src={star} />
          <img
            className="absolute w-8 h-8 right-0 bottom-0 md:hidden"
            src={star}
          />
          <img
            className="absolute w-7 h-7 left-0 top-0 md:hidden"
            src={hightlight}
          />
          {/* <img className="absolute top-0 right-4 md:hidden" src={smallCircle} /> */}
          <div>
            <div className="md:inline-flex md:flex-col md:text-left">
              <h1 className="text-white font-[900] text-[40px]">
                Priority Access
              </h1>
              <img className="mx-auto" src={Line} alt="Line" />
            </div>
            <p className="text-white leading-[25px] xl:pr-16 x:pr-48">
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form py-6 px-4 lg:p-10 mt-8 rounded-lg"
        >
          <h1 className="font-bold text-[20px] mb-3 text-white ">
            Book a Consultation with us
          </h1>
          <input type="text" placeholder="Enter your full name" />
          <input type="text" placeholder="Enter your work email" />
          <input type="text" placeholder="Mobile number" />
          <input type="text" placeholder="Company Name" />
          <textarea className="h-[128px]" placeholder="Drop a message" />
          <button onClick={() => setModal((prev) => !prev)}>
            Send Request
          </button>
        </form>
      </div>
      {modal && <Modal modal={modal} />}
    </>
  );
};

export default ArticleTwo;
