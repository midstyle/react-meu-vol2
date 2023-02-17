import "../style/sidenav.css";
import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiExit } from "react-icons/bi";

function sidenav() {
  return (
    <div className="flexbox-container">
      <div className="sidebar">
        <div className="item-icons">
          <div className="flexbox-item flexbox-item-1">
            <a href="dashboard">
              <BsFillHouseFill />
            </a>
          </div>
        </div>
        <div className="flexbox-item flexbox-item-3">
          <a href="profilepage">
            <FaUserFriends />
          </a>
        </div>
        <div className="flexbox-item flexbox-item-4">
          <a href="registry">
            <BsFillBookFill />
          </a>
        </div>

        <div className="flexbox-item flexbox-item-5">
          <a href="classespage">
            <FaUserGraduate />
          </a>
        </div>

        <div className="small-icons">
          <div className="help-icon">
            <AiFillQuestionCircle />
          </div>
          <div className="help-icon">
            <a href="/">
              <BiExit />
            </a>
          </div>
          <br />
          <a href="#" className="more-abt">
            more about us
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}

export default sidenav;
