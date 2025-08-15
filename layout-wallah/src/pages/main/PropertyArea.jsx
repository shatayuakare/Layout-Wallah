import ContentHeading from "../../components/ContentHeading";
import { Swiper, SwiperSlide } from "swiper/react";

const areas = [
  {
    name: "Nagpur",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-dhamma-chakra-stupa-nagpur-maharashtra-city-hero?qlt=82&ts=1726669922076",
    quantity: "12",
    link: "https://g.co/kgs/y2GqhcL",
  },
  {
    name: "Bhandara",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-dhamma-chakra-stupa-nagpur-maharashtra-city-hero?qlt=82&ts=1726669922076",
    quantity: "15",
    link: "https://g.co/kgs/y2GqhcL",
  },
  {
    name: "Mouda",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-dhamma-chakra-stupa-nagpur-maharashtra-city-hero?qlt=82&ts=1726669922076",
    quantity: "15",
    link: "https://g.co/kgs/y2GqhcL",
  },
  {
    name: "Ramtake",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-dhamma-chakra-stupa-nagpur-maharashtra-city-hero?qlt=82&ts=1726669922076",
    quantity: "15",
    link: "https://g.co/kgs/y2GqhcL",
  },
];

const PropertyArea = () => {
  return (
    <div className="h-fit md:min-h-[75vh] content-center py-8">
      <ContentHeading
        title={"Properties by Area"}
        description={"lorem laoer mlerelkdvbjd dfvndkjf v  "}
      />

      <Swiper className="flex flex-col gap-2 md:gap-4 md:grid w-full p-2 md:grid-cols-3 md:w-3/5 mx-auto md:mt-6 overflow-y-auto">
        {areas.map((elem, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-4/5 mx-auto md:w-auto md:h-auto h-50 md:flex-row items-center rounded-xl overflow-hidden justify-start relative">
              <img
                className="md:rounded-xl object-cover h-full w-full md:w-20 md:h-20 shadow"
                src={elem.img}
                alt={elem.name}
              />
              <div className="flex md:static items-center md:bg-transparent justify-end flex-col md:grid md:ps-6 absolute bottom-0 left-0 right-0 p-2 w-full bg-black backdrop-opacity-50">
                <h6 className="font-semibold text-[1.4rem]">{elem.name}</h6>
                <div className="text-xs text-primary">
                  {elem.quantity} Properties
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertyArea;
