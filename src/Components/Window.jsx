import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { useDraggable } from "@dnd-kit/core";
import closeSound from "../assets/audio/hover.mp3";

const Window = ({
  isOpen,
  setIsOpen,
  isMuted,
  title,
  position,
  id,
  children,
  zIndex,
  height,
  header = false,
  headerContents = null,
  message = null,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const [animateIn, setAnimateIn] = useState(false);
  const style = {
    transform: transform
      ? `translate3d(${position.x + transform.x}px, ${
          position.y + transform.y
        }px, 0)`
      : `translate3d(${position.x}px, ${position.y}px, 0)`,
    position: "fixed",
    zIndex: zIndex,
    touchAction: "none",
    visibility: isOpen ? "visible" : "hidden",
    opacity: isOpen ? 1 : 0,
    transition: animateIn
      ? "opacity 0.15s ease-in-out, transform 0.15s ease-in-out"
      : "opacity 0.15s ease-in-out",
  };

  const [playSound] = useSound(closeSound, {
    volume: 0.25,
    soundEnabled: !isMuted,
  });

  const handleCloseWindow = (id) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setAnimateIn(true);
      const timer = setTimeout(() => setAnimateIn(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div ref={setNodeRef} style={style}>
      <div
        className={`bg-white dark:bg-cobalt border-3 rounded-sm w-fit h-fit cursor-default drop-shadow-[5px_5px_8px_rgb(0,0,0,0.3)] dark:drop-shadow-[5px_5px_8px_rgb(0,0,0,0.7)] ${
          animateIn ? "animate-pop-in" : ""
        }`}
      >
        <div
          className={
            "bg-lightgray dark:bg-steel border-b-3 flex font-display tracking-widest text-2xl mx-auto pl-2 pr-2"
          }
        >
          <div className="flex-grow" {...listeners} {...attributes}>
            <p className="justify-start">{title}</p>
          </div>
          <button
            className="w-5 flex justify-end cursor-pointer ml-auto"
            style={{ pointerEvents: "auto", zIndex: 99999 }}
            onClick={(e) => {
              playSound();
              handleCloseWindow(id);
            }}
          >
            [X]
          </button>
        </div>
        {header ? (
          <div className="flex flex-col h-full relative">
            <div className="bg-white dark:bg-cobalt shadow-[0px_1px_2px_rgba(0,0,0,0.5)] pb-3 z-10">
              {headerContents}
            </div>
            <div
              className={`flex flex-col overflow-y-auto scroll-auto ${
                height || "h-100"
              }`}
            >
              {children}
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col overflow-y-auto scroll-auto ${
              height || "h-100"
            }`}
          >
            {children}
          </div>
        )}
        <div className="bg-lightgray dark:bg-steel border-t-3 border-cobalt dark:border-white flex font-display tracking-widest mx-auto pl-2 pr-2">
          {"ᯓ★"}
          {message}
        </div>
      </div>
    </div>
  );
};

export default Window;
