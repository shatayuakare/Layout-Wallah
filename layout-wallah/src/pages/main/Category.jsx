import ContentHeading from "../../components/ContentHeading";

const category = [
  {
    title: "Road Touch",
    icon: "ri-roadster-line",
    quantity: "25",
  },
  {
    title: "Office Room",
    icon: "ri-building-line",
    quantity: "15",
  },
  {
    title: "Plots",
    icon: "ri-layout-masonry-line",
    quantity: "50",
  },
  {
    title: "Road Flats",
    icon: "ri-building-line",
    quantity: "25",
  },
];

const Category = () => {
  return (
    <div className="pb-5 md:min-h-[60vh] content-center bg-background2">
      <ContentHeading
        title={"Feature Categories"}
        description={"Lorem ipsum dolor sit amet."}
      />

      <div className="w-full p-4 md:w-3/4 md:mt-8 mx-auto grid md:grid-cols-4 gap-2 md:gap-8">
        {category.map((elem, index) => (
          <div
            className="flex items-center gap-3 shadow bg-background rounded-lg p-3"
            key={index}
          >
            <div className="rounded flex items-center justify-center md:w-8 md:h-8 h-18 w-18">
              <i className={`${elem.icon} text-3xl`}></i>
            </div>
            <div>
              <h5 className="font-semibold">{elem.title}</h5>
              <div className="text-xs">{elem.quantity} Properties</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
