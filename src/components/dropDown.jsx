import React, { useEffect } from "react";

const DropDown = ({ country, CountryData }) => {
  return (
    <>
      {/* Data Loadning part */}
      {country.loading ? (
        <div className="text-black text-center text-xl mt-2 mb-2">
          Loading.......
        </div>
      ) : null}

      {/* Checking is there any error when data Fetching */}
      {country.error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 md:px-4 px-2 md:py-3 mx-1 mb-2 rounded relative mt-4 md:mx-10"
          role="alert"
        >
          <strong className="font-bold text-xs md:text-sm">
            Holy smokes!{" "}
          </strong>
          <span className="block text-xs md:text-sm">
            Something seriously bad in Data Fetching.
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : null}

      {/* Countries Drop Down */}
      <select
        id="countries"
        className=" z-0 bg-gray-50 border m-10 mt-0 text-gray-900 text-sm rounded-lg border-stone-400 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onChange={CountryData}
      >
        <option>Select Country</option>

        {country.countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
