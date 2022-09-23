import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

const Adminreg = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");


  const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");

  const adminreg = async () => {
    setLoading(true);
    const url = BaseUrl() + "admin/registration";
    const data = {
        email: email,

        fullname: fullname,
        number: number,
        password: password,
    };

    try {
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.data.accessToken);
      console.log("res", res);
      setLoading(false);
      navigate("/");
    //   toast.success("Welcome");
    } catch (err) {
      console.log("err", err);
    //   toast.error("Please try again");
      setLoading(false);
    }
  };

  return (
    <>
      <section class="flex justify-center shadow-2xl items-center h-screen bg-[#e0e7e8]">
        <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div class="mb-4">
            {/* <p class="text-gray-600">Register</p> */}
            <h2 class="text-xl font-bold">Admin Registration</h2>
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Fullname"
            />
          </div>
          <div>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="number"
              placeholder="Contact No."
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              onClick={adminreg}
              class=" flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              {/* {loading ? (
                <Oval
                  ariaLabel="loading-indicator"
                  height={30}
                  width={30}np
                  strokeWidth={5}
                  color="blue"
                  secondaryColor="white"
                />
              ) : ( */}
                Register
              
            </button>
          </div>
          <div class="flex items-center justify-between">
            {/* <div class="flex flex-row items-center">
              <input
                type="checkbox"
                class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                for="comments"
                class="ml-2 text-sm font-normal text-gray-600"
              >
                Remember me
              </label>
            </div> */}
            <div>
              <a
                onClick={() => {
                  navigate("/");
                }}
                class="text-sm text-blue-600 hover:underline align-center"
                href="#"
              >
                Already have an account? Sign in
              </a>
            </div>
            {/* <div>
              <a
                onClick={() => {
                  navigate("/adminregistration");
                }}
                class="text-sm text-blue-600 hover:underline"
                href="#"
              >
                
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Adminreg;
