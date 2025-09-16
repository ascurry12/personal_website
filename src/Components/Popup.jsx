import React from "react";
import Window from "./Window";
import { TypeAnimation } from "react-type-animation";

const Popup = ({ isOpen, setIsOpen, isMuted, position, id, zIndex }) => {
  return (
    <Window
      title="welcome"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
      height="h-[140px]"
    >
      <div className="ml-4 mr-4 my-4 font-body-1 tracking-tighter text-[16px] text-center">
        <TypeAnimation
          sequence={[
            "Welcome to Aniyah's Desktop...\nFeel free to click around! <3  ★",
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
