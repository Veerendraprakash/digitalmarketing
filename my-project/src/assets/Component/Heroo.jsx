import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";

export default function Hero() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  useEffect(() => {
    // Initialize Glide slider
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      // ... (rest of your slider options)
    }).mount();

    // Cleanup on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/* Navbar with Avatar */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        {/* ... (rest of your header code) */}
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              to="/"
            >
              {/* Your logo SVG code */}
              VP xAvier
            </Link>
            {/* Mobile trigger */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              {/* Mobile trigger button code */}
            </button>
            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {/* Navigation links */}
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/* Avatar */}
              <a
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                {/* Avatar code */}
              </a>
              {/* End Avatar */}
            </div>
          </nav>
        </div>
      </header>
      {/* End Navbar with Avatar */}

      {/* Carousel with controls inside */}
      <div className="glide-01 relative w-full">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {/* Carousel images */}
          </ul>
        </div>
      </div>

      {/* Additional Content */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Feature Section */}
        <div className="flex items-center rounded bg-emerald-500 p-2 text-white">
          {/* Dashboard icon */}
        </div>
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
          <h3 className="mb-2 py-2 text-lg leading-6 text-slate-700">
            Responsive Design
          </h3>
          <p className="text-slate-500">
            Wind UI ensures your web application looks and functions flawlessly
            on various devices, from smartphones to desktops.
          </p>
          <div className="mt-4 grow md:ml-12 md:mt-0">
            <p className="text-base font-semibold text-gray-700">
              Xavier Company
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Company, Stores, Services, Legal, Social Links sections */}
        </div>

        {/* Link to Footer */}
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          to="/Footer"
        >
          <span>Services</span>
        </Link>
      </div>
    </>
  );
}
