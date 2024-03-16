import React from "react";

const LandingPage = () => {
  return (
    <div className="snap-start flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#000000] to-[#060314]">
      <h1 className="text-5xl font-bold text-white">Yuval Kamani</h1>
      <div className="text-xl font-light text-white flex flex-col items-center justify-center">
        <p className="text-decoration-line: line-through">
          Software Engineer + Mathematician
        </p>
        <p>4th Year Computer Science and Maths Candidate</p>
      </div>
    </div>
  );
};

export default LandingPage;
