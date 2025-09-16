import React from "react";
import Window from "./Window";

const Music = ({ isOpen, setIsOpen, isMuted, position, id, zIndex }) => {
  const playlists = [
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
    {
      name: "my favorites ❤︎",
      link: "javascript:;",
      description: "still curating - difficult choices",
      image: "/assets/playlistimages/cd.jpg",
    },
  ];
  return (
    <Window
      title="playlists"
      position={position}
      id={id}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isMuted={isMuted}
    >
      <div className="ml-4 mr-4">
        <h1 className="text-center pb-3 font-display tracking-widest text-[20px]">
          (some) of my music ♪
        </h1>
        <hr className="star-hr w-1/3 mx-auto"></hr>
        {playlists.map((playlist, index) => {
          return (
            <a
              key={index}
              href={playlist.link}
              target={playlist.name.includes("favorites") ? null : "_blank"}
              className="m-1"
            >
              <div
                className={`flex ${
                  index % 2 != 0 ? "bg-white dark:bg-darkcobalt" : "bg-window-blue"
                } p-2 rounded transition delay-20 duration-250 ease-in-out hover:-translate-y-0 hover:scale-102 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.75)]`}
              >
                <img className="w-20 rounded-md" src={playlist.image}></img>
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
