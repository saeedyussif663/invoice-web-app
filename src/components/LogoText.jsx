import { Link } from "react-router-dom";
import logo from "../assets/inloo_logo.svg";

export default function LogoText({ Text }) {
  return (
    <div className="flex flex-col items-center">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <h1 className="mt-4 font-archivo font-semibold text-3xl text-center">
        {Text}
      </h1>
    </div>
  );
}
