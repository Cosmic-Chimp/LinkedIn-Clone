import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";
import avatarImage from "../../abstracts/ken-cheung-KonWFWUaAuk-unsplash.jpg";

function SideBar() {
  // function that renders out some jsx instead
  // of having a completely diff file for separate component:
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  //
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={avatarImage} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Rueben Schoeman</h2>
        <h4>rubzdebruyn@gmail.com</h4>
      </div>
      {/*  */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">50</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">10</p>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("javascript")}
        {recentItem("typescript")}
      </div>
    </div>
  );
}

export default SideBar;
