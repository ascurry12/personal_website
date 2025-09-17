import React from "react";
import Window from "./Window";
import Drawer from "./Drawer";

const Music = ({
  isOpen,
  setIsOpen,
  isMuted,
  position,
  id,
  zIndex,
  isMobile,
}) => {
  const playlists = [
    {
      name: "my favorites ❤︎",
      link: "https://music.youtube.com/watch?list=PL7Q7YPyf6kMPW0upadgj8bYk5D8uf_CU3&si=mq_FscHC7f_tACef&shuffle=1",
      description: "a little random - but that's what makes it good",
      image: "/assets/playlistimages/cd.jpg",
    },

    {
      name: "christmas ❆",
      link: "https://music.youtube.com/watch?list=PL7Q7YPyf6kMNGDmCK367Rdn6Xrphwn3rh&si=JePtWIdyAWWfaIsJ&shuffle=1",
      description: "it's never too early",
      image: "/assets/playlistimages/christmas.jpg",
    },
    {
      name: "the best of the sims ♦",
      link: "https://music.youtube.com/watch?list=PL7Q7YPyf6kMNRyx2HfvPT1k-dBXhIdnou&shuffle=1",
      description: "because i love this game",
      image: "/assets/playlistimages/ts2.png",
    },
    {
      name: "pinkpantheress ✮",
      link: "https://music.youtube.com/watch?list=PL7Q7YPyf6kMOVihdwaA5m-pj9xtFcqXzv&si=utzks4TACFA_NZMs&shuffle=1",
      description: "who doesn't love pink?",
      image: "/assets/playlistimages/pinkpantheress.jpg",
    },
  ];
  return isMobile ? (
    <Drawer
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"playlists"}
      height={"h-screen"}
    >

      <div className="mx-auto">
        <div>
          <h1 className="text-center pb-3 font-display tracking-widest text-[18px]">
            (some of) my music ♪
          </h1>
          <hr className="star-hr w-1/3 mx-auto"></hr>
        </div>
        {playlists.map((playlist, index) => {
          return (
            <a
              key={index}
              href={playlist.link}
              target={"_blank"}
              className="m-1"
            >
              <div
                className={`flex w-80 ${
                  index % 2 != 0
                    ? "bg-lightgray dark:bg-steel"
                    : "bg-window-blue"
                } p-2 rounded transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-102 shadow-[0px_2px_2px_rgba(0,0,0,0.5)]`}
              >
                <img
                  className="w-20 h-20 rounded-md"
                  src={playlist.image}
                ></img>
                <div className="ml-4">
                  <h3 className="font-display tracking-widest">
                    {playlist.name}
                  </h3>
                  <p className="font-body-1 text-[12px]">
                    {playlist.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Drawer>
  ) : (
    <Window
      title="playlists"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
      height={"h-[300px]"}
      header={true}
      headerContents={
        <div>
          <h1 className="text-center pb-3 font-display tracking-widest text-[18px]">
            (some of) my music ♪
          </h1>
          <hr className="star-hr w-1/3 mx-auto"></hr>
        </div>
      }
    >
      <div className="ml-4 mr-4">
        {playlists.map((playlist, index) => {
          return (
            <a
              key={index}
              href={playlist.link}
              target={"_blank"}
              className="m-1"
            >
              <div
                className={`flex w-80 ${
                  index % 2 != 0
                    ? "bg-lightgray dark:bg-steel"
                    : "bg-window-blue"
                } p-2 rounded transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-102 shadow-[0px_2px_2px_rgba(0,0,0,0.5)]`}
              >
                <img
                  className="w-20 h-20 rounded-md"
                  src={playlist.image}
                ></img>
                <div className="ml-4">
                  <h3 className="font-display tracking-widest">
                    {playlist.name}
                  </h3>
                  <p className="font-body-1 text-[12px]">
                    {playlist.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Window>
  );
};

export default Music;
