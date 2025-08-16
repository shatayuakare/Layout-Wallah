import ContentHeading from "../../components/ContentHeading";

const process = [
  {
    title: "Find plots in your desired area",
    img: "h41.png",
    description: "Browse and select your perfect plot",
  },
  {
    title: "Contact the seller or agent",
    img: "h42.png",
    description: "Connect with the seller to get more details",
  },
  {
    title: "Complete your purchase",
    img: "h43.png",
    description: "Finalize the deal and own your plot",
  },
];

const BuyProcess = () => {
  return (
    <div className="min-h-[75vh] flex gap-6 flex-col items-center justify-center">
      {/* <h3 className="capitlize text-[2.3rem] font-semibold">
        Find your dream plot as easy 1, 2, 3
      </h3>
      <div className="text-xs">Lorem ipsum dolor sit amet.</div> */}
      <ContentHeading
        title={"Buying Process"}
        description="Find your dream plot as easy step"
      />

      <div className="w-full md:w-3/5 mx-auto">
        <div className="grid md:grid-cols-3 gap-4 p-2 md:gap-8 pb-4">
          {process.map((elem, index) => (
            <div
              className="flex gap-4 text-start md:text-center flex-col items-start justify-center"
              key={index}
            >
              <img
                className="w-[75%] md:h-30 md:w-34 mx-auto"
                src={`./graphics/${elem.img}`}
                alt="Plot search step"
              />
              <div className="text-xl ps-8 font-semibold leading-4">
                {index + 1}. {elem.title}
              </div>
              <div className="text-sm ps-9"> {elem.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyProcess;
