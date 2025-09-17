import React from "react";
import Window from "./Window";
import Drawer from "./Drawer";

const Links = ({
  isOpen,
  setIsOpen,
  isMuted,
  position,
  id,
  zIndex,
  isMobile,
}) => {
  const content = ["linkedin", "github", "artwork"];

  const icons = {
    linkedin: "/assets/svgicons/square-linkedin-brands-solid-full.svg",
    github: "/assets/svgicons/github-brands-solid-full.svg",
    artwork: "/assets/svgicons/palette-solid-full.svg",
  };

  const links = {
    linkedin: "https://www.linkedin.com/in/aniyahc/",
    github: "https://github.com/ascurry12",
    artwork: "javascript:;",
  };

  return isMobile ? (
    <Drawer
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"links"}
      height={"h-screen"}
    >
      {" "}
      <div className="flex flex-row ml-4 mr-4 text-center font-display tracking-widest">
        {content.map((content, index) => {
          return (
            <div key={index} className="m-5">
              <a
                href={links[content]}
                target={content != "artwork" ? "_blank" : null}
              >
                <img
                  src={icons[content]}
                  className="hover:bg-black/10 hover:rounded-lg w-20 mx-auto mb-0 invert-13 hue-rotate-301 saturate-2479 brightness-92 contrast-80 dark:invert-100 dark:contrast-100 dark:brightness-113"
                  alt={`${content} icon`}
                ></img>
              </a>
              <div>
                <p className="mb-0">{content}</p>
                {content == "artwork" ? <p className="">(coming soon)</p> : ""}
              </div>
            </div>
          );
        })}
      </div>
    </Drawer>
  ) : (
    <Window
      title="links"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
      height={"h-40"}
    >
      <div className="flex flex-row ml-4 mr-4 text-center font-display tracking-widest">
        {content.map((content, index) => {
          return (
            <div key={index} className="m-5">
              <a
                href={links[content]}
                target={content != "artwork" ? "_blank" : null}
              >
                <img
                  src={icons[content]}
                  className="hover:bg-black/10 hover:rounded-lg w-20 mx-auto mb-0 invert-13 hue-rotate-301 saturate-2479 brightness-92 contrast-80 dark:invert-100 dark:contrast-100 dark:brightness-113"
                  alt={`${content} icon`}
                ></img>
              </a>
              <div>
                <p className="mb-0">{content}</p>
                {content == "artwork" ? <p className="">(coming soon)</p> : ""}
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
};

export default Links;
