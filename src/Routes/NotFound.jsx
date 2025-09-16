import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-50">
      <h1 className="font-display text-8xl pb-10">404 - Page Not Found</h1>
      <p className="font-body-1 text-4xl pb-10">The page you are looking for does not exist.</p>
      <Link className="font-body-1 bg-fuschia/50 rounded-lg text-[30px] p-3 hover:bg-fuschia/65 transition delay-20 duration-250 ease-in-out hover:-translate-y-1 hover:scale-115 cursor-pointer" to="/">[Return to Home Page]</Link>
    </div>
  );
};

export default NotFound;
