import socialIcon from "../api/social.json";

const SocialIcon = () => {
  return (
    <div className="flex justify-center gap-2">
      {socialIcon.map((elem, index) => (
        <a
          href={elem.link}
          key={index}
          className="btn rounded-xl btn-ghost h-9 w-9 text-lg "
        >
          <i className={`bx ${elem.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
