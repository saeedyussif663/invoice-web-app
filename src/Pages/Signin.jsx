import { Form, Link } from "react-router-dom";
import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import LogoText from "../components/LogoText";
import OAuth from "../components/OAuth";
import Border from "../components/Border";

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
    <FormWrapper>
      {/* logo && text */}
      <LogoText Text="Sign in" />

      {/* Google Oauth */}
      <OAuth Type="Sign in" />

      {/* border */}
      <Border />

      {/* form */}
      <Form
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
            required
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
            required
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
      </Form>

      {/* links */}
      <div className="mt-4 flex flex-col gap-2 items-center  mx-auto font-raleway font-semibold">
        <Link to="/forgot_password" className="text-[#004BDC]">
          Reset Password
        </Link>
        <p>
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup" className="text-[#004BDC] ml-[2px] md:ml-1">
            Sign up.
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
}
