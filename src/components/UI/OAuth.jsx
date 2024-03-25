import google from "../../assets/google_symbol.svg.png";

export default function OAuth({ Type }) {
  return (
    <div className="mt-4 cursor-pointer flex justify-center items-center gap-2 py-1 border border-[#8B8B8B] w-full text-lg font-raleway font-semibold">
      <img src={google} alt="google_icon" />
      <span>{Type} with google</span>
    </div>
  );
}
