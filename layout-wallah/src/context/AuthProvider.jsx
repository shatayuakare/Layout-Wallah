import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../utils/Constants";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const token = localStorage.getItem("token");
  const [authUser, setAuthUser] = useState();
  // console.log(token);

  useEffect(() => {
    if (token === null || token === undefined) return;

    const fetchData = async () => {
      axios.defaults.withCredentials = true;
      await axios
        .get(`${server}/auth/profile`, { withCredentials: true })
        .then((res) => setAuthUser(res.data))
        .catch((err) => console.error("error", err));
    };
    if (authUser) {
      fetchData();
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
