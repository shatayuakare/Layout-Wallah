import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import PropertyHome from "./pages/property/PropertyHome";
import { BrowserRouter, Navigate, Route,  Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const App = () => {

  const [authUser, setAuthUser] = useAuth();
  
  return (
      <BrowserRouter> 
      <Header />  
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={(authUser === undefined)  ? <Login/> :<Navigate to={"/"}/>  } />
        <Route path="/register"element= {(authUser === undefined) ?<Registration/>:<Navigate to={"/"} />}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/properties"element={<Properties />}/>
        <Route path="/property"element={<PropertyHome/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
};

export default App;
