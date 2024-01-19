import React from "react";
import { isMenuOpen } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Features from "./Features";

export default function Index() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {/* <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
              >
                Product
              </Link>
            </li> */}
            <li>
              <Link
                to="/Services"
                aria-label="Our product"
                title="Our product"
                className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Pricing"
                aria-label="Product pricing"
                title="Product pricing"
                className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link
            href="/"
            aria-label="SYNERGYSPRINT"
            title="SYNERGYSPRINT"
            className="inline-flex items-center lg:mx-auto"
          >
            <svg
              className="w-8 text-white"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              SYNERGYSPRINT
            </span>
          </Link>
          <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
            {/* <li>
              <Link
                to="/Signin"
                aria-label="Sign in"
                title="Sign in"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
              >
                Sign in
              </Link>
            </li> */}
            <li>
              <Link
                className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
                aria-label="Contact"
                title="Contact"
                to="/Contact"
              >
                ContactUs
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
                aria-label="Log In"
                title="Log In"
                to="/Signin"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png" // Replace this with the actual path to your avatar image
                  className=" w-8 "
                />
              </Link>
            </li>
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => isMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="SYNERGYSPRINT"
                        title="SYNERGYSPRINT"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          SYNERGYSPRINT
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>

                      <li>
                        <Link
                          className=" inline-block mr-2 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full md:w-auto bg-gray-800 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
                          aria-label="Log In"
                          title="Log In"
                          to="/Signin"
                        >
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png" // Replace this with the actual path to your avatar image
                            className=" w-8 "
                          />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5A1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h1
              className="mb-10 text-base font-thin tracking-wide text-white md:text-lg animate-bounce"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 1)" }}
            >
              <b>
                Transforming Clicks into Conversions:<br></br> Your Gateway to
                Strategic Digital Success!
              </b>
            </h1>

            <h1 className="mb-5 text-base font-thin tracking-wide text-white md:text-lg">
              <b>Join Us Today!</b>
            </h1>
            <p className="mb-5 text-base font-thin tracking-wide text-white shadow-md md:text-lg">
              Don't miss out on the latest Marketing updates and opportunities.
              Subscribe now and become part of a thriving community dedicated to
              Success.
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-100 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16">
              Your success story begins with a click. Subscribe now and let's
              achieve greatness together!
            </p>
            <Link
              to="/h2"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5A1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
              <span className="inline-block mb-1 sm:mb-4">
                Better Solutions
                <br className="hidden md:block" />
                For Your Business
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-white scale-x-30 group-hover:scale-x-100" />
            </h2>

            <h1 className="text-white lg:text-sm lg:max-w-md">
              We are an IT Company working with a team of well-qualified experts
              developers with an experience of more than years. Every team
              member of us has expertise in his/her field. Our main expertise is
              Digital Marketing and Social Media. Apart from IT, We have a
              Website development and Social Media Services.
            </h1>
          </div>
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <Link href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://www.yusufuyanik.com/wp-content/uploads/2020/05/adsense-logo.png"
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4  bg-opacity-75">
                  <p className=" text-center text-sm font-medium tracking-wide text-white animate-bounce">
                    Adsense
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl ">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://th.bing.com/th/id/R.a5954450572f755b61348fb121d9ca09?rik=f5V0I2suoLfeaw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fSEO-PNG-Image.png&ehk=0eY81VTckJcgRH45m%2f0KLSdlRB3gIbGaidcqNOXvzVk%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-opacity-75">
                  <p className="text-sm font-medium tracking-wide text-white animate-bounce">
                    Search Engine Optimisation
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl ">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://www.pngall.com/wp-content/uploads/5/Social-Media-Digital-Marketing-PNG-Free-Download.png"
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-opacity-75">
                  <p className=" text-sm font-medium tracking-wide text-white animate-bounce">
                    Social Media Marketing
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl ">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://www.pngarts.com/files/7/Web-Design-PNG-Image-Transparent.png"
                  alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4  bg-opacity-75">
                  <p className="text-center text-sm font-medium tracking-wide text-white animate-bounce">
                    Web Desining
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link
            to="/Services"
              aria-label=""
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
            >
              See more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <Features />
        {/* Footer section */}
        <Footer />
      </div>
    </div>
  );
}
