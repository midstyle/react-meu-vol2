import React from "react";
import "../style/registry.css";
import { BiMinus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import Sidenav from "./sidenav"

function registry() {
  return (
    <div>
      <Sidenav/>
      <h1>Registry</h1>
      <div className="grid-container" id="blur">
        <div className="rounded-corner1">Name</div>
        <div>Attendence</div>
        <div>Progress Tracker</div>
        <div>Contact details</div>
        <div className="rounded-corner2">Comments</div>
        <div>
          <a href="registryinformation">Student 1</a>
        </div>
        <div>98%</div>
        <div className="green-colour"></div>
        <div>
          <a href="#" onClick={window['contact']}>
            +94
          </a>
        </div>
        <div contenteditable="True">comment</div>
        <div>Student 2</div>
        <div>80%</div>
        <div className="green-colour"></div>
        <div>
          <a href="#" onClick={window['contact']}>
            +94
          </a>
        </div>
        <div contenteditable="True">comment</div>
        <div>Student 3</div>
        <div>98%</div>
        <div className="orange-colour"></div>
        <div>
          <a href="#" onClick={window['contact']}>
            +94
          </a>
        </div>
        <div contenteditable="True">comment</div>
        <div>Student 4</div>
        <div>98%</div>
        <div className="red-colour"></div>
        <div>
          <a href="#" onClick={window['contact']}>
            +94
          </a>
        </div>
        <div contenteditable="True">comment</div>
        <div className="rounded-corner3">Student 5</div>
        <div>98%</div>
        <div className="edit">
          <a href="#" onClick={window['colour']}>
            <AiFillEdit/>
          </a>
        </div>
        <div>
          <a href="#" onClick={window['contact']}>
            +94
          </a>
        </div>
        <div className="rounded-corner4">comment</div>
      </div>
      <div className="adding-removing">
        <button onClick={window['add']} className="adding-icon">
          <AiOutlinePlus />
        </button>

        <button className="minus-icon">
          <BiMinus />
        </button>
      </div>

      <div className="contact" id="popup-contact">
        <h1 className="head">Student's contact</h1>
        <h1 className="head"></h1>
        <h2 className="small-head">Personal Contact Details:</h2>
        <h2 className="small-head">Parent's Contact Details:</h2>
        <h3 className="info">
          <i className="fa-solid fa-phone"></i> +94 123-456-789
        </h3>
        <h3 className="info">
          <i className="fa-solid fa-phone"></i> +94 123-456-789
        </h3>
        <h3 className="info">
          <i className="fa-solid fa-house"></i> Lorem, ipsum dolor.
        </h3>
        <h3 className="info">
          <i className="fa-solid fa-house"></i> Lorem, ipsum dolor.
        </h3>
        <button value="" className="close-btn" onClick={window['contact']}>
          <AiOutlineClose/>
        </button>
      </div>

      <div id="popup-color">
        <div className="circles">
          <div className="green"></div>
          <div className="orange"></div>
          <div className="red"></div>
          <button value="" className="close-btn" onClick={window['colour']}>
            <AiOutlineClose/>
          </button>
        </div>
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

export default registry;
