import React from "react";
import { Link } from "react-router-dom";
export default function BService() {
  return (
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
          developers with an experience of more than years. Every team member of
          us has expertise in his/her field. Our main expertise is Digital
          Marketing and Social Media. Apart from IT, We have a Website
          development and Social Media Services.
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
          href="/"
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
  );
}
