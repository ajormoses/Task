import React, { useState, useEffect } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import Line from "../images/Line.svg";
import star from "../images/star.svg";
import hightlight from "../images/Highlight.svg";
import smallCircle from "../images/smallCircle.svg";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

const ArticleTwo = () => {
  const [modal, setModal] = useState(false);

  const [fields, errors, form] = useFormInputValidation(
    {
      customer_name: "",
      email_address: "",
      phone_number: "",
      company: "",
      message: "",
      // country: "",
    },
    {
      // customer_name: "required",
      customer_name: "required|username_available",
      email_address: "required|email",
      phone_number: "required|numeric|digits_between:10,12",
      company: "required",
      message: "required",
      // country: "required",
    }
  );

  useEffect(() => {
    form.registerAsync(
      "username_available",
      function (username, attribute, req, passes) {
        setTimeout(() => {
          if (username === "foo")
            passes(false, "Username has already been taken.");
          // if username is not available
          else passes();
        }, 1000);
      }
    );
  }, []);

  form.useLang(Lang.en);

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      //  console.log("MAKE AN API CALL", fields, errors);
      setModal((prev) => !prev);
    }
  };

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
          className="form w-full py-6 px-4 lg:p-12 xl:p-16 mt-8 rounded-lg"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <h1 className="font-bold text-[20px] mb-3 text-white ">
            Book a Consultation with us
          </h1>
          <p>
            <input
              type="text"
              placeholder="Enter your full name"
              name="customer_name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.customer_name}
              // To override the attribute name
              data-attribute-name="Customer Name"
              data-async
            />

            <label className="error text-red-500">
              {errors.customer_name ? "The full name field is required" : ""}
            </label>
          </p>

          <p>
            <input
              type="email"
              name="email_address"
              placeholder="Enter your work email"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
            />

            <label className="error text-red-500">
              {errors.email_address ? errors.email_address : ""}
            </label>
          </p>

          <p>
            <input
              type="tel"
              name="phone_number"
              placeholder="Mobile number"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.phone_number}
            />

            <label className="error text-red-500">
              {errors.phone_number ? errors.phone_number : ""}
            </label>
          </p>

          <p>
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.company}
              // To override the attribute name
              data-attribute-name="Company"
              data-async
            />

            <label className="error text-red-500">
              {errors.company ? "The company name field is required" : ""}
            </label>
          </p>

          <Dropdown />

          <p>
            <textarea
              type="text"
              className="h-[100px] lg:h-[120px]"
              placeholder="Enter Message"
              name="message"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.message}
              // To override the attribute name
              data-attribute-name="Message"
              data-async
            />

            <label className="error text-red-500">
              {errors.message ? "The comment field is required" : ""}
            </label>
          </p>

          <button type="submit">Send Request</button>
        </form>
      </div>
      {modal && <Modal modal={modal} />}
    </>
  );
};

export default ArticleTwo;
