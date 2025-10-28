import React, { useEffect } from "react";
import { useState } from "react";
import Window from "./Window";
import Lightbox from "./Lightbox";
import Drawer from "./Drawer";

const Creations = ({
  isOpen,
  setIsOpen,
  isMuted,
  position,
  id,
  zIndex,
  lightboxIsOpen,
  setLightboxIsOpen,
  openImage,
  setOpenImage,
  isMobile,
  isPortrait,
}) => {
  // complete, wip (in progress), pre (planning)
  const projects = [
    {
      title: "La Cuillère",
      description:
        "A desktop application for creating and managing personal recipe collections",
      tools: ["TypeScript", "Next.js", "Supabase", "DaisyUI", "ReactJS"],
      image: "/assets/svgicons/book-solid-full.svg",
      link: "https://github.com/ascurry12/recipe-bookshelf",
      completion: "wip",
    },
    {
      title: "SiftySifty",
      description:
        "A desktop application to assist with testing & troubleshooting mods in The Sims",
      tools: ["Python", "Tkinter"],
      image: "/assets/projectimages/plumbob.svg",
      link: "https://github.com/ascurry12/siftysifty",
      completion: "wip",
    },
    {
      title: "Movie Dash",
      description: "A dashboard that displays information about movies",
      tools: ["JavaScript", "ReactJS"],
      image: "/assets/svgicons/film-solid-full.svg",
      link: "https://github.com/ascurry12/moviedash",
      completion: "complete",
    },
  ];

  const artwork = [
    {
      title: "Jelly",
      description: "A little jelly guy",
      tools: ["Blender"],
      image: "/assets/art/jelly3.png",
    },
    {
      title: "Tearoom (WIP)",
      description: "Inspired by Japanese teahouses",
      tools: ["Blender"],
      image: "/assets/art/tearoomwip.png",
    },
    {
      title: "Star",
      description: "A cool star",
      tools: ["Blender"],
      image: "/assets/art/star.png",
    },

    {
      title: "Cuphead & Mugman",
      description: "Cuphead and Mugman from Cuphead",
      tools: ["Procreate"],
      image: "/assets/art/Cuphead_&_Mugman.jpg",
    },
    {
      title: "Plumbob",
      description: "A plumbob from The Sims!",
      tools: ["Blender"],
      image: "/assets/art/plumbob.png",
    },
    {
      title: "Kuzco",
      description: "Sketch of Kuzco from The Emperor's New Groove",
      tools: ["Procreate"],
      image: "/assets/art/Kuzco.jpg",
    },
    {
      title: "in the clouds",
      description: "Inspired by Jean-Honoré Fragonard's 'The Swing'",
      tools: ["Procreate"],
      image: "/assets/art/in_the_clouds.jpg",
    },
    {
      title: "Isolation",
      description: "Allegorical self-portrait",
      tools: ["Procreate"],
      image: "/assets/art/Isolation.jpg",
    },
    {
      title: "Olaf",
      description: "Sketch of Olaf from Frozen",
      tools: ["Procreate"],
      image: "/assets/art/Olaf.jpg",
    },
    {
      title: "Beppi",
      description: "Beppi The Clown from Cuphead",
      tools: ["Procreate"],
      image: "/assets/art/Clown.jpg",
    },

    {
      title: "Genie",
      description: "Sketch of Genie from Aladdin",
      tools: ["Procreate"],
      image: "/assets/art/Genie.jpg",
    },
  ];

  const chunkedImages = [];
  for (let i = 0; i < artwork.length; i += 4) {
    chunkedImages.push(artwork.slice(i, i + 4));
  }

  const handleLightboxOpen = (art) => {
    setOpenImage(art);
    setLightboxIsOpen(true);
  };

  return isMobile ? (
    <>
      <Drawer
        id={id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"creations"}
        height={"h-[50vh]"}
        isPortrait={isPortrait}
      >
        <div
          className={`font-body-1 my-2 ${
            isPortrait ? "w-fit" : "w-screen"
          } mx-auto`}
        >
          <h2 className="font-display tracking-widest text-4xl mb-2 ml-3">
            Projects
          </h2>
          <div className="flex flex-col m-3">
            {projects.map((project, index) => {
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  className="bg-black/10 dark:bg-black/25 rounded-md mb-4 shadow-[0px_3px_3px_rgba(0,0,0,0.5)] transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-102"
                >
                  <div className="w-fit p-3 ">
                    <img
                      className={`w-18 ${
                        project.image.includes("svg") &&
                        !project.image.includes("plumbob")
                          ? "invert-13 hue-rotate-301 saturate-2479 brightness-92 contrast-80 dark:invert-100 dark:contrast-100 dark:brightness-113"
                          : ""
                      }`}
                      src={project.image}
                    ></img>
                    <div className="">
                      <h1 className="font-display tracking-widest text-[18px]">
                        {project.title}
                      </h1>
                      <p className="font-body-1 text-[15px]">
                        {project.description}
                      </p>
                      <div className="flex my-2">
                        {project.tools.map((tool, index) => {
                          return (
                            <p
                              className="bg-lightgray/80 dark:bg-white/10 rounded text-[14px] px-1 mr-1"
                              key={index}
                            >
                              {tool}
                            </p>
                          );
                        })}
                      </div>
                      <p
                        className={`text-[14px] w-fit rounded-xl px-2 ${
                          project.completion == "complete"
                            ? "bg-green-600/50 dark:bg-green-400/30"
                            : project.completion == "wip"
                            ? "bg-yellow-400/50 dark:bg-yellow-400/30"
                            : project.completion == "pre"
                            ? "bg-blue-400/50 dark:bg-blue-400/30"
                            : null
                        }`}
                      >
                        {project.completion == "complete"
                          ? "Complete"
                          : project.completion == "wip"
                          ? "In Progress"
                          : project.completion == "pre"
                          ? "Planning"
                          : null}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="font-body-1 my-2 m-auto w-fit">
          <h2 className="font-display tracking-widest text-4xl pl-3 ">
            Art Gallery
          </h2>
          <div className="flex flex-col w-fit bg-lightgray/30 dark:bg-black/25 p-3 rounded-md">
            {artwork.map((art) => {
              return (
                <button
                  onClick={() => {
                    handleLightboxOpen(art);
                  }}
                  key={art.title}
                  className="rounded m-0 pb-3 transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-105 hover:cursor-zoom-in"
                >
                  <img
                    className={`h-auto w-full ${
                      isPortrait ? "max-w-md" : "max-w-screen"
                    } rounded-md`}
                    id={art.title}
                    src={art.image}
                    alt={art.title}
                  ></img>
                </button>
              );
            })}
          </div>
        </div>
      </Drawer>
      <Lightbox
        image={openImage}
        isMuted={isMuted}
        setIsOpen={setLightboxIsOpen}
        isMobile={isMobile}
        isOpen={lightboxIsOpen}
        isPortrait={isPortrait}
      />
    </>
  ) : (
    <>
      <Window
        title="creations"
        position={position}
        id={id}
        zIndex={zIndex}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isMuted={isMuted}
      >
        <div className="ml-4 mr-4 max-w-160">
          <div className="font-body-1 my-2">
            <h2 className="font-display tracking-widest text-4xl">Projects</h2>
            <div className="grid grid-cols-2">
              {projects.map((project, index) => {
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="bg-black/10 dark:bg-black/25 rounded-md m-2 shadow-[0px_3px_3px_rgba(0,0,0,0.5)] transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-102"
                  >
                    <div className="w-fit p-3 ">
                      <img
                        className={`w-18 ${
                          project.image.includes("svg") &&
                          !project.image.includes("plumbob")
                            ? "invert-13 hue-rotate-301 saturate-2479 brightness-92 contrast-80 dark:invert-100 dark:contrast-100 dark:brightness-113"
                            : ""
                        }`}
                        src={project.image}
                      ></img>
                      <div>
                        <h1 className="font-display tracking-widest text-[18px]">
                          {project.title}
                        </h1>
                        <p className="font-body-1 text-[15px]">
                          {project.description}
                        </p>
                        <div className="flex my-2">
                          {project.tools.map((tool, index) => {
                            return (
                              <p
                                className="bg-lightgray/80 dark:bg-white/10 rounded text-[14px] px-1 mr-1"
                                key={index}
                              >
                                {tool}
                              </p>
                            );
                          })}
                        </div>
                        <p
                          className={`text-[14px] w-fit rounded-xl px-2 ${
                            project.completion == "complete"
                              ? "bg-green-600/50 dark:bg-green-400/30"
                              : project.completion == "wip"
                              ? "bg-yellow-400/50 dark:bg-yellow-400/30"
                              : project.completion == "pre"
                              ? "bg-blue-400/50 dark:bg-blue-400/30"
                              : null
                          }`}
                        >
                          {project.completion == "complete"
                            ? "Complete"
                            : project.completion == "wip"
                            ? "In Progress"
                            : project.completion == "pre"
                            ? "Planning"
                            : null}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="font-body-1 my-2">
            <h2 className="font-display tracking-widest text-4xl">
              Art Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-lightgray/30 dark:bg-black/25 p-4 rounded-md">
              {chunkedImages.map((chunk, index) => {
                return (
                  <div key={index} className="grid gap-4 aspect-square">
                    {chunk.map((art) => {
                      return (
                        <button
                          onClick={() => {
                            handleLightboxOpen(art);
                          }}
                          key={art.title}
                          className="rounded m-0 p-0 transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-105 hover:cursor-zoom-in"
                        >
                          <img
                            className="h-auto max-w-full rounded-md "
                            id={art.title}
                            src={art.image}
                            alt={art.title}
                          ></img>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Window>
      <Lightbox
        image={openImage}
        isMuted={isMuted}
        setIsOpen={setLightboxIsOpen}
        isMobile={isMobile}
        isOpen={lightboxIsOpen}
        isPortrait={isPortrait}
      />
    </>
  );
};

export default Creations;
