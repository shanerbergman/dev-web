import React from "react";

const greeting = "Hello, I am Shane!";
const bio1 =
  "I am a frontend developer.  I build solutions.  I love using React.";
const bio2 =
  "I specialize in GeoSpatial but can do all things related to the Front End.  Need a interactive map, no problem.  Need a D3 visualization, you got it.  Want a modern looking app leveraging a component library, sure thing.  I can build what you want in time and on budget.";

function LandingSection() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 ">
      <img
        className=" object-cover my-16 w-64 h-96 rounded-full"
        src="/profileDelete.png"
        alt="Achraf Garai"
      />
      <h1 className="my-4 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
      <p className="text-xl">{bio2}</p>
    </div>
  );
}

export default LandingSection;
