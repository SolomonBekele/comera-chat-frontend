import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ChatIcon2 } from "../ui/icons/chatAppIcon";
import { useSignupUserMutation } from "../../store/Profile/userapi";

const SignupForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("Jhon Smith");
  const [phoneNumber, setPhoneNumber] = useState<string>("+971542443926");
  const [email, setEmail] = useState<string>("solubman28@gmail.com");
  const [password, setPassword] = useState<string>("Password123!");

  const [signupUser, { isLoading, isSuccess, isError, error, data }] =
    useSignupUserMutation();

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await signupUser({
      fullName,
      phoneNumber,
      email,
      password,
    }).unwrap();

    toast.success(res.message);  // SUCCESS TOAST
    navigate("/signin");
  } catch (err: any) {
    console.log(err?.data); 
    const errMsg = err?.data?.message || "Signup failed.";
    toast.error(errMsg);  // ERROR TOAST
  }
};


  /** 👉 Using useEffect so toast triggers AFTER the API resolves */
//   useEffect(() => {
//     if (isSuccess && data) {
//       toast.success(data.message, { id: "signup" });
//       navigate("/signin");
//     }
//   }, [isSuccess, data, navigate]);

//   useEffect(() => {
//     if (isError) {
//       const errMsg =
//         (error as any)?.data?.message || "Signup failed. Try again.";
//       toast.error(errMsg, { id: "signup" });
//     }
//   }, [isError, error]);

  const handleLoginClick = () => {
    navigate("/signin");
  };

  return (
    <div className="form-container bg-white p-8 rounded-2xl w-[28rem] flex flex-col items-center">
      <div className="title-container mb-8 text-center">
        <div className="message-icon h-14 w-14 bg-teal-500 flex justify-center items-center rounded-full m-auto mb-4">
          <ChatIcon2 />
        </div>
        <p className="text-[oklch(.511_.096_186.391)] text-xl font-semibold">ChatApp Web</p>
        <h1 className="text-gray-700 text-lg">Create Account</h1>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col w-full space-y-4 text-sm">
        
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-3 focus:ring-[oklch(.511_.096_186.391)]"
        />

        <button
          type="submit"
          className="bg-[oklch(.704_.14_182.503)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        <div className="m-auto">
          <p>
            Already have an account?
            <span
              className="text-teal-800 cursor-pointer ms-1"
              onClick={handleLoginClick}
            >
              Signin
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
