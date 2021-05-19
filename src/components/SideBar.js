import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="" 
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
        </div>
    )
}

export default SideBar
