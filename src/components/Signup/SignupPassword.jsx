import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useState, useEffect } from "react";
import createUser from "../../lib/createUser";
import FormWrapper from "../UI/FormWrapper";
import LogoText from "../UI/LogoText";
import { Form } from "react-router-dom";
import checkPasswordValidity from "../../lib/checkPasswordValidity";

export default function SignupPassword({
  setPage,
  password,
  setPassword,
  name,
  email,
  businessName,
}) {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const {
    includesSpecialCharcter,
    includesDigit,
    includesLowercase,
    includesUppercase,
    isMoreThanEightChars,
  } = checkPasswordValidity(password);

  useEffect(() => {
    checkPasswordValidity();
  }, [password]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const userCredentials = {
      username: name,
      email,
      password,
      business_name: businessName,
      role: "user",
    };

    if (
      includesDigit &&
      includesLowercase &&
      includesSpecialCharcter &&
      includesUppercase &&
      isMoreThanEightChars
    ) {
      const res = await createUser(userCredentials);
      if (res === 201) {
        setPage(2);
      }
    }

    setIsLoading(false);
  }

  return (
    <FormWrapper>
      <LogoText Text="Sign up" />

      <Form
        method="POST"
        className="w-full mt-4 mb-2 flex flex-col gap-1 font-archivo"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-xl">Set Password</h1>

        <div className="flex flex-col gap-1">
          <label className="label text-black" htmlFor="password">
            Password<sup className="sup">*</sup>
          </label>

          <div className="relative cursor-pointer">
            <span
              className="absolute right-3 top-2"
              onClick={() => setIsPasswordShowing((prev) => !prev)}
            >
              {isPasswordShowing ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            <input
              type={isPasswordShowing ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input text-black"
            />
          </div>
        </div>

        {/* password validation */}
        <div className="my-2 font-archivo text-sm ">
          <div className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]">
            <span
              className={`border inline-block   w-[12px] h-[12px] rounded-full ${
                isMoreThanEightChars
                  ? " border-green-500 bg-green-500"
                  : "border-red-500 bg-red-500"
              } `}
            ></span>
            <p>Password should be more than 8 characters</p>
          </div>

          <div className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]">
            <span
              className={`border inline-block   w-[12px] h-[12px] rounded-full ${
                includesUppercase
                  ? " border-green-500 bg-green-500"
                  : "border-red-500 bg-red-500"
              }`}
            ></span>
            <p>Password should include at least one Uppercase letter</p>
          </div>

          <div className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]">
            <span
              className={`border inline-block  w-[12px] h-[12px] rounded-full ${
                includesLowercase
                  ? " border-green-500 bg-green-500"
                  : "border-red-500 bg-red-500"
              }`}
            ></span>
            <p>Password should include at least one Lowercase letter</p>
          </div>

          <div className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]">
            <span
              className={`border inline-block  w-[12px] h-[12px] rounded-full ${
                includesDigit
                  ? " border-green-500 bg-green-500"
                  : "border-red-500 bg-red-500"
              }`}
            ></span>
            <p>Password should include at least one digit</p>
          </div>

          <div className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]">
            <span
              className={`border inline-block  w-[12px] h-[12px] rounded-full ${
                includesSpecialCharcter
                  ? " border-green-500 bg-green-500"
                  : "border-red-500 bg-red-500"
              }`}
            ></span>
            <p>Password should include at least one special characters</p>
          </div>
        </div>

        <button
          type="sumbit"
          className="mt-2 py-2 w-full bg-[#004BDC] rounded-lg text-white font-ralway"
        >
          {loading ? "create accounting..." : "Sign up"}
        </button>

        <p className="mt-2 text-[#373737] text-center font-raleway font-semibold">
          By clicking Sign up, you agree to our{" "}
          <span className="text-[#004BDC]">Terms & Conditions</span> and{" "}
          <span className="text-[#004BDC]">Privacy Policy</span>
        </p>
      </Form>

      <div
        className="mt-2 flex font-raleway items-center gap-1 font-semibold border border-[#ABABAB] px-2 rounded-md cursor-pointer"
        onClick={() => setPage(0)}
      >
        <span className="inline">
          <IoIosArrowRoundBack size={24} />
        </span>
        <button>Go back</button>
      </div>
    </FormWrapper>
  );
}
