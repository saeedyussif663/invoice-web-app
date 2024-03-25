import { toast } from "react-hot-toast";

export default async function createUser(credentials) {
  const res = await fetch(
    "https://invoicer-production-298f.up.railway.app/user/sign-up",
    {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  if (res.status === 201) {
    toast.success("account successfully created");
    return 201;
  } else if (res.status === 422) {
    toast.error(data.detail[0].msg);
    return data.detail[0].msg;
  } else if (res.status === 400) {
    toast.error(data.detail);
    return data.detail;
  }
}
