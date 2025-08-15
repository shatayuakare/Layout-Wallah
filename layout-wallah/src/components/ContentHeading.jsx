const ContentHeading = ({ title, description }) => {
  return (
    <div className="text-center grid gap-1 w-4/5 md:w-full mx-auto p-2">
      <h3 className="text-[1.8rem] md:text-[2.2rem] font-semibold text-primary">
        {title}
      </h3>
      <div className="text-sm md:text-xs">{description}</div>
    </div>
  );
};

export default ContentHeading;
