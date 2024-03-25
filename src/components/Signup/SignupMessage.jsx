import FormWrapper from "../UI/FormWrapper";
import LogoText from "../UI/LogoText";

export default function SignupMessage({ email }) {
  return (
    <FormWrapper>
      <LogoText Text="Verify email" />

      <div className="font-archivo text-center flex flex-col gap-2 mt-4">
        <p>
          We&apos;ve sent an email to{" "}
          <span className="font-semibold">{email}</span>. <br />
          Click on the link to verify your email.
        </p>
        <p>
          In case you don&apos;t receive any email, kinldy check your spam or
          requeset for a new link.{" "}
        </p>
      </div>

      <button className="mt-4 font-semibold font-raleway text-[#004BDC]">
        Resend Verification Email
      </button>
    </FormWrapper>
  );
}
