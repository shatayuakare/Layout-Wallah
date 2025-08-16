import React from "react";
import { Link } from "react-router-dom";

const AuthSocialIcon = () => {
  const social = [
    {
      icon: "bxl-google",
      title: "Google",
      url: "",
    },
    {
      icon: "bxl-facebook",
      title: "Facebook",
      url: "",
    },
    {
      icon: "bxl-linkedin",
      title: "Linkedin",
      url: "",
    },
  ];

  return (
    <div className="flex gap-4">
      {social.map((elem, index) => (
        <Link
          key={index}
          to={elem.url}
          className="h-10 w-10 bg-background2 rounded-full shadow-lg btn btn-ghost border-primary text-primary border-0 hover:border-b-4 duration-100"
        >
          <i className={`bx ${elem.icon} text-xl`}></i>
        </Link>
      ))}
    </div>
  );
};

export default AuthSocialIcon;
