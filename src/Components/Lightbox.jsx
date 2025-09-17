import React from "react";
import { useEffect, useState } from "react";

const Lightbox = ({ image = null, isOpen, setIsOpen, isMuted, isMobile, isPortrait }) => {
  const [visible, setVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-0");

  const handleLightboxClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let timeout;

    if (isOpen && !visible) {
      setVisible(true);
      setTimeout(() => setFadeClass("opacity-100"), 10);
    } else if (visible) {
      setFadeClass("opacity-0");
      timeout = setTimeout(() => setVisible(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return image ? (
    <div
      onClick={(e) => {
        handleLightboxClose();
      }}
      className={` ${
        isMobile ? "bg-black/50" : "bg-black/25"
      } transition-opacity duration-300 ease-in-out ${fadeClass} flex flex-col ${
        visible ? "z-[3000]" : "z-[-1]"
      } justify-center p-5 mx-auto fixed inset-0 hover:cursor-zoom-out`}
    >
      <div className="flex flex-col">
        <img
          className={`${!isPortrait && isMobile ? "w-[50vh] mx-auto" : "w-full"} max-h-120 object-contain mb-4 rounded`}
          src={image.image}
        ></img>
        <div
          className={`font-body-1 ${
            isMobile ? " text-white" : "text-black"
          } dark:text-white`}
        >
          <h1 className=" font-display text-[25px] tracking-widest">
            {image.title}
          </h1>
          <p className="text-[18px] pb-2">[ {image.description} ]</p>
          {image.tools.map((tool, index) => {
            return (
              <p
                className="bg-fuschia/20 w-fit px-2 rounded-md mr-2"
                key={index}
              >
                {tool}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
};

export default Lightbox;
