import logo from "../assets/inloo_logo.svg";
import dashboard from "../assets/Dashboard.png";
import create_invoice from "../assets/create_invoice.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import WaitlistModal from "../components/WaitlistModal";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <section>
      {isModalShowing && (
        <WaitlistModal setIsModalShowing={setIsModalShowing} />
      )}
      <article className="md:h-screen w-screen flex flex-col items-center pt-4">
        {/* inloo logo */}
        <div>
          <img src={logo} alt="inloo" className="w-32 h-16" />
        </div>

        {/* details */}
        <div className="bg-[#F5F8FF] font-raleway text-center mt-4 md:mt-8 px-1 md:px-10 pt-4 pb-8 w-[90%] md:max-w-[48rem] rounded-md flex flex-col items-center">
          <h1 className="font-bold text-[28px] md:text-6xl">
            Create <span className="text-[#2B73FF]">Digital Invoices </span>
            <br />
            in minutes
          </h1>
          <p className="font-medium text-center text-lg mt-4 px-2 md:px-16">
            Effortlessly manage your business finances with our intuitive
            <span className="inline mx-1 md:block">
              platform. Say goodbye to paperwork and hello to
            </span>
            streamlined invoicing!
          </p>

          <button
            className="mt-6 outline-none bg-gradient-to-r rounded-md text-white w-48 from-[#004BDC] to-[#003DB2] py-3"
            onClick={() => setIsModalShowing(true)}
          >
            Join the Witlist <FaArrowRightLong className="inline ml-2" />
          </button>
        </div>
      </article>

      <section className="bg-[#F5F5F5] py-8 md:px-40 mt-16 mb-4 md:mt-2 font-semibold text-[#797979]">
        <div className="flex flex-col gap-5 flex-wrap items-center justify-around ">
          <div className="flex justify-between w-full md:w-4/5 px-2 md:px-4">
            <p>Create invoices</p>
            <p>Manage invoices</p>
            <p>Track invoices</p>
          </div>
          <div className="flex justify-between w-full md:w-4/5 px-2 md:px-4">
            <p>Generate receipts</p>
            <p>Manage clients</p>
            <p>Print Invoices</p>
          </div>
          <div className="flex justify-around w-full md:w-4/5 px-2 md:px-4">
            <p>Send Invoices</p>
            <p>Download Invoices</p>
          </div>
        </div>
      </section>

      <section className="bg-[#002A7F] mt-10 pb-16">
        <div className="pt-10 flex flex-col items-center">
          <h2 className="text-center font-bold font-raleway text-white text-4xl">
            Create Simple <br />
            Invoices
          </h2>
          <img
            src={create_invoice}
            className="mt-6 h-[30rem] w-[96%] md:w-auto"
          />
        </div>
        <div className="pt-10 flex flex-col items-center">
          <h2 className="text-center font-bold font-raleway text-white text-4xl">
            Track your <br /> financial growth
          </h2>
          <img
            src={dashboard}
            className="mt-6 h-[25rem] md:h-[30rem] w-[94%] md:w-auto"
          />
        </div>
      </section>

      <section
        id="waitlist"
        className="h-[400px] font-archivo bg-white flex flex-col justify-center items-center"
      >
        <h3 className="text-[#000832] opacity-80 text-center text-6xl font-medium">
          No wait! Join
          <br /> the waitlist
        </h3>
        <div className="mt-8 flex">
          <button
            className="cursor-pointer mt-2 rounded-md py-2 px-4 text-white bg-gradient-to-r from-[#004BDC] to-[#003DB2]"
            onClick={() => setIsModalShowing(true)}
          >
            Join now
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
}
