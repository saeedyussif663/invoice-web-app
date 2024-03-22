import { IoIosArrowRoundBack } from "react-icons/io";
import FormWrapper from "../components/FormWrapper";
import LogoText from "../components/LogoText";
import { Form } from "react-router-dom";

export default function ResetPassword() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log(email);

    e.target.reset();
  }

  return (
    <FormWrapper>
      <LogoText Text="Reset Password" />

      <Form className="mt-8 w-full font-archivo" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="text-sm  flex justify-between">
              <label htmlFor="email" className="text-sm">
                Email<sup className="sup">*</sup>
              </label>
              <span className="text-[#FF1A1A] text-[12px]">
                email incorrect
              </span>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              required
              className={`input text-black placeholder:text-black focus:border-[#0039A8]`}
              placeholder="jailer@mail.com"
            />
          </div>

          <button
            type="submit"
            className="mt-1 py-2 bg-[#004BDC] rounded-lg text-white font-archivo"
          >
            Reset Password
          </button>
        </div>
      </Form>

      <div
        className="mt-6 flex font-raleway items-center gap-1 font-semibold border border-[#ABABAB] px-2 rounded-md cursor-pointer"
        onClick={() => history.back()}
      >
        <span className="inline">
          <IoIosArrowRoundBack size={24} />
        </span>
        <button>Cancel</button>
      </div>
    </FormWrapper>
  );
}
