import React, { useState } from "react";
import "../style/dashboard.css";
import { BsFillGearFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import Sidenav from "../jsx/sidenav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div class="time">
        <h1>12:42</h1>
        <h2>Good afternoon, User</h2>
      </div>

      <div class="settings-icon">
        <a href="#">
          <BsFillGearFill />
        </a>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      <div class="notification">
        <div class="notif-icon">
          <BiBell />
          <div class="notif-message">
            <p>You have a meeting in 20 Minutes!</p>
          </div>
        </div>
      </div>

      <div class="calendar_img">
        <img src="dasboard2\calendar-removebg-preview.png" alt="" />
      </div>
      <a href="/" class="sign-out">
        Sign Out
      </a>
      <Sidenav />
    </div>
  );
}

export default Dashboard;
