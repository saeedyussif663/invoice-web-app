import logo from "../../assets/inloo_logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-[#000D3C] h-[10rem] flex justify-between items-center px-3 md:px-8">
      <div className="">
        <img src={logo} alt="inloo" className="w-[50px]" />
      </div>

      <div className="socials">
        <ul className="flex gap-5 flex-wrap md:w-auto md:gap-6 list-disc text-sm">
          <li className="list-none">
            <a href="#">LinkedIn</a>
          </li>
          <a href="#">
            <li>X (Twitter)</li>
          </a>
          <a href="#">
            <li>Instagram</li>
          </a>
          <a href="/">
            <li>Facebook</li>
          </a>
        </ul>
      </div>
    </footer>
  );
}
