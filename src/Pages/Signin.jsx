import logo from "../assets/inloo_logo.svg";
import google from "../assets/google_symbol.svg.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      email: formData.get("username/email"),
      password: formData.get("password"),
    };

    console.log(credentials);

    e.target.reset();
  }

  return (
    <section className="w-screen h-screen flex items-center">
      <section className="w-[95%] h-[550px] md:w-[550px] mx-auto rounded-lg mt-8 border border-[#737373] bg-white flex items-center justify-center shadow-xl">
        <article className="mx-auto w-[70%] mt-6 flex flex-col items-center mb-8">
          {/* logo && text */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <h1 className="mt-4 font-archivo font-semibold text-3xl text-center">
              Sign in
            </h1>
          </div>

          {/* Google Oauth */}
          <div className="mt-4 cursor-pointer flex justify-center items-center gap-2 py-1 border border-[#8B8B8B] w-full text-lg font-raleway font-semibold">
            <img src={google} alt="google_icon" />
            <span>Log in with google</span>
          </div>

          {/* border */}
          <div className=" my-5 w-full flex items-center justify-between font-raleway font-medium">
            <div className="h-px w-[45%] bg-black"></div>
            <p>or</p>
            <div className="h-px w-[45%] bg-black"></div>
          </div>

          {/* form */}
          <form
            className="w-full flex flex-col gap-4 font-archivo"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <div className="text-sm  flex justify-between">
                <label htmlFor="username/email" className="text-sm">
                  Username/email<sup className="sup">*</sup>
                </label>
                <span className="text-[#FF1A1A] text-[12px]">
                  email/username incorrect
                </span>
              </div>

              <input
                type="text"
                id="username/email"
                name="username/email"
                className={`input text-black placeholder:text-black ${
                  emailError ? "border-red-500" : ""
                }`}
                placeholder="jailer@mail.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm  flex justify-between">
                <label htmlFor="password">
                  Password<sup className="sup">*</sup>
                </label>
                <span className="text-[#FF1A1A] text-[12px]">
                  password incorrect
                </span>
              </div>

              <input
                type="password"
                id="password"
                name="password"
                className={`input text-black placeholder:text-black ${
                  passwordError ? "border-red-500" : ""
                }`}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="mt-1 py-2 bg-[#004BDC] rounded-lg text-white font-archivo"
            >
              Sign in
            </button>
          </form>

          {/* links */}
          <div className="mt-4 flex flex-col gap-2 items-center  mx-auto font-raleway font-semibold">
            <Link to="/auth/password/new" className="text-[#004BDC]">
              Reset Password
            </Link>
            <p>
              Don&apos;t have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-[#004BDC] ml-[2px] md:ml-1"
              >
                Sign up.
              </Link>
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
