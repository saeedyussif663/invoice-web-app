import { useState } from "react";
import SignupDetails from "../components/Signup/SignupDetails";
import SignupPassword from "../components/Signup/SignupPassword";
import SignupMessage from "../components/Signup/SignupMessage";

export default function Signup() {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");

  if (page === 0) {
    return (
      <SignupDetails
        setPage={setPage}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        businessName={businessName}
        setBusinessName={setBusinessName}
      />
    );
  } else if (page === 1) {
    return (
      <SignupPassword
        name={name}
        email={email}
        businessName={businessName}
        setPage={setPage}
        password={password}
        setPassword={setPassword}
      />
    );
  } else if (page === 2) {
    return <SignupMessage email={email} />;
  }
}
