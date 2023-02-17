import React from "react";
import Sidenav from "./sidenav";
import "../style/studentspage.css";
import { BsPeopleFill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";

function students() {
  return (
    <div>
      <Sidenav />
      <h1>Students SE0_</h1>
      <div className="grid-container-classes" id="blur">
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
        <div className="item-list-classes">
          <a href="registryinformation">Student</a>
        </div>
      </div>
      <div className="adding-removing">
        <button className="adding-icon" onClick={window['add']}>
          <AiOutlinePlus />
        </button>

        <button className="minus-icon">
          <BiMinus />
        </button>
      </div>
      <div id="popup-add">
        <div className="leftside">
          <h1 contenteditable="True">Student X</h1>
          <div className="attendance">
            <h3>Attendance:</h3>
            <h3 className="box2" contenteditable="True"></h3>
          </div>
          <div className="progress-tr">
            <h3>Progress track:</h3>
            <div className="small-circles">
              <div className="green-s"></div>
              <div className="orange-s"></div>
              <div className="red-s"></div>
            </div>
          </div>
          <h3>
            Comments:{" "}
            <em>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, quasi
            </em>
          </h3>
          <div className="contact-p">
            <MdCall/>
          </div>
          <div className="contact-a">
            <BsHouseFill/>
          </div>
        </div>
        <div className="rightside">
          <h3 className="rtext">
            Team: <span contenteditable="True"></span>{" "}
          </h3>
          <h3 className="rtext">Age: </h3>
          <div className="bio">
            <h3 className="rtext">Bio: </h3>
            <h3 className="biobox" contenteditable="True"></h3>
          </div>
        </div>
        <div className="savebutton">
          <a href="#">
            <button className="savebtn" onClick={window['add']}>
              Save
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default students;
