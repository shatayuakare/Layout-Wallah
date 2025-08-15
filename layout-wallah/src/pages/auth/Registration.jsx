import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import axios from "axios";
import AuthSocialIcon from "../../components/AuthSocialIcon";
import { server } from "../../constants/Constants";

const Registration = () => {
  const [registerData, setRegisterData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

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
    setRegisterData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const registerHandler = async (event) => {
    event.preventDefault();

    setDisable(!disable);
    const data = {
      name: {
        fname: registerData.fname,
        lname: registerData.lname,
      },
      email: registerData.email,
      password: registerData.password,
    };
    await axios
      .post(`${server}/auth/register`, data)
      .then((res) => {
        alert(res.data.message || res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.error(err));
    setRegisterData({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="bg-background2 content-center md:min-h-[90vh] h-fit"
      id="register"
    >
      <div className="md:w-4/5 flex flex-col md:flex-row p-2  mx-auto h-full gap-6">
        <div className="sm:w-full md:w-3/5 content-center order-2">
          <Carousel />
        </div>

        <div className="sm:w-full md:w-2/5 content-center order-1">
          <div className="shadow-xl rounded-xl py-10 pt-5 px-8 bg-background grid gap-2 md:gap-3">
            <h5 className="text-[1.8rem] font-semibold md:text-[2rem]">
              Welcome! 🎉
            </h5>

            <div className="text-sm">
              Join us today to enjoy all the features and stay connected. Please
              fill in your personal information below to get started.
            </div>

            <form action="" onSubmit={registerHandler} className="grid gap-2">
              <div className="flex items-center justify-between gap-4 ">
                <div className="flex border-0 border-b-2 border-primary">
                  <div className="pt-2">
                    <i className="bx bx-user text-[1.8rem] text-slate-600"></i>
                  </div>
                  <div className="relative w-full">
                    <input
                      id="fname"
                      type="text"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                      placeholder=""
                      value={registerData.fname}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="fname"
                      className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      First Name
                    </label>
                  </div>
                </div>
                <div className="relative border-0 border-b-2 border-primary">
                  <input
                    id="lname"
                    type="text"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    value={registerData.lname}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="lname"
                    className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Last name (Optional)
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2  border-0 border-b-2 border-primary">
                <div className="pt-2">
                  <i className="bx bx-envelope text-[1.8rem] text-slate-600"></i>
                </div>
                <div className="relative w-full">
                  <input
                    id="email"
                    type="email"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                    placeholder=""
                    value={registerData.email}
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

              <div className="flex items-center gap-2  border-0 border-b-2 border-primary">
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
                    value={registerData.password}
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

              <div className="flex gap-2 py-1 font-semibold text-xs items-center ">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-start gap-4">
                  <button
                    type="submit"
                    disabled={disable}
                    className="btn btn-ghost border-0 text-white shadow rounded-xl bg-primary disabled:bg-primary-light disabled:text-txt2"
                  >
                    Create Account
                    {disable ? (
                      <i className="bx text-lg bx-loader bx-spin"></i>
                    ) : (
                      <span></span>
                    )}
                  </button>
                  <Link
                    to={"/login"}
                    className="btn btn-ghost border-0 text-primary shadow rounded-xl bg-white"
                  >
                    Log In
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

export default Registration;
