import React from "react";

const greeting = "Hello, my name is Shane!";
const bio1 = "I am a Software Engineer.  I build solutions.";
const bio2 =
  "I am a seasoned professional in the world of software development. With a strong background in frontend engineering and GeoSpatial Technologies, I currently serve as the leader of a dynamic Agile team that specializes in crafting cutting-edge mapping applications to support vital agricultural research.";

function LandingSection() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 ">
      <img
        className=" object-cover my-16 w-64 h-96 rounded-full"
        src="/ShaneProfile.jpg"
        alt="Achraf Garai"
      />
      <h1 className="my-4 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
      <p className="text-xl">{bio2}</p>
    </div>
  );
}

export default LandingSection;
