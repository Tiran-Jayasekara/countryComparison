import React from "react";
import worldImage from "../assets/world1.jpg";

// Show Country Data
const CountryDetails = ({ ContryData }) => {
  return (
    <>
      <div className="w-full flex flex-col mt-4 items-center mx-auto pb-10 h-auto">
        {ContryData ? (
          <>
            <div className="md:w-full pb-0">
              <img
                src={ContryData ? ContryData.flag : null}
                className="w-auto mx-auto md:h-40 h-32 "
                alt="image"
              />
            </div>

            <div className="mt-6 flex flex-col md:w-full w-full text-black">
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Country Name
                </p>
                <p>:</p>
                <p className="md:text-2xl text-sm md:ml-4 ml-1 font-playfair font-bold text-right text-blue-600">
                  {ContryData ? ContryData.name : null}
                </p>
              </div>
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Capital
                </p>
                <p>:</p>
                <p className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right  text-blue-600">
                  {ContryData ? ContryData.capital : null}
                </p>
              </div>
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Region
                </p>
                <p>:</p>
                <p className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right  text-blue-600">
                  {ContryData ? ContryData.region : null}
                </p>
              </div>
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Population
                </p>
                <p>:</p>
                <p className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right text-blue-600">
                  {ContryData ? ContryData.population : null}
                </p>
              </div>
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Area
                </p>
                <p>:</p>
                <p className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right text-blue-600">
                  {ContryData ? ContryData.area : null}
                </p>
              </div>
              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Languages
                </p>
                <p>:</p>
                <div className="flex flex-col">
                  {ContryData.languages
                    ? ContryData.languages.map((data, index) => (
                        <p
                          key={index}
                          className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right text-blue-600"
                        >
                          {data.name}
                        </p>
                      ))
                    : null}
                </div>
              </div>

              <div className="flex flex-row text-center md:w-96 w-auto md:mx-auto md:justify-between justify-center mx-2">
                <p className="md:text-2xl text-sm font-playfair font-bold text-left text-gray-900 flex-grow-0">
                  Currencies
                </p>
                <p>:</p>
                <div className="flex flex-col">
                  {ContryData.currencies
                    ? ContryData.currencies.map((data, index) => (
                        <p
                          key={index}
                          className="md:text-2xl text-sm font-playfair md:ml-4 ml-1 font-bold text-right text-blue-600"
                        >
                          {data.name}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <img
                src={worldImage}
                className="w-fit h-auto -mt-10 items-center justify-center mx-auto "
                alt="image"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CountryDetails;
