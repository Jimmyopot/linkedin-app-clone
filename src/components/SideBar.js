import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdaE1oTuRHevXEby1B1cPZDfgrg8SWs0PBQ&usqp=CAU" 
                    alt="" 
                />
                <Avatar className="sidebar__avatar" />
                <h2>GreyFish</h2>
                <h4>greyfish@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,467</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,000</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("React Js")}
                {recentItem("Angular")}
                {recentItem("Vue Js")}
                {recentItem("PHP")}
                {recentItem("Python")}
                {recentItem("Django")}
            </div>
        </div>
    )
}

export default SideBar
