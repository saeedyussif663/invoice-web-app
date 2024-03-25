import { Link } from "react-router-dom";
import Border from "../UI/Border";
import FormWrapper from "../UI/FormWrapper";
import LogoText from "../UI/LogoText";
import OAuth from "../UI/OAuth";
import { toast } from "react-hot-toast";

export default function SignupDetails({
  setPage,
  email,
  setEmail,
  name,
  setName,
  businessName,
  setBusinessName,
}) {
  function handleSubmit() {
    // check if email & name is not empty
    if (email.length !== 0 && name.length !== 0) {
      setPage(1);
    } else {
      toast.error("email or name should not be empty");
    }
  }

  return (
    <FormWrapper>
      <LogoText Text="Sign up" />

      <OAuth Type="Sign up" />

      <Border />

      <form className="w-full flex flex-col gap-3 font-archivo">
        <div className="flex gap-1 flex-col">
          <label className="label" htmlFor="email">
            Email<sup className="sup">*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jailer@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input text-black"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label className="label" htmlFor="name">
            Name<sup className="sup">*</sup>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input text-black"
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label className="label" htmlFor="business_name">
            Business name
          </label>

          <input
            type="text"
            id="business_name"
            name="business_name"
            placeholder="Enter Business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="input text-black"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="mt-1 py-2 bg-[#004BDC] rounded-lg text-white font-archivo"
        >
          Continue
        </button>
      </form>

      <p className="mt-4 font-raleway font-semibold text-lg">
        Already have an account?{" "}
        <Link to="/auth/signin" className="text-[#004BDC]">
          Sign in
        </Link>
        .
      </p>
    </FormWrapper>
  );
}
