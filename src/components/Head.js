import React from "react";
import HamburgerIcon from "../assest/hamburger-icon.jpg";
import YoutubeLogo from "../assest/YouTube-Logo.png";
import UserIcon from "../assest/UserIcon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      {/* Section-1 */}
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src={HamburgerIcon}
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8 mx-2" src={YoutubeLogo} alt="youtubelogo" />
        </a>
      </div>

      {/* Section-2 */}
      <div className="col-span-10 px-10 text-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>

      {/* Section-3 */}
      <div className="col-span-1">
        <img className="h-8" alt="usericon" src={UserIcon} />
      </div>
    </div>
  );
};

export default Head;