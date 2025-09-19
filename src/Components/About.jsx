import React from "react";
import Window from "./Window";
import Drawer from "./Drawer";

const About = ({
  isOpen,
  setIsOpen,
  isMuted,
  position,
  id,
  zIndex,
  isMobile,
  isPortrait,
}) => {
  var devSkills = ["ReactJS", "ASP.NET", "Azure", "Git", "Storybook"];

  var artSkills = ["Procreate", "Adobe Illustrator", "Blender"];

  var codingLanguages = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "C++",
    "C#",
    "C",
  ];

  return isMobile ? (
    <Drawer
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"about"}
      height={"h-[50vh]"}
      isPortrait={isPortrait}
    >
      <div className="bg-white dark:bg-cobalt shadow-[0px_1px_2px_rgba(0,0,0,0.5)] mb-1 pb-3">
        <div className="flex flex-wrap flex-col">
          <img
            className="w-50 mt-2 mx-auto rounded-[50%] border-2"
            src="/assets/me.JPG"
          ></img>
          <div className="w-fit mt-5 mx-auto">
            <h1 className="text-5xl font-display tracking-widest mx-auto ml-4">
              Aniyah Curry
            </h1>
            <hr className="star-hr w-1/2 mx-auto m-5"></hr>
            <div className="text-center font-body-1 text-[18px]">
              <h2>hobbyist artist</h2>
              <h2>+</h2>
              <h2>aspiring front-end & game developer</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="font-body-1 text-[20px] mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">Education</h2>
        <h3 className="tracking-tight">
          <strong>Bachelor of Science</strong> in{" "}
          <span className="bg-window-darkpurple/40 dark:bg-window-darkpurple/60 rounded px-1">
            Computer Science
          </span>
          , <strong>2025</strong>
        </h3>
        <h4 className="tracking-tight">Cum Laude | University Honors</h4>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <div className="">
          <h2 className="font-display tracking-widest text-4xl">
            Tools + Frameworks
          </h2>
          <div className="flex flex-wrap">
            {devSkills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(237,27,150,0.50)] drop-shadow-[3px_3px_0_rgba(237,27,150,0.45)] rounded-[5px] mr-3 px-1 my-1 text-[16px]"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-2">
          <h2 className="font-display tracking-widest text-4xl pt-3">
            Coding Languages
          </h2>
          <div className="flex flex-wrap">
            {codingLanguages.map((language, index) => {
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(127,183,251,0.50)] drop-shadow-[3px_3px_0_rgba(127,183,251,0.45)] rounded-[5px] mr-3 px-1 my-1 text-[16px]"
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">Art Software</h2>
        <div className="flex flex-wrap">
          {artSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(255,212,229,0.70)] drop-shadow-[3px_3px_0_rgba(255,212,229,0.85)] rounded-[5px] mr-3 px-1 text-[16px] my-1"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">
          Natural Languages
        </h2>
        <div className="flex flex-wrap">
          <div className="bg-black/10 dark:bg-white/10 rounded-2xl px-2 text-[16px]">
            🇰🇷 Korean (Intermediate)
          </div>
        </div>
      </div>
      <hr className="my-3 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">
          Interests + Hobbies
        </h2>
        <div className="text-[16px]">
          <ul className=" list-disc pl-5">
            <li>
              <strong>Gaming:</strong> The Sims (especially 2 & 3!), Overwatch,
              Marvel Rivals, Stardew Valley
            </li>
            <li>
              <strong>Movies & TV:</strong> Marvel Cinematic Universe, Horror,
              Thriller, Dramas
            </li>
            <li>
              <strong>Other:</strong> Musicals, Amusement Parks, Language
              Learning, Books, Gardening, Cooking{" "}
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  ) : (
    <Window
      title="about"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
      height={"h-[450px]"}
    >
      <div className="bg-white dark:bg-cobalt shadow-[0px_1px_2px_rgba(0,0,0,0.5)] mb-1 pb-3">
        <div className="ml-4 mr-4 flex mx-auto">
          <img
            className="w-50 mt-2 mr-10 ml-6 rounded-[50%] border-2"
            src="/assets/me.JPG"
          ></img>
          <div className="w-fit mt-5 ml-10">
            <h1 className="text-5xl font-display tracking-widest mx-auto ml-2">
              Aniyah Curry
            </h1>
            <hr className="star-hr w-1/2 mx-auto m-5"></hr>
            <div className="text-center font-body-1 text-[18px]">
              <h2>hobbyist artist</h2>
              <h2>+</h2>
              <h2>aspiring front-end & game developer</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="font-body-1 text-[20px] mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">Education</h2>
        <h3 className="tracking-tight">
          <strong>Bachelor of Science</strong> in{" "}
          <span className="bg-window-darkpurple/40 dark:bg-window-darkpurple/60 rounded px-1">
            Computer Science
          </span>
          , <strong>2025</strong>
        </h3>
        <h4 className="tracking-tight">Cum Laude | University Honors</h4>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <div className="">
          <h2 className="font-display tracking-widest text-4xl">
            Tools + Frameworks
          </h2>
          <div className="flex">
            {devSkills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(237,27,150,0.50)] drop-shadow-[3px_3px_0_rgba(237,27,150,0.45)] rounded-[5px] mr-3 px-1 text-[16px]"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-2">
          <h2 className="font-display tracking-widest text-4xl pt-3">
            Coding Languages
          </h2>
          <div className="flex">
            {codingLanguages.map((language, index) => {
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(127,183,251,0.50)] drop-shadow-[3px_3px_0_rgba(127,183,251,0.45)] rounded-[5px] mr-3 px-1 text-[16px]"
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">Art Software</h2>
        <div className="flex">
          {artSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-darkcobalt border-black dark:border-white border-1 dark:drop-shadow-[3px_3px_0_rgba(255,212,229,0.70)] drop-shadow-[3px_3px_0_rgba(255,212,229,0.85)] rounded-[5px] mr-3 px-1 text-[16px]"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-2 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">
          Natural Languages
        </h2>
        <div className="flex">
          <div className="bg-black/10 dark:bg-white/10 rounded-2xl px-2 text-[16px]">
            🇰🇷 Korean (Intermediate)
          </div>
        </div>
      </div>
      <hr className="my-3 border-t-1"></hr>
      <div className="font-body-1 mx-4 my-2">
        <h2 className="font-display tracking-widest text-4xl">
          Interests + Hobbies
        </h2>
        <div className="text-[16px]">
          <ul className=" list-disc pl-5">
            <li>
              <strong>Gaming:</strong> The Sims (especially 2 & 3!), Overwatch,
              Marvel Rivals, Stardew Valley
            </li>
            <li>
              <strong>Movies & TV:</strong> Marvel Cinematic Universe, Horror,
              Thriller, Dramas
            </li>
            <li>
              <strong>Other:</strong> Musicals, Amusement Parks, Language
              Learning, Books, Gardening, Cooking{" "}
            </li>
          </ul>
        </div>
      </div>
    </Window>
  );
};

export default About;
