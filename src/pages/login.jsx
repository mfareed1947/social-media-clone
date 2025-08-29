// import "../style/login.css";
import { useState } from "react";
import style from "../style/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password) {
      setError((prev) => ({
        ...prev,
        password: true,
      }));
    }
    if (!email) {
      setError((prev) => ({
        ...prev,
        email: true,
      }));
    }
    console.log({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4 h-screen bg-gray-100">
        <div>
          <h1 className={`text-6xl text-blue-600`}>facebook</h1>
          <h3>
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>
        <div>
          <form className="flex flex-col gap-y-3 bg-white px-16 py-8">
            <input
              className="p-2 w-56"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />
            <div className="h-5">
              {error.email && <p className="text-red-600">invalid email</p>}
            </div>
            <input
              className="p-2 w-56"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            />
            <div className="h-5">
              {error.password && (
                <p className="text-red-600">invalid Password</p>
              )}
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className="text-center text-sm text-blue-400 underline">
              Forgotten password?
            </p>
            <button className="text-white bg-green-500 cursor-pointer px-4 py-2">
              Create new account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
