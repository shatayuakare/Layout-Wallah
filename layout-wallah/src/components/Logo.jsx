import { Link } from "react-router-dom";

const Logo = ({ light }) => {
  return (
    <Link
      to={"/"}
      className={`text-nowrap border-0 btn-sm px-2 text-start text-xl h-8 font-bold ${
        light ? "text-background" : "text-primary"
      }`}
    >
      Layout Wallah
    </Link>
  );
};

export default Logo;
