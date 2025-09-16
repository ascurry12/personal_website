import React from "react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const abbreviatedMonths = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  return (
    <footer className="bg-fuschia bg-gradient-to-b from-fuschia to-fuschiagradient drop-shadow-[0_-4px_12px_rgba(237,27,150,0.45)] dark:drop-shadow-[0_-4px_12px_rgba(237,27,150,0.35)] z-50 font-display text-xl tracking-widest rounded-t-md shadow-sm dark:bg-darkcobalt dark:bg-gradient-to-t dark:from-darkcobalt dark:to-darkcobaltgradient">
      <div className="w-full mx-auto max-w-screen-l p-2 sm:flex sm:items-end sm:justify-end">
        <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-darkcobalt-500 dark:text-white-400 sm:mt-0">
          <li>
            <p className="me-2 text-pitchblack dark:text-white">
              {daysOfWeek[time.getDay()]} {abbreviatedMonths[time.getMonth()]}{" "}
              {time.getDate()}{" "}
              {time.getHours() > 12 ? time.getHours() - 12 : time.getHours() == 0 ? 12 : time.getHours()}:
              {String(time.getMinutes()).padStart(2, "0")}{" "}
              {time.getHours() >= 12 ? "PM" : "AM"}
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
