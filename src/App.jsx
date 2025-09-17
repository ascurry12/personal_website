import { useState, useEffect, cache } from "react";
import { DndContext } from "@dnd-kit/core";
import useSound from "use-sound";
import "./App.css";
import Footer from "./Components/Footer";
import Icon from "./Components/Icon";
import About from "./Components/About";
import Creations from "./Components/Creations";
import Links from "./Components/Links";
import Music from "./Components/Music";
import Popup from "./Components/Popup";
import clickSound from "/assets/audio/click.mp3";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState(new Date());

  const [openImage, setOpenImage] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState({
    about: false,
    creations: false,
    links: false,
    playlists: false,
    popup: false,
  });

  const [positions, setPositions] = useState({
    about: {
      x: Math.floor(window.innerWidth / 2) - 400,
      y: Math.floor(window.innerHeight / 6),
    },
    creations: {
      x: Math.floor(window.innerWidth / 2) - 350,
      y: Math.floor(window.innerHeight / 8),
    },
    links: {
      x: Math.floor(window.innerWidth / 2) - 50,
      y: Math.floor(window.innerHeight / 2),
    },
    playlists: {
      x: Math.floor(window.innerWidth / 2) - 250,
      y: Math.floor(window.innerHeight / 4),
    },
    popup: {
      x: Math.floor(window.innerWidth / 3) - 100,
      y: Math.floor(window.innerHeight / 3),
    },
  });

  const [zIndices, setZIndices] = useState({
    about: 1,
    creations: 2,
    links: 3,
    playlists: 4,
    popup: 5,
  });

  const [playClick] = useSound(clickSound, {
    volume: 0.25,
    soundEnabled: !isMuted,
  });

  const icons = ["about", "creations", "playlists", "links"];

  const daysOfWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const abbreviatedMonths = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const handleOpenWindow = (id) => {
    setZIndices((prev) => {
      const maxZ = Math.max(...Object.values(prev), 0);
      return {
        ...prev,
        [id]: maxZ + 1,
      };
    });
    setIsOpen((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleDragStart = (event) => {
    const { active } = event;
    setZIndices((prev) => {
      const maxZ = Math.max(...Object.values(prev), 0);
      return {
        ...prev,
        [active.id]: maxZ + 1,
      };
    });
  };

  const handleDragEnd = (event) => {
    const { active, delta } = event;
    setPositions((pos) => {
      const prev = pos[active.id];
      return {
        ...pos,
        [active.id]: {
          x: prev.x + delta.x,
          y: prev.y + delta.y,
        },
      };
    });
  };

  const restrictToScreenSize = (positions) => {
    return ({ transform, active }) => {
      const id = active?.id;
      const currentPos = positions[id] || { x: 0, y: 0 };

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      /*       console.log("screen-w", screenWidth);
      console.log("screen-h", screenHeight); */

      const nodeWidth = active?.width || 0;
      const nodeHeight = active?.height || 0;
      /* 
      console.log("node-w", nodeWidth);
      console.log("node-h", nodeHeight); */

      const maxX = screenWidth + 10;
      const maxY = screenHeight - 80;
      /* 
      console.log("max-x", maxX);
      console.log("max-y", maxY); */

      const totalX = currentPos.x + transform.x;
      const totalY = currentPos.y + transform.y;
      /* 
      console.log("total-x", totalX);
      console.log("total-y", totalY); */

      const clampedX = Math.min(Math.max(totalX, -200), maxX) - currentPos.x;
      const clampedY = Math.min(Math.max(totalY, 0), maxY) - currentPos.y;

      /*       console.log("clamped-x", clampedX);
      console.log("clamped-y", clampedY); */

      return {
        x: clampedX,
        y: clampedY,
      };
    };
  };

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const getThemeInStorage = () => {
    return localStorage.getItem("theme");
  };

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  const toggleAudio = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen((prev) => ({
        ...prev,
        popup: true,
      }));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedTheme = getThemeInStorage();
    setIsDark(storedTheme === "true");
  }, []);

  useEffect(() => {
    setThemeInStorage(isDark);

    if (getThemeInStorage(isDark) === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log(getThemeInStorage(), isDark);
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white bg-center bg-no-repeat bg-contain bg-fixed bg-[url('/assets/heartlight.png')] text-darkcobalt dark:text-white dark:bg-[url('/assets/heartdark.png')] dark:bg-pitchblack">
      <div className="flex-1 flex">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-6 min-h-0 md:h-100 md:w-60 md:max-h-full md:grid-cols-2 md:grid-rows-3 md:grid-flow-col ">
          {isMobile ? (
            <div className="font-display col-span-3 row-span-4 md:col-span-3 md:row-span-1 mx-auto text-center mt-20">
              <h2 className="text-2xl">
                {daysOfWeek[time.getDay()]},{" "}
                {abbreviatedMonths[time.getMonth()]} {time.getDate()}{" "}
              </h2>
              <h1 className="text-8xl">
                {time.getHours() > 12
                  ? time.getHours() - 12
                  : time.getHours() == 0
                  ? 12
                  : time.getHours()}
                :{String(time.getMinutes()).padStart(2, "0")}
              </h1>
            </div>
          ) : null}
          {icons.map((icon, index) => {
            return (
              <Icon
                key={index}
                id={icon}
                label={icon}
                onMouseDown={playClick}
                onClick={() => {
                  handleOpenWindow(icon);
                }}
              />
            );
          })}
          <Icon
            key={5}
            label={isDark ? "displayDark" : "displayLight"}
            onMouseDown={playClick}
            onClick={toggleDark}
          />
          <Icon
            key={6}
            label={isMuted ? "muted" : "unmuted"}
            onMouseDown={playClick}
            onClick={toggleAudio}
          />
        </div>
        {/* Drawers and windows */}
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToScreenSize(positions)]}
        >
          <About
            id="about"
            position={positions["about"]}
            zIndex={zIndices["about"]}
            isOpen={isOpen["about"]}
            setIsOpen={setIsOpen}
            isMuted={isMuted}
            isMobile={isMobile}
          />
          <Creations
            id="creations"
            position={positions["creations"]}
            zIndex={zIndices["creations"]}
            isOpen={isOpen["creations"]}
            setIsOpen={setIsOpen}
            isMuted={isMuted}
            setOpenImage={setOpenImage}
            openImage={openImage}
            setLightboxIsOpen={setLightboxIsOpen}
            lightboxIsOpen={lightboxIsOpen}
            isMobile={isMobile}
          />
          <Links
            id="links"
            position={positions["links"]}
            zIndex={zIndices["links"]}
            isOpen={isOpen["links"]}
            setIsOpen={setIsOpen}
            isMuted={isMuted}
            isMobile={isMobile}
          />
          <Music
            id="playlists"
            position={positions["playlists"]}
            zIndex={zIndices["playlists"]}
            isOpen={isOpen["playlists"]}
            setIsOpen={setIsOpen}
            isMuted={isMuted}
            isMobile={isMobile}
          />
          <Popup
            id="popup"
            position={positions["popup"]}
            zIndex={zIndices["popup"]}
            isOpen={isOpen["popup"]}
            setIsOpen={setIsOpen}
            isMuted={isMuted}
            isMobile={isMobile}
          />
        </DndContext>
      </div>
      {isMobile ? null : <Footer />}
    </div>
  );
}

export default App;
