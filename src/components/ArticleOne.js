import React, { useState, useEffect } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import smallCircle from "../images/smallCircle.svg";
import mediumCircle from "../images/mediumCircle.svg";
import sideBigCircle from "../images/sideBigCircle.svg";
import Profile from "../images/profile.svg";
import mail from "../images/mail.svg";
import curveArrow from "../images/curve-arrow.svg";
import star from "../images/star.svg";

const ArticleOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [fields, errors, form] = useFormInputValidation(
    {
      customer_name: "",
      email_address: "",
    },
    {
      customer_name: "required|username_available",
      email_address: "required|email",
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
      console.log("MAKE AN API CALL", fields, errors);
    }
  };

  return (
    <div className=" pt-24 md:pt-[6.5rem] text-center">
      <div className="relative  pb-10 md:pt-20">
        <img
          className="absolute top-0 right-4 md:right-[11rem] lg:right-[13rem] x:right-[15rem] w-5 h-5 md:w-[50px] lg:w-[80px] md:h-[50px] lg:h-[80px] "
          src={smallCircle}
        />
        <img
          className="absolute top-28  md:top-14 lg:top-24 left-2 lg:left-4 w-10 h-10 md:w-[100px] lg:w-[150px] md:h-[100px] lg:h-[150px]"
          src={mediumCircle}
        />
        <img
          className="absolute top-[22rem] md:top-[10rem] lg:top-[12rem] right-0 w-12 h-12 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          src={sideBigCircle}
        />
        <img
          className="absolute hidden md:block md:top-[20rem] xl:top-[21rem] x:top-[23rem] md:right-[8rem] lg:right-[13rem] xl:right-[24%] x:right-[27%]"
          src={curveArrow}
        />
        <img
          className="absolute top-0 md:top-[4rem] lg:top-[4.8rem] left-[30%] md:left-[25%] lg:left-[31%] w-[20px] md:w-[25px] h-[20px] md:h-[25px]"
          src={star}
        />

        <img
          className="absolute top-[13%] right-[5%] w-[20px] h-[20px] md:w-[25px] md:h-[25px] md:top-[23%] md:right-[7%] lg:top-[25%]  lg:right-[15%]"
          src={star}
        />

        <img
          className="absolute top-[50%] md:top-[100%] left-[0] md:left-[15%] w-[30px] md:w-[35px] h-[30px] md:h-[35px]"
          src={star}
        />
        <img
          className="absolute bottom-[0] md:bottom-[9rem] lg:bottom-0 right-[30px] md:right-[80px] w-[30px] md:w-[35px] h-[30px] md:h-[35px]"
          src={star}
        />

        <div className="container relative z-10">
          <h1 className="text-white font-extrabold text-[40px] md:text-[50px] xl:text-[55px] x:text-[62px] md:px-[3rem] lg:px-[10rem] lg:pt-[2rem] xl:px-[15rem] leading-[3.5rem] x:leading-[4.5rem]">
            Turn your best customers into
            <span className="text-[#BA2AD1]"> Loyal fans</span>
          </h1>
          <p className="leading-[25px] text-[#FCFCFC] py-4 font-normal text-[15px] xl:text-[17px] md:px-[4rem] lg:px-[10rem] xl:px-[18rem] x:px-[20rem]">
            Loyalbaze, empowers businesses to offer digital, mobile-first
            loyalty programs to their customers. With our AI Powered platform,
            you can easily create and manage custom loyalty and rewards
            programs, track customer engagement, and gain valuable insights to
            improve your business. Sign up now to get early access.
          </p>
          <form
            className="mt-5 md:px-[11rem] lg:px-[18rem] xl:px-[25rem] x:px-[28rem]"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <div>
              <div
                className="flex items-center rounded-md py-[14px] px-[12px]"
                style={{ border: "1px solid white" }}
              >
                <img src={Profile} alt="Profile" />
                <input
                  className="ml-4 w-full text-white"
                  type="text"
                  placeholder="Tell us your name"
                  name="customer_name"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.customer_name}
                  // To override the attribute name
                  data-attribute-name="Customer Name"
                  data-async
                />
              </div>

              <label className="error text-red-500 ">
                {errors.customer_name ? "The full name field is required" : ""}
              </label>
            </div>

            <div className="my-5">
              <div
                className="flex items-center border border-white rounded-md py-[14px] px-[12px] "
                style={{ border: "1px solid white" }}
              >
                <img src={mail} alt="Profile" />
                <input
                  className="ml-4 w-full text-white"
                  type="email"
                  name="email_address"
                  placeholder="Enter your email address"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.email_address}
                />
              </div>
              <label className="error text-red-500">
                {errors.email_address ? errors.email_address : ""}
              </label>
            </div>

            <button className="formBtn text-white">Get early access</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleOne;
