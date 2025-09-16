import React, { useRef } from "react";

const Icon = ({ label, onMouseDown, onClick }) => {
  const icons = {
    about: "/assets/windowsxp/Information.png",
    links: "/assets/windowsxp/Entire Network.png",
    creations: "/assets/windowsxp/Folder Opened.png",
    displayLight: "/assets/windowsxp/Awake.png",
    displayDark: "/assets/windowsxp/Hibernate.png",
    playlists: "/assets/windowsxp/Audio CD.png",
    muted: "/assets/windowsxp/Mute.png",
    unmuted: "/assets/windowsxp/Volume.png",
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onClick={onClick}
      className="m-5 mb-0  md:w-24 md:h-0 pb-0 font-display mx-auto text-darkcobalt dark:text-white transition delay-20 duration-250 ease-in-out hover:-translate-y-1 hover:scale-115 cursor-pointer"
    >
      <img
        src={icons[label]}
        className="w-1/2 md:w-2/3 mx-auto text-center"
      ></img>
      <p className="text-center tracking-widest drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_1px_1px_rgba(199,199,199,0.53)]">
        {label == "displayLight" || label == "displayDark"
          ? "display"
          : label == "muted" || label == "unmuted"
          ? "audio"
          : label}
      </p>
    </div>
  );
};

export default Icon;
