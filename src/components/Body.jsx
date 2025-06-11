import React, { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s1 from "../assets/stories/1.jpg";
import s2 from "../assets/stories/2.jpg";

const HomeTopPicks = () => {
  const timerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Autoplay with pause on hover
  useEffect(() => {
    const sliderInstance = slider?.current;
    const container = sliderRef.current;

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        sliderInstance?.next();
      }, 3000);
    };

    const stopTimer = () => clearInterval(timerRef.current);

    if (sliderInstance && container) {
      container.addEventListener("mouseover", stopTimer);
      container.addEventListener("mouseout", startTimer);
      startTimer();
    }

    return () => {
      stopTimer();
      if (container) {
        container.removeEventListener("mouseover", stopTimer);
        container.removeEventListener("mouseout", startTimer);
      }
    };
  }, [slider]);

  return (
    <div className="w-full bg-white text-black py-8 font-sans">
      <div className="w-full sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-20 px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Top{" "}
            <span className="relative inline-block text-black">
              Picks
              <span className="absolute -top-4 -right-6 text-red-500 text-3xl sm:text-4xl">
                💥
              </span>
            </span>
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left section with slideshow */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div ref={sliderRef} className="keen-slider rounded-md overflow-hidden">
                {[s1, s2].map((img, index) => (
                  <div key={index} className="keen-slider__slide">
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() => slider.current?.prev()}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                ◀
              </button>
              <button
                onClick={() => slider.current?.next()}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                ▶
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {[s1, s2].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => slider.current?.moveToIdx(i)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === i ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text below slider */}
            <div className="mt-6">
  <p className="text-sm font-medium text-gray-600">■ Featured</p>

  <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
    A Silent Force Redefining How Industries Procure – Inside 1VP’s Relentless Move to Disrupt India’s Procurement Playbook
  </h1>

  <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-4">
    <p>
      India’s industrial procurement landscape has long been overdue for a digital transformation. 1Vendor Platform | 1VP is changing that—quietly but powerfully.
    </p>

    <p>
      By combining automation, transparency, and a localized approach, 1VP's tech-first approach is revolutionizing B2B procurement for all industrial users, including large enterprises, SMEs, MSMEs, and even individual business buyers.
    </p>

    <p>
      🚀 With a founding team rooted in deep domain and tech leadership, 1VP is building the future of industrial commerce—smart, scalable, and inclusive.
    </p>
  </div>

  <p className="mt-4 font-semibold">
    Ankit Pant – CTO & Co-founder, Sushant Dutta – CEO & Co-founder
  </p>
</div>

          </div>

          {/* Right section */}
          <div className="space-y-8">
            {/* CapTable */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black border-b-4 border-green-500 inline-block mb-4">
                Stories
              </h2>
              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gray-300 rounded-md" />
                    <div>
                      <p className="text-sm font-semibold leading-tight">
                        {i === 0
                          ? "Loading"
                          : i === 1
                          ? "Loading"
                          : "Loading"}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {i === 0
                          ? "Loading"
                          : i === 1
                          ? "Loading"
                          : "Loading"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="border border-gray-300 p-4 rounded-md shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold">
                    Sign Up For Industries Times Newsletter
                  </h3>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border px-3 py-2 w-full sm:w-auto flex-1 rounded-sm text-sm"
                />
                <button className="bg-black text-white px-4 py-2 text-sm rounded-sm hover:bg-gray-800">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopPicks;
