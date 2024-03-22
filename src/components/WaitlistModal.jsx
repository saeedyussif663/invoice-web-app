import { useState } from "react";
import logo from "../assets/inloo_logo.svg";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";

export default function WaitlistModal({ setIsModalShowing }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("number"),
    };

    if (userDetails.phone.length !== 10) {
      toast.error("should have exactly 10 digits");
      return;
    }
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    const res = await fetch(
      "https://invoicer-production-298f.up.railway.app/waitlist/join",
      options
    );
    const data = await res.json();
    if (res.status === 201) {
      toast.success(data);
      setIsModalShowing(false);
    } else if (res.status === 400) {
      toast.error(data.detail);
    } else {
      toast.error(data.detail[0].msg);
    }
    setIsLoading(false);

    e.target.reset();
  }

  return (
    <article>
      {" "}
      <div
        className="w-full h-screen bg-black z-20 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 opacity-40 "
        onClick={() => setIsModalShowing(false)}
      ></div>
      <div className="bg-white fixed z-30 mx-auto px-10 left-[2%] md:left-[35%] top-[5rem] w-[95%] md:w-[420px] flex flex-col rounded-lg shadow">
        <div className="mt-6 flex flex-col items-center">
          <img src={logo} alt="inloo" className="w-[100px]" />
          <h2 className="font-semibold font-raleway text-2xl mt-2">
            Hop on Board!
          </h2>
        </div>

        <Form
          className="font-archivo my-5 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="labelStyles">
              Name<sup className="sup">*</sup>
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              placeholder="Enter your name"
              className="input"
            />
          </div>

          <div>
            <label htmlFor="email" className="labelStyles">
              Email<sup className="sup">*</sup>
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              placeholder="jailer@mail.com"
              className="input"
            />
          </div>

          <div>
            <label htmlFor="number" className="labelStyles">
              Phone Number<sup className="sup">*</sup>
            </label>
            <input
              type="number"
              id="number"
              required
              name="number"
              placeholder="0550327838"
              step="0.01"
              className="input"
            />
          </div>

          <div className="flex justify-center font-raleway">
            <button
              className="cursor-pointer mt-2 rounded-md py-2 px-4 text-white bg-gradient-to-r from-[#004BDC] to-[#003DB2]"
              type="submit"
            >
              {isLoading ? "Joining..." : "Join now"}
            </button>
          </div>
        </Form>
      </div>
    </article>
  );
}
