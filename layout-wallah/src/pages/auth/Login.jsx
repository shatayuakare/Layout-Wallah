import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import axios from "axios";
import AuthSocialIcon from "../../components/AuthSocialIcon";
import { server } from "../../constants/Constants";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    axios.defaults.withCredentials = true;

    if (!loginData.email) return setError("Please enter email address");
    if (!loginData.password) return setError("Please enter password");

    setDisable(true);

    await axios
      .post(`${server}/auth/login`, loginData, { withCredentials: true })
      .then((res) => {
        if (!res.data.message) {
          alert(res.data);
          return;
        }
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);

        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.error(err));

    setDisable(false);
    setLoginData({ email: "", password: "" });
  };
  return (
    <div
      className="bg-background2 content-center md:min-h-[90vh] h-fit"
      id="login"
    >
      <div className="md:w-4/5 flex flex-col md:flex-row p-2  mx-auto h-full gap-6">
        <div className="sm:w-full md:w-3/5 content-center">
          <Carousel />
        </div>

        <div className="sm:w-full md:w-2/5 content-center">
          <div className="shadow-xl rounded-xl py-10 pt-5 px-8 bg-background grid gap-2 md:gap-3">
            <h5 className="text-[1.8rem] font-semibold md:text-[2rem]">
              Welcome Back :)
            </h5>

            <div className="text-sm">
              To keep connected with us please login with your personal
              information by email address and password 🔔
            </div>

            <form action="" onSubmit={loginHandler} className="grid gap-3">
              <div className="flex items-center gap-2  border-0 border-b-2">
                <div className="pt-2">
                  <i className="bx bx-envelope text-[1.8rem] text-slate-600"></i>
                </div>
                <div className="relative w-full">
                  <input
                    id="email"
                    type="email"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    value={loginData.email}
                    onChange={handleInputChange}
                  />

                  <label
                    htmlFor="email"
                    className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-2  border-0 border-b-2">
                <div className="pt-2">
                  {/* <i className="bx bx-envelope text-[1.8rem] text-slate-600"></i> */}
                  <i className="bx bx-lock-alt text-[1.8rem] text-slate-600"></i>
                </div>
                <div className="relative w-full">
                  <input
                    id="password"
                    type="password"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    value={loginData.password}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="flex justify-between font-semibold text-xs">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <button className=" btn btn-ghost btn-sm border-0  btn-link h-fit  text-accent">
                  Forgot Password?
                </button>
              </div>

              {error && (
                <div className="text-red-500 text-xs font-semibold">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <div className="flex justify-start gap-4">
                  <button
                    type="submit"
                    disabled={disable}
                    className="btn btn-ghost border-0 text-white shadow rounded-xl bg-primary disabled:bg-primary-light disabled:text-txt2"
                  >
                    Log In
                    {disable ? (
                      <i className="bx text-lg bx-loader bx-spin"></i>
                    ) : (
                      <span></span>
                    )}
                  </button>
                  <Link
                    to={"/register"}
                    className="btn btn-ghost border-0 text-primary shadow rounded-xl bg-white"
                  >
                    Create Account
                  </Link>
                </div>

                <div className="text-xs">or you can join with</div>
                <AuthSocialIcon />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
