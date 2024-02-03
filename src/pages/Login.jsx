import { React, useState } from "react";
import { LoginAction } from "../redux/LoginAction";
import { connect } from "react-redux";

export const Login = (props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const login = (username, password) => {
    // setIsLoading(true);
    // let payload = { username: username, password: password };
    // props.loginAction(payload).then((res) => {
    //   if (res.success) {
    //     setIsLoading(false);
    //     props.history.push("dashboard/");
    //   }
    // });
    console.log("This is the problem");
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formed Submitted");
    formData.username.length &&
      formData.password.length &&
      login(formData.username, formData.password);
  };

  return (
    <div className="flex justify-start  items-center bg-white w-10/12 sm:w-7/12md:w-8/12 lg:w-3/4 m-auto p-10 rounded-3xl py-24">
      <div className="w-2/3 ">
        <div className=" ">
          <form action="/" method="post" onSubmit={handleSubmit}>
            <h1 className=" font-extrabold text-3xl text-[#262626]">Sign in</h1>
            <div className="my-4 w-2/3">
              <div className="">
                {" "}
                <input
                  type="text"
                  id="uname"
                  name="username"
                  value={formData.username}
                  placeholder="Enter Username"
                  onChange={handleChange}
                  required
                  className="p-3 text-xs w-full rounded-lg font-[50]"
                />
              </div>

              <div className="flex">
                <input
                  type="password"
                  id="pswd"
                  name="password"
                  value={formData.password}
                  placeholder="Enter Password"
                  onChange={handleChange}
                  required
                  className="p-3 text-sm rounded-lg w-full my-3.5"
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
                <button className="bg-[#5c1b8f] w-2/5 p-0.5 rounded-lg py-1">
                  {!isLoading ? "Login" : "Loading..."}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {
//     userDetails: state.login.userDetails,
//   };
// };

// const mapDispatchToProps = {
//   loginAction: LoginAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
