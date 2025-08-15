import SocialIcon from "../components/SocialIcon";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/property") return <></>;

  return (
    <footer className="">
      <div className="flex flex-col gap-2 p-2 md:gap-5 items-center justify-center py-4 md:min-h-[45vh] bg-primary text-background2">
        <button className="btn btn-ghost rounded-full bg-primary-light border-0 h-10 w-10 font-bold text-2xl">
          <i className="bx  bx-paper-plane"></i>
        </button>

        <div className="text-xl md:text-[1.8rem] font-semibold">
          Stay Up to Date
        </div>
        <div className="text-xs md:text-sm">
          Subscribe to our newslatter to receive our weekly feed.
        </div>
        <form action="">
          <div className="md:w-96 rounded-full relative bg-primary-light">
            <input
              className="ps-4 text-sx p-1 md:p-2 w-full"
              placeholder="Your e-mail"
              type="email"
              name="email"
            />
            <button className="absolute py-1 border-0 right-0 bg-none rounded-full top-0 bottom-0 btn btn-sm md:btn-md text-xs bg-primary-dark text-background2">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="min-h-[10vh] bg-primary-dark content-center text-center text-background2 p-2">
        <div className="grid md:grid-cols-3 md:w-3/5 mx-auto">
          <div className="">Copyright &copy;2025. Plots Wallah</div>
          <div className="hidden md:block">
            <Logo light={true} />
          </div>
          <div className="">
            <SocialIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
