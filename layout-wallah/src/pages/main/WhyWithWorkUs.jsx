const feature = [
  "100% secure",
  "Wide range of properties",
  "Buy or rent property",
  "Trusted by thusands",
];

const WhyWithWorkUs = () => {
  return (
    <div className="content-center min-h-[85vh] h-auto py-4 md:py-0 bg-background2">
      <div className="md:w-3/4 mx-auto p-2 flex flex-col md:flex-row">
        <div className="md:w-3/5 w-full flex gap-2 p-2 md:gap-4">
          <div className="flex flex-col rounded-xl overflow-hidden gap-2 md:gap-4 items-end">
            <img
              className="w-[13rem] overflow-hidden rounded-xl h-[12rem] md:h-[15rem] hover:scale-105 shadow-lg"
              src="https://i.pinimg.com/564x/12/d2/1b/12d21bd4db761f1b737fa05d01316641.jpg"
              alt=""
            />
            <div className="rounded-lg md:w-2/3 min-h-26 p-4 bg-orange-300 flex flex-col gap-1 shadow-lg">
              <div className="text-xl rounded-full flex items-center justify-center text-white h-10 w-10 bg-primary font-normal">
                <i className="bx bxs-bank "></i>
              </div>
              <div className="text-xs font-semibold">Properties for Sale</div>
              <div className="font-semibold text-lg">14k</div>
            </div>
          </div>

          <div className="md:w-[16rem] rounded-xl overflow-hidden h-[18rem] md:h-[20rem] mt-[8rem] shadow-lg">
            <img
              className="h-full w-full hover:scale-105"
              src="https://dyimg2.realestateindia.com/prop_images/2593637/1063583_1-350x350.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-2 md:gap-6 w-full content-center p-2 md:w-2/5">
          <h4 className="font-semibold text-[1.4rem] md:text-[2rem]">
            Why your should work with us.
          </h4>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            incidunt dolor ipsa rem natus earum atque quae quibusdam asperiores
            culpa.
          </div>

          <div className="grid gap-1 md:gap-3 md:grid-cols-2 text-primary">
            {feature.map((elem, index) => (
              <div className="flex items-center font-[500] gap-3" key={index}>
                <i className="bx bx-check-double text-primary  text-xl"></i>
                <div className="text-sm  ">{elem}</div>
              </div>
            ))}
          </div>

          <button className="btn md:mt-0 mt-2 w-fit btn-ghost bg-primary text-white rounded-lg flex items-center">
            Learn more <i className="bx text-xl bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWithWorkUs;
