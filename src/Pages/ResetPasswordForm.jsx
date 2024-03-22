import { Form } from "react-router-dom";
import FormWrapper from "../components/FormWrapper";
import LogoText from "../components/LogoText";
import passwordMatch from "../lib/passwordMatch";

export default function ResetPasswordForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password1 = formData.get("new_password");
    const password2 = formData.get("confirm_password");
    console.log(password2, password1);
    e.target.reset();
  }

  return (
    <FormWrapper>
      <LogoText Text="Reset Password" />

      <Form className="w-full mt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="text-sm  flex justify-between">
            <label htmlFor="new_password" className="text-sm">
              New Password<sup className="sup">*</sup>
            </label>
          </div>

          <input
            type="password"
            id="new_password"
            name="new_password"
            required
            className={`input text-black `}
            placeholder="Enter Password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm  flex justify-between">
            <label htmlFor="confirm_password">
              Confirm Password<sup className="sup">*</sup>
            </label>
          </div>

          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            required
            className={`input text-black
            `}
            placeholder="Confirm Password"
          />
        </div>

        {/* password validation */}
        <div className="my-2 font-archivo text-sm ">
          {passwordMatch.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 md:gap-2 items-baseline md:items-center text-[#606060]"
            >
              <span className="border inline-block  border-black w-[10px] h-[10px] rounded-full bg-[#E2ECFF]"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 py-2 w-full bg-[#004BDC] rounded-lg text-white font-archivo"
        >
          Sign in
        </button>
      </Form>
    </FormWrapper>
  );
}
