import ContentHeading from "../../components/ContentHeading";
import { Swiper, SwiperSlide } from "swiper/react";

const recentArticle = [
  {
    title: "Housing market that changed the most this week",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    date: "March 19, 2025",
    link: "",
  },
  {
    title: "Housing market that changed the most this week",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    date: "March 19, 2025",
    link: "",
  },
  {
    title: "Housing market that changed the most this week",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    date: "March 19, 2025",
    link: "",
  },
  {
    title: "Housing market that changed the most this week",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    date: "March 19, 2025",
    link: "",
  },
];

const RecentArticle = () => {
  return (
    <div className="min-h-[75vh] content-center py-4">
      <ContentHeading
        title={"Articles"}
        description={"Recent Articles and News"}
      />

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full h-fit  md:w-3/4 md:mt-7 mx-auto flex md:grid md:grid-cols-4 gap-2 md:gap-6"
      >
        {recentArticle.map((elem, index) => (
          <SwiperSlide key={index}>
            <div className="border mx-2 w-4/5  md:mx-auto md:w-full flex flex-col border-primary rounded-xl shadow-lg">
              <img
                src={elem.img}
                alt={elem.title}
                className="object-cover w-full h-40 rounded-t-xl overflow-hidden"
              />
              <div className="px-3 py-2 grid text-center">
                <div className="text-xs text-primary py-1">
                  Apartment . {elem.date}
                </div>
                <div className="font-semibold leading-5">{elem.title}</div>
              </div>
              <button className="btn btn-xs border-0 bg-none my-2 text-primary flex items-center mx-auto">
                Read more
                <i className="bx bx-right-arrow-alt text-lg"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentArticle;
