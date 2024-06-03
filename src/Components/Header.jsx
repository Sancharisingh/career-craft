import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex bg-teal-100">
      <div className="resume-container">
        <p className="text-7xl ml-[3%] mt-[10%]">
          Make <span className="text-teal-400 italic">Resume</span> with Career Craft.
        </p>
        <p className="text-5xl ml-[4%] mt-2">
          That stands out. 
          <span className="text-teal-400 italic"> It's free</span>{" "}
        </p>
      </div>
      <div>
        {/* this image taken from undraw */}
        <img src="/resume.svg" alt="resume" />
      </div>
      </div>
      <hr/>
    </>
  );
};

export default Header;
