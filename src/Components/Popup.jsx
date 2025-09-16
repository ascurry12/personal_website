import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Window from "./Window";
import { TypeAnimation } from "react-type-animation";
import popupSound from "/assets/audio/popup.mp3";

const Popup = ({ isOpen, setIsOpen, isMuted, position, id, zIndex, isMobile }) => {
  const [popupPlayed, setPopupPlayed] = useState(false);

  const [playPopup] = useSound(popupSound, {
    volume: 0.25,
    soundEnabled: !isMuted,
  });

  useEffect(() => {
    if (isOpen && !popupPlayed && !isMobile) {
      console.log("Playing popup sound");
      playPopup();
      setPopupPlayed(true);
    }
  }, [isOpen, popupPlayed, playPopup]);

  return ( isMobile ? <></> :
    <Window
      title="welcome"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
      height="h-[140px]"
      message={" don't forget to click, drag, and scroll!"}
    >
      <div className="ml-4 mr-4 my-4 font-body-1 tracking-tighter text-[16px] text-center">
        <TypeAnimation
          sequence={[
            2000, "Welcome to Aniyah's Desktop...\nFeel free to look around! <3  ★"
          ]}
          speed={20}
          style={{
            height: "200px",
            width: "500px",
            whiteSpace: "pre-line",
            fontSize: "2em",
            display: "inline-block",
          }}
        />
      </div>
    </Window>
  );
};

export default Popup;
