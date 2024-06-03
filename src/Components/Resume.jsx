import React, { useEffect, useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Resume = forwardRef((props,ref) => {
  const information = props.information;
  const sections = props.sections;
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const colorizeTitlesAndIcons = (color) => {
    const titles = document.querySelectorAll(".section-title");
    titles.forEach((title) => {
      title.style.color = color;
    });
  
    const icons = document.querySelectorAll(".font-icon");
    icons.forEach((icon) => {
      icon.style.color = color;
    });
  };

  useEffect(() => {
    colorizeTitlesAndIcons(props.activeColor);
  }, [props.activeColor]);
  
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievements: information[sections.achievements],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${info.workExp?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 mb-[-10px] text-4xl pl-5 pr-5 pt-5 pb-1 border-b-4 border-gray-700 section-title">
          {info.workExp.sectionTitle}
        </div>
        <div>
          {info.workExp?.details?.map((item) => (
            <div key={item.title}>
              {item.title && <p className="mt-4">{item.title}</p>}
              {item.companyName && (
                <p className="text-lg font-bold text-teal-400 section-title">
                  {item.companyName}
                </p>
              )}
              {item.certificationLink && (
                <a
                  className="flex items-center gap-2 mt-1 text-teal-400 section-title"
                  href={item.certificationLink}
                >
                  <Paperclip className="h-[14px] w-[14px] font-icon" />
                  {item.certificationLink}
                </a>
              )}
              {item.startDate && item.endDate ? (
                <div className="flex items-center mt-1">
                  <Calendar className="h-[20px] font-icon" />{" "}
                  {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
              {item.location && (
                <p className="flex items-center mt-1">
                  <MapPin className="h-[20px] font-icon" />
                  Remote
                </p>
              )}
              {item.points?.length > 0 && (
                <ul className="mt-3 list-disc ml-5">
                  {item.points?.map((elem, index) => (
                    <li key={elem + index}>{elem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${info.project?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 text-4xl pl-5 pr-5 pt-5 border-b-4 border-gray-700 section-title">
          {info.project.sectionTitle}
        </div>
        <div>
          {info.project?.details?.map((item) => (
            <div>
              {item.title ? (
                <p className="mt-3">{item.title}</p>
              ) : (
                <span></span>
              )}
              {item.link ? (
                <a
                  className="flex items-center gap-2 mt-1 section-title"
                  href={item.link}
                >
                  <Paperclip className="h-[14px] w-[14px] font-icon" />
                  {item.link}
                </a>
              ) : (
                <span></span>
              )}
              {item.github ? (
                <a
                  className="flex items-center gap-2 mt-1 section-title"
                  href={item.github}
                >
                  <GitHub className="h-[14px] w-[14px] font-icon" />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? <p>{item.overview}</p> : <span />}
              {item.points?.length > 0 ? (
                <ul className="mt-3 list-disc ml-5">
                  {item.points?.map((elem, index) => (
                    <li key={elem + index}>{elem}</li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${info.education?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 mb-[-10px] text-4xl pl-5 pr-5 pt-5 pb-1 border-b-4 border-gray-700 section-title">
          {info.education?.sectionTitle}
        </div>
        <div>
          {info.education?.details?.map((item) => (
            <div>
              {item.title && <p className="mt-5 text-lg">{item.title}</p>}
              {item.college && (
                <p className="text-lg font-bold section-title">College name</p>
              )}

              {item.startDate && item.endDate ? (
                <div className="flex items-center mt-1">
                  <Calendar className="h-[20px] font-icon" />{" "}
                  {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div
        key={"achievements"}
        draggable
        onDragOver={() => setTarget(info.achievements?.id)}
        onDragEnd={() => setSource(info.achievements?.id)}
        className={`${info.achievements?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 text-4xl pl-5 pr-5 pt-5 pb-1 border-b-4 border-gray-700 section-title">
          {info.achievements?.sectionTitle}
        </div>
        <div>
          {info.achievements?.points?.length > 0 ? (
            <ul className="mt-5 list-disc ml-5">
              {info.achievements?.points?.map((elem, index) => (
                <li key={elem + index}>{elem}</li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${info.summary?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 mb-[-10px] text-4xl pl-5 pr-5 pt-5 pb-1 border-b-4 border-gray-700 section-title">
          {info.summary?.sectionTitle}
        </div>
        <div>
          <p className="mt-5">{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${info.other?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="mt-5 mb-[-10px] text-4xl pl-5 pr-5 pt-5 pb-1 border-b-4 border-gray-700 section-title">
          {info.other?.sectionTitle}
        </div>
        <div>
          <p className="mt-5">{info.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTaget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];
    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }
    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];
    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievements, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTaget(source, target);
  }, [source]);
  
  
  return (
    <>
    <div ref={ref}>
    <div className="shadow-[1px_1px_4px_rgba(0,0,0,0.12)] ml-64 mt-7 w-[65%] min-h-[550px] box-border print:ml-0 print:mt-0 print:w-full print:text-gray-800 text-gray-300">
        <div className="ml-8 mt-3 Resume ">
          <p className="text-6xl p-5">{info.basicInfo?.detail?.name}</p>
          <p className="text-lg text-teal-400 pl-5 mb-[20px] mt-[-15px] section-title">
            {info.basicInfo?.detail?.title}
          </p>
          <div className="flex items-center text-sm gap-20">
            {info.basicInfo?.detail?.phone ? (
              <a className="flex items-center gap-2">
                <Phone className="font-icon"/>
                {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span></span>
            )}

            {info.basicInfo?.detail?.email ? (
              <a className="flex items-center gap-2">
                <AtSign className="font-icon"/>
                {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className="flex items-center gap-2">
                <Linkedin className="font-icon"/>
                {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className="flex items-center gap-2">
                <GitHub className="font-icon" />
                {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className="flex justify-between p-5 gap-[20px]">
          <div className="w-[48%] print:w-full print:text-black text-gray-300">{columns[0].map((item) => sectionDiv[item])}</div>
          <div className="w-[48%] print:w-full print:text-black text-gray-300">{columns[1].map((item) => sectionDiv[item])}</div>
        </div>
      </div>
      </div>
    </>
  );
});

export default Resume;
