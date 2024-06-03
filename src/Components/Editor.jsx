import React, { useState } from "react";
import InputControl from "./InputControl";
import { X } from "react-feather";
import { useEffect } from "react";

const Editor = (props) => {
  const sections = props.sections;
  const information = props.information;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };
  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetails = details.slice(-1)[0];
    if (!Object.keys(lastDetails).length) return;
    details?.push({});
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };
  const basicInfoBody = (
    <div className="BasicInfo">
      <div className="flex gap-10">
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-10">
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-10">
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const workExpBody = (
    <div  className="WorkExp">
      <div className="flex gap-[20px]">
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-[20px]">
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className="mt-[-10px]">
        <div className="flex justify-items-stretch gap-5">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
      </div>

      <div>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />

        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />

        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className="Project">
      <div className="flex gap-10 ">
        <InputControl
          label="Title"
          placeholder="Enter title eg. Chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
          value={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
      </div>
      <div className="flex gap-10">
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div>
        <label className="font-bold">Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />

        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />

        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />

        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className="Education">
      <div>
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className="flex gap-20">
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className="Achievement">
      <div>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />

        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />

        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />

        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className="Summary">
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className="Other">
      <InputControl
        label="Other"
        placeholder="Enter something"
        value={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievements: {
        const tempPoints = values.points;
        props.setInformation((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;
        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.other: {
        const tempDetail = values.other;
        props.setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  useEffect(() => {
    const activeInformation = information[sections[activeSectionKey]];
    setActiveInformation(activeInformation);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInformation?.detail?.name || "",
      title: activeInformation?.details
        ? activeInformation.details[0]?.title || ""
        : activeInformation?.detail?.title,
      linkedin: activeInformation?.detail?.linkedin || "",
      github: activeInformation?.details
        ? activeInformation.details[0]?.github || ""
        : activeInformation?.detail?.github,
      phone: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
      summary:
        typeof activeInformation?.detail !== "object"
          ? activeInformation.detail
          : "",
      other:
        typeof activeInformation?.detail !== "object"
          ? activeInformation.detail
          : "",
      companyName: activeInformation?.details
        ? activeInformation.details[0]?.companyName || ""
        : "",
      certificationLink: activeInformation?.details
        ? activeInformation.details[0]?.certificationLink || ""
        : "",
      location: activeInformation?.details
        ? activeInformation.details[0]?.location || ""
        : "",
      startDate: activeInformation?.details
        ? activeInformation.details[0]?.startDate || ""
        : "",
      endDate: activeInformation?.details
        ? activeInformation.details[0]?.endDate || ""
        : "",
      overview: activeInformation?.details
        ? activeInformation.details[0]?.overview || ""
        : "",
      link: activeInformation?.details
        ? activeInformation.details[0]?.link || ""
        : "",
      college: activeInformation?.detail?.college || "",
      points: activeInformation?.details
        ? activeInformation.details[0]?.points
          ? [...activeInformation.details[0]?.points]
          : ""
        : activeInformation.points
        ? [...activeInformation.points]
        : "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;
    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.overview || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);

  return (
    <>
      <div className="shadow-[1px_1px_4px_rgba(0,0,0,0.12)] ml-64 mt-7 w-[65%] min-h-[550px]">
        <div className="border b-2 p-2 Selector">
          <div className="flex justify-between ml-5 mr-5 cursor-pointer">
            {Object.keys(sections)?.map((key) => (
              <div
                className={`px-3 py-1 ${
                  activeSectionKey === key
                    ? "text-teal-500 underline"
                    : "text-gray-300"
                }`}
                key={key}
                onClick={() => setActiveSectionKey(key)}
              >
                {sections[key]}
              </div>
            ))}
          </div>
        </div>
        <div>
          <InputControl
            label="Title"
            placeholder="Enter section title here."
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
          <div className="cursor-pointer flex gap-10">
            {activeInformation?.details
              ? activeInformation?.details?.map((item, index) => (
                  <div
                    key={item.title + index}
                    onClick={() => {
                      setActiveDetailIndex(index);
                    }}
                    className={`${
                      activeDetailIndex === index
                        ? "flex bg-teal-400 text-white rounded-xl pl-3 pr-3 pt-1 pb-1 gap-2"
                        : "flex bg-gray-700 text-white rounded-xl pl-3 pr-3 pt-1 pb-1 gap-2"
                    }`}
                  >
                    <p>
                      {sections[activeSectionKey]} {index + 1}
                    </p>
                    <X
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                    />
                  </div>
                ))
              : ""}
            {activeInformation?.details &&
            activeInformation?.details?.length > 0 ? (
              <div onClick={handleAddNew}>+New</div>
            ) : (
              ""
            )}
          </div>
          {generateBody()}
          <div className="flex justify-center mr-5 mt-[5px]">
            <button
              type="button"
              className="bg-teal-400 p-3 flex items-center rounded-xl cursor-pointer text-black Save"
              onClick={handleSubmission}
            >
              Save{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
