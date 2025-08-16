import React, { useRef } from "react";

// Swiper js 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const review = [
  {
    dp: "https://c8.alamy.com/comp/2WG4PFP/5999-stylish-attitude-boy-new-whatsapp-dp-instagram-fb-profile-pic-free-2024-cute-boy-premium-high-res-stock-photos-download-on-alamy-2WG4PFP.jpg",
    name: "Shatayu Akare",
    desigation: "Full Stack Developer",
    msg: "searches for multiplexes, property comparisons, and the loan estimator. Work great. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo dolor officiis delenit earum amet.",
  },
  {
    dp: "https://cdn2.momjunction.com/wp-content/uploads/2019/07/Whatsapp-DP-Images-For-Boys-1.jpg.webp",
    name: "Kartik Hatwar",
    desigation: "Marketing Manager",
    msg: "searches for multiplexes, property comparisons, and the loan estimator. Work great. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo dolor officiis delenit earum amet.",
  },
  {
    dp: "https://2.gravatar.com/avatar/ff9992fa0294b10d5cee721a94f6d8e05e60b880673f1369887235f00f93d7fa?size=256",
    name: "Navin Rajput",
    desigation: "Cyber Expert",
    msg: "searches for multiplexes, property comparisons, and the loan estimator. Work great. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo dolor officiis delenit earum amet.",
  },
];

const CustomerReview = () => {
  const swiperRef = useRef(null);

  return (
    <div className="md:min-h-[75vh] bg-transparent md:bg-primary p-2 text-white content-center">
      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto gap-4">
        <div className="hidden md:grid md:w-5/7 gap-2 md:gap-6">
          <h4 className="text-[1.8rem] font-semibold leading-10 capitalize">
            What our customers are saying us?
          </h4>
          <div className="capitalize text-sm">
            veriour version have envolved over the years, sometimes by the
            accident, sometimes on purpose injected humour and the like.
          </div>

          <div className="flex items-start gap-8">
            <div className="grid gap-1">
              <div className="text-2xl font-semibold">10k+</div>
              <div className="text-xs">Happy People</div>
            </div>
            <div className="grid gap-1">
              <div className="text-2xl font-semibold">4.88</div>
              <div className="text-xs">Overall Rating</div>
              <div className="">*****</div>
            </div>
          </div>
        </div>

        <div className="grid gap-2 p-2">
          <div className="flex gap-2 overflow-x-auto">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper"
            >
              {review.map((elem, index) => (
                <SwiperSlide
                  className="bg-primary text-background2 rounded-xl p-3 md:w-5/7 mx-auto"
                  key={index}
                >
                  <div className="flex gap-5 items-center">
                    <img
                      className="w-22 h-22 rounded-4xl object-cover object-top"
                      src={elem.dp}
                      alt={elem.name}
                    />

                    <div className="grid ">
                      <h6 className="font-semibold text-2xl text-background">
                        {elem.name}
                      </h6>
                      <div className="text-xs">{elem.desigation}</div>
                    </div>
                  </div>

                  <p className="mt-4 capitalize text-sm">{elem.msg}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex gap-4">
            <button
              className="btn btn-ghost bg-primary-dark btn-sm text-background2 rounded-full text-2xl border-0"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slidePrev();
              }}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              className="btn btn-ghost bg-primary-dark btn-sm text-background2 rounded-full text-2xl  border-0"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slideNext();
              }}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
