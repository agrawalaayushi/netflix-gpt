import React, { useState, useRef } from "react";
import Header from "./Header";
import validateForm from "../utils/validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email.current.value);
    console.log("password", password.current.value);
    const message = validateForm(email.current.value, password.current.value);

    setErrorMessage(message);

    //validate the form data
  };

  return (
    <div>
      <Header />
      <div className="absolute h-screen bg-gradient-to-b	bg-black">
        <img
          alt="login-bg"
          className="opacity-4 h-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>

      <form className="absolute max-w-md p-4 mx-auto my-28 left-0 right-0 bg-opacity-80 rounded bg-black text-white">
        <div className="my-2 mx-6">
          <h1 className="font-bold p-3  text-3xl rounded">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="w-full p-3 text-white bg-slate-500 my-4 rounded"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full p-3 text-white bg-slate-500 my-4 rounded"
            type="text"
            placeholder="Email or mobile number"
          />
          <input
            ref={password}
            className="w-full p-3   text-white bg-slate-500 my-4 rounded"
            type="password"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="text-red-600 font-12">{errorMessage}</p>
          )}

          <button
            className="w-full p-3  text-white my-4 rounded bg-red-800"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p>
            <span className="text-gray-300">
              {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
            </span>
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              {isSignIn ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
