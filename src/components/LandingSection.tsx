import React from "react";

const greeting = "Hello, I am Shane!";
const bio1 =
  "I am a Software Engineer.  I build solutions.  I love using React.";
const bio2 =
  "I specialize in GeoSpatial projects and am an expert in all things related to Web Maps.  But I can do much more.  From Payment Forms to Back End development, I am experienced in the entire stack.  Contact me if you need an Engineer.";

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
