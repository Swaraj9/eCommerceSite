import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/userSlice";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import hero from "../assets/hero.jpg";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

    const status = res.status;

    res = await res.json();

    if (status != 200) {
      setErrorMsg(res.message);
    } else {
      dispatch(addToken(res.token));
      navigate("/");
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      let res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const status = res.status;
      if (status == 200) {
        navigate("/");
      }
    };

    checkToken();
  }, []);

  return (
    <div className="flex items-center h-screen from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] dark:text-neutral-50 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800 bg-[length:200%_auto] animate-gradient dark:animate-none">
      <div className="flex justify-start items-center bg-white dark:bg-neutral-700 dark:shadow-none w-9/12 sm:w-7/12 md:w-8/12 lg:w-7/12 m-auto rounded-3xl shadow-lg shadow-slate-500">
        <div className="w-2/3 p-10">
          <div className=" ">
            <h1 className=" font-extrabold text-3xl text-[#262626] dark:text-neutral-50">
              Sign in
            </h1>
            <div className="my-4">
              <div className="">
                <input
                  type="text"
                  id="uname"
                  value={username}
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="p-3 text-sm w-full rounded-lg outline-none dark:bg-neutral-800"
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
                  className="p-3 text-sm rounded-lg w-full my-3.5 outline-none dark:bg-neutral-800"
                />
              </div>
              <div>
                <a
                  href="#"
                  className="flex text-neutral-800 dark:text-neutral-50 text-sm font-thin justify-center"
                >
                  Forgot Password?
                </a>
              </div>
              <br />
              {errorMsg && <div className="text-red-400">{errorMsg}</div>}
              <br />
              <div className="flex w-full justify-center">
                <button
                  onClick={() => loginUser()}
                  className="text-lg text-neutral-300 border-none bg-neutral-800 dark:border-2 border-neutral-800 p-1 pl-3 pr-3 rounded mt-5 duration-300"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="h-full rounded-tr-3xl rounded-br-3xl" src={hero}/>
      </div>
    </div>
  );
};
