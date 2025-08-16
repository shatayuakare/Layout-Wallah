import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { server } from "../constants/Constants";
import Logo from "../components/Logo";

const Header = () => {
  const [authUser, setAuthUser] = useAuth();

  const path = useLocation();

  const logoutHandler = async () => {
    axios.defaults.withCredentials = true;
    await axios
      .get(`${server}/auth/logout`, { withCredentials: true })
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((err) => console.error(err));

    window.location.reload();
  };

  if (path.pathname === "/property") return <></>;

  return (
    <>
      <div className="h-9 hidden md:flex justify-between items-center bg-primary text-white text-xs">
        <div className="w-4/5 mx-auto flex items-center justify-between gap-4">
          <div className="flex font-semibold gap-1 items-center">
            <i className="bx pt-1 bx-phone text-base "></i>
            +91 123-4567-890/ +91 123-4567-890
          </div>

          <div className="flex font-semibold gap-1 items-center">
            <i className="bx pt-1 bx-envelope text-base"></i>
            layoutwallah@realestate.com
          </div>
        </div>
      </div>
      <header className="text-txt bg-background top-0 sticky z-50 w-full navbar header shadow-sm md:px-12 min-h-14 py-0 my-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm h-8 btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-30 bg-background2 gap-1 font-semibold p-1 mobile"
            >
              <li className={`${path.pathname === "/" && "active"}`}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={`${path.pathname === "/properties" && "active"}`}>
                <Link to={"/properties"}>Properties</Link>
              </li>
              <li className={`${path.pathname === "/service" && "active"}`}>
                <Link to={"/service"}>Service</Link>
              </li>
              <li className={`${path.pathname === "/contact" && "active"}`}>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Logo light={false} />
        </div>
        <div className="navbar-center font-semibold h-8 hidden lg:flex">
          <ul className="menu menu-horizontal menu-sm  gap-3">
            <li className={`${path.pathname === "/" && "active"}`}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={`${path.pathname === "/properties" && "active"}`}>
              <Link to={"/properties"}>Properties</Link>
            </li>
            <li className={`${path.pathname === "/service" && "active"}`}>
              <Link to={"/service"}>Service</Link>
            </li>
            <li className={`${path.pathname === "/contact" && "active"}`}>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4">
            <div className="dropdown dropdown-end md:dropdown-center dropdown-bottom">
              <button
                className="btn btn-sm border rounded-full h-8 w-8 text-primary border-primary"
                tabIndex={1}
                role="button"
              >
                <i className="bx bx-user text-lg"></i>
              </button>
              <ul
                tabIndex={1}
                className="dropdown-content mt-3 menu bg-background2 rounded-box z-1 w-30 shadow-sm gap-1 font-semibold p-2 pt-0"
              >
                {!authUser ? (
                  <>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link
                        className="text-nowrap btn border-0  btn-sm btn-ghost bg-primary text-white rounded"
                        to={"/register"}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li>
                      <button
                        className="text-nowrap btn border-0  btn-sm btn-ghost bg-primary text-white rounded"
                        onClick={logoutHandler}
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link
              to={"/property"}
              className="btn hidden md:flex btn-sm border text-primary border-primary rounded-full h-8 px-4"
            >
              Get Propery
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
