import ContentHeading from "../../components/ContentHeading";
import React, { useState, useEffect, useRef } from "react";

const recentProp = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    title: "New appartment ",
    address: "address",
    rpf: 600, // rupee per feet
    favorite: true,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    title: "New appartment ",
    address: "address",
    rpf: 600, // rupee per feet
    favorite: false,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    title: "New appartment ",
    address: "address",
    rpf: 600, // rupee per feet
    favorite: true,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJzS1KWvcdnZ4cbtiZC0vZENQR3UwXdZAUA&s",
    title: "New appartment ",
    address: "address",
    rpf: 600, // rupee per feet
    favorite: false,
  },
];

const RecentProperties = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Responsive visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, recentProp.length - visibleCards);

  const prevSlide = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  // For mobile smooth scroll
  const scrollRef = useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      scrollRef.current
    ) {
      const card = scrollRef.current.children[current];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [current, visibleCards]);

  return (
    <div className="content-center min-h-[80vh]">
      <ContentHeading
        title="Rent Properties"
        description={"Recent properties for rent"}
      />
      <div className="relative w-full md:w-4/5 mx-auto">
        {/* Controls for desktop/tablet */}
        <div className="hidden md:flex items-center justify-between mb-2">
          <button
            className="btn btn-circle btn-sm bg-primary text-white disabled:opacity-30"
            onClick={prevSlide}
            disabled={current === 0}
            aria-label="Previous"
          >
            <i className="bx bx-chevron-left text-2xl"></i>
          </button>
          <span className="text-sm text-zinc-500">
            {current + 1} -{" "}
            {Math.min(current + visibleCards, recentProp.length)} of{" "}
            {recentProp.length}
          </span>
          <button
            className="btn btn-circle btn-sm bg-primary text-white disabled:opacity-30"
            onClick={nextSlide}
            disabled={current >= maxIndex}
            aria-label="Next"
          >
            <i className="bx bx-chevron-right text-2xl"></i>
          </button>
        </div>

        <div
          ref={scrollRef}
          className={
            visibleCards === 1
              ? "flex gap-4 transition-all duration-300 overflow-hidden snap-x snap-mandatory"
              : "flex gap-4 transition-all duration-300 overflow-hidden"
          }
          style={
            visibleCards === 1
              ? {
                  width: "100%",
                  // Show only one card at a time, center it, hide overflow
                  justifyContent: "center",
                }
              : undefined
          }
        >
          {visibleCards === 1
            ? recentProp.map((elem, index) => (
                <div
                  className={`border flex-shrink-0 border-primary rounded-xl w-4/5 mx-auto shadow-lg min-w-0 bg-white snap-center transition-transform duration-300 ${
                    index === current ? "" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    minWidth: "80%",
                    maxWidth: "80%",
                    display: index === current ? "block" : "none",
                  }}
                  key={index}
                >
                  <div className="h-60 w-full rounded-t-xl overflow-hidden">
                    <img
                      src={elem.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-3 py-2 grid gap-1">
                    <h5 className="font-semibold">{elem.title}</h5>
                    <div className="flex gap-2 items-center text-zinc-500 text-sm">
                      <i className="bx bx-map text-lg"></i>
                      {elem.address}
                    </div>
                  </div>
                  <div className="flex p-3 justify-between items-center">
                    <div className="text-primary font-semibold">
                      ₹{elem.rpf}/feet
                    </div>
                    <button className="btn btn-ghost border-0 font-extralight text-primary rounded-full w-9 h-9">
                      {elem.favorite ? (
                        <i className="bx bxs-heart text-2xl"></i>
                      ) : (
                        <i className="bx text-2xl bx-heart"></i>
                      )}
                    </button>
                  </div>
                </div>
              ))
            : recentProp
                .slice(current, current + visibleCards)
                .map((elem, index) => (
                  <div
                    className="border flex-auto border-primary rounded-xl w-full shadow-lg min-w-0 bg-white"
                    key={current + index}
                  >
                    <div className="h-60 w-full md:h-40 rounded-t-xl overflow-hidden">
                      <img
                        src={elem.img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2 grid gap-1">
                      <h5 className="font-semibold">{elem.title}</h5>
                      <div className="flex gap-2 items-center text-zinc-500 text-sm">
                        <i className="bx bx-map text-lg"></i>
                        {elem.address}
                      </div>
                    </div>
                    <div className="flex p-3 justify-between items-center">
                      <div className="text-primary font-semibold">
                        ₹{elem.rpf}/feet
                      </div>
                      <button className="btn btn-ghost border-0 font-extralight text-primary rounded-full w-9 h-9">
                        {elem.favorite ? (
                          <i className="bx bxs-heart text-2xl"></i>
                        ) : (
                          <i className="bx text-2xl bx-heart"></i>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
        </div>
        {/* Mobile dots */}
        {visibleCards === 1 && (
          <div className="flex justify-center mt-3 gap-2 md:hidden">
            {recentProp.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  current === idx ? "bg-primary" : "bg-zinc-300"
                }`}
                style={{ transition: "background 0.2s" }}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProperties;
