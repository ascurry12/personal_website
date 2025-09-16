import React from "react";
import Window from "./Window";

const Creations = ({ isOpen, setIsOpen, isMuted, position, id, zIndex }) => {
  return (
    <Window
      title="creations"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
    >
      <div className="ml-4 mr-4">
        <h2>Hey there</h2>
        <h2>Hey there</h2>
        <h2>Hey there</h2>
        <h2>Hey there</h2>
        <h2>Hey thereHey thereHey thereHey thereHey thereHey there</h2>
      </div>
    </Window>
  );
};

export default Creations;
