import { React, useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const login = (username, password) => {
    //setIsLoading(true);
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
    <div className="wrap">
      <div className="login">
        <h1>Login</h1>
        <form action="/" method="post" onSubmit={handleSubmit}>
          <div className="Container">
            <label htmlFor="uname">Username: </label>
            <input
              type="text"
              id="uname"
              name="username"
              value={formData.username}
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />

            <label htmlFor="pswd">Passowrd </label>
            <input
              type="password"
              id="pswd"
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />

            <button>{!isLoading ? "Login" : "Loading..."}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
