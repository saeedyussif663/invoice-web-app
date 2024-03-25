import toast from "react-hot-toast";

export default async function addWaitlist(credentials, dropModal) {
  const url = import.meta.env.VITE_BACKEND_BASE_URL;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (credentials.phone.length !== 10) {
    toast.error("should have exactly 10 digits");
    return;
  }

  const res = await fetch(`${url}/waitlist/join`, options);
  const data = await res.json();
  if (res.status === 201) {
    toast.success(data);
    dropModal(false);
  } else if (res.status === 400 || res.status === 429) {
    toast.error(data.detail);
  } else {
    toast.error(data.detail[0].msg);
  }
}
