import React, { useState, useRef, useEffect } from "react";

const images = [
  "contact-us.svg",
  "detailed-information.svg",
  "innovative.svg",
  "online-learning.svg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Smooth scroll to the current slide
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: slideWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  // islide: show all images in a horizontal row, slide to current
  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div
        ref={containerRef}
        className="relative h-56 md:h-96 overflow-hidden rounded-lg"
        style={{
          scrollBehavior: "smooth",
          display: "flex",
          flexDirection: "row",
          transition: "scroll-left 0.5s",
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
            style={{
              minWidth: "100%",
              height: "100%",
              transition: "transform 0.5s",
            }}
          >
            <img
              src={"./src/assets/svg/" + img}
              className="block w-full h-full object-contain rounded-lg"
              alt={`Slide ${idx + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-primary" : "bg-gray-300"
            }`}
            aria-current={current === idx ? "true" : "false"}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
