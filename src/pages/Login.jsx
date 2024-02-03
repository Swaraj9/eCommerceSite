import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/userSlice";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = useSelector((state) => state.user.token);

  const loginUser = async () => {
    let res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 60,
      }),
    });
    res = await res.json();
    if (res.message === "Invalid credentials") {
    }
    dispatch(addToken(res.token));

    navigate("/");
  };

  return (
    <div className="flex items-center h-screen bg-[linear-gradient(to_right,#c9def4,#f5ccd4,#b8a4c9,#f5ccd4,#c9def4)] dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800  bg-[length:200%_auto] animate-gradient">
      <div className="flex justify-start items-center bg-white w-9/12 sm:w-7/12 md:w-8/12 lg:w-7/12 m-auto p-10 rounded-3xl py-24 shadow-lg shadow-slate-500 mix-blend-luminosity">
        <div className="w-2/3 ">
          <div className=" ">
            <h1 className=" font-extrabold text-3xl text-[#262626]">Sign in</h1>
            <div className="my-4 w-2/3">
              <div className="">
                <input
                  type="text"
                  id="uname"
                  value={username}
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="p-3 text-xs w-full rounded-lg font-[50] outline-none "
                />
              </div>

              <div className="flex">
                <input
                  type="password"
                  id="pswd"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-3 text-sm rounded-lg w-full my-3.5 outline-none"
                />
              </div>
              <div>
                <a
                  href="#"
                  className="flex text-slate-800 text-sm font-thin justify-center"
                >
                  Forgot Password?
                </a>
              </div>
              <br />
              <br />
              <div>
                <button
                  onClick={() => loginUser()}
                  className="bg-slate-200 w-2/5 p-0.5 rounded-lg py-1"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
