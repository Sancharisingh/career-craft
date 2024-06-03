import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowDown } from "react-feather";
import Editor from "./Editor";
import Resume from "./Resume";
import ReactToPrint from "react-to-print";

const Body = () => {

  const colors = [
    "#26A69A",
    "#5fe884",
    "#5fc8e8",
    "#e36ae6",
    "#f25a5a",
    "#752cb0",
    "#acb02c",
  ];
  const sections = {
    basicInfo: "Basic Information",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <>
      <div className="resume-builder text-gray-300">
        <p className="font-medium text-5xl text-center mt-5">Resume</p>
        <div className="mt-4">
          <div className="flex justify-left space-x-5 ml-10">
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`Colors w-8 h-8 rounded-full cursor-pointer ${activeColor === item ? "border-white border-2" : ""}`}
                onClick={()=>setActiveColor(item)}
              />
            ))}
          </div>
          <ReactToPrint 
          trigger={()=>{
            return <div className="flex justify-end mr-5 mt-[-35px]">
            <button
              type="button"
              className="Download bg-teal-400 p-3 flex items-center rounded-xl cursor-pointer text-black"
            >
              Download <ArrowDown />{" "}
            </button>
          </div>
          }}
          content={()=>resumeRef.current}/>
          

          <div >
            <Editor
            className="text-gray-300"
              sections={sections}
              information={resumeInformation}
              setInformation={setResumeInformation}
            />
            <Resume className="text-gray-300" ref={resumeRef} sections={sections} information={resumeInformation} activeColor={activeColor}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
