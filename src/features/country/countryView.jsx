import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "./countrySlice";
import CountryDetails from "../../components/countryDetails";
import DropDown from "../../components/dropDown";

const CountryView = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  console.log(country);


  const [firstCountry, setFirstCountry] = useState();
  const [secoundCountry, setSecoundCountry] = useState();

  useEffect(() => {
    dispatch(fetchCountry());
  }, []);

  const firstCountryData = (event) => {
    const selectedCountry = country.countries.find(
      (c) => c.name === event.target.value
    );
    setFirstCountry(selectedCountry);
  };

  const secoundCountryData = (event) => {
    const selectedCountry = country.countries.find(
      (c) => c.name === event.target.value
    );
    setSecoundCountry(selectedCountry);
  };

  return (
    <div className="w-full flex flex-row">
      {/* First Country Design */}
      <div className="w-1/2 md:mr-5 md:ml-10 rounded-xl mb-10">
        <div className="w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm h-auto rounded-xl">
          <div className="flex flex-col ">
            <label className="block mb-4 font-bold pt-4 pb-4 md:text-2xl font-playfair bg-gray-900  text-center">
              <h1 className="">First Country</h1>
            </label>
            <DropDown country={country} CountryData={firstCountryData} />
          </div>
          <CountryDetails ContryData={firstCountry} />
        </div>
      </div>

      {/* Secound Country Design */}
      <div className="w-1/2 md:mr-10 md:ml-5 ml-1">
      <div className="w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm h-auto rounded-xl">
          <div className="flex flex-col ">
            <label className="block mb-4 font-bold pt-4 pb-4 md:text-2xl font-playfair bg-gray-900  text-center">
              <h1 className="">Secound Country</h1>
            </label>
            <DropDown country={country} CountryData={secoundCountryData} />
          </div>
          <CountryDetails ContryData={secoundCountry} />
        </div>
      </div>
    </div>
  );
};

export default CountryView;
