import FormWrapper from "./FormWrapper";
import LogoText from "./LogoText";

export default function ResetPasswordMessage() {
  return (
    <FormWrapper>
      <LogoText Text="Reset Password" />

      <div className="mt-8 px-2 font-archivo text-[#5C5C5C]">
        <p className="text-center">
          We&apos;ve sent an email reset link to{" "}
          <span className="font-semibold text-[#151515]">jailer@mail.com</span>.
          <br /> Click on the link to reset your password.
        </p>

        <p className="text-center">
          In case you don&apos;t receive any email, kinldy check your spam or
          requeset for a new link.
        </p>
      </div>
    </FormWrapper>
  );
}
