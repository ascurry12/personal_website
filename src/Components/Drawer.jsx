import React from "react";
import { useState, useEffect } from "react";

const Drawer = ({ isOpen, setIsOpen, title, id, height, children }) => {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "drawer-backdrop") {
      console.log("Closing drawer with id:", id);
      setIsOpen((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  useEffect(() => {
    if (isOpen && !visible) {
      setVisible(true);
      setAnimationClass("drawer-animate-in");
    } else if (visible){
      setAnimationClass("drawer-animate-out");
      const timeout = setTimeout(() => {
        setVisible(false)
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      id="drawer-backdrop"
      onClick={handleClose}
      className="flex flex-col z-2000 justify-center mx-auto fixed inset-0"
    >
      <div
        className={`fixed bottom-0 bg-white dark:bg-cobalt w-screen rounded-t-md shadow-[0px_-2px_3px_rgba(0,0,0,0.25)] dark:shadow-[0px_-2px_3px_rgba(255,255,255,0.2)] ${animationClass}`}
      >
        <div className="bg-lightgray dark:bg-steel font-display tracking-widest text-[25px] border-black dark:border-white border-[1.5px] rounded-t-md top-0 px-2 py-1 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.5)] z-3000">
          <h1>{title}</h1>
        </div>
        <div
          className={`flex flex-col max-h-100 max-w-screen overflow-y-auto scroll-auto  ${
            height || "h-30"
          }
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
