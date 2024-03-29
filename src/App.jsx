import CountryView from "./features/country/countryView";
import backgroundImage from "./assets/world.jpg";

function App() {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
  };

  return (
    <div style={appStyle}>

      {/* Header */}
      <h1 className="text-center w-full font-bold md:text-5xl text-2xl text-white pt-6 pb-6 mb-4 font-playfair bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm">
        Country Comparison
      </h1>

      {/* Show Two Country Details */}
      <CountryView />
    </div>
  );
}

export default App;
