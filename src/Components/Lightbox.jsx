import React from "react";

const Lightbox = ({ image = null, isOpen, setIsOpen, isMuted }) => {
  const handleLightboxClose = () => {
    setIsOpen(false);
  };

  return image ? (
    <div
      onClick={(e) => {
        handleLightboxClose();
      }}
      className="bg-black/25 flex flex-col z-1000 justify-center p-5 mx-auto fixed inset-0 hover:cursor-zoom-out"
    >
      <div className="flex flex-col">
        <img className="w-full max-h-120 object-contain mb-4 rounded" src={image.image}></img>
        <div className="font-body-1 text-black dark:text-white">
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
