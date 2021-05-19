import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">

                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfcwxpxBo_uFK-p4fNNG-2XEJvhLq01ypfQ&usqp=CAU"
                    alt=""
                />

                <div className="header__search">
                    {/* search icon (material ui) */}
                    <SearchIcon />
                    <input type="text" placeholder="search" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={QuestionAnswerIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hAfJ-1oO1vOVg9l6R8mLGaHa_VFL5GbHAQ&usqp=CAU" title="Me" />
            </div>
        </div>
    )
}

export default Header;
