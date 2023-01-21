import React from 'react';
import './Navbar.css';
import {AssignmentIndOutlined, BorderAllRounded, Home, NotificationImportantOutlined, PeopleOutlineOutlined, Search} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';



function Navbar(){
    return(
        <div className='Navbar'>
            
            <div className='qHeader_logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg" alt=""/>

            </div>
            <div className='qHeader_icons'>
                <div className='qHeader_icon'>
                    <Home/>
                </div>
                  <div className='qHeader_icon'>
                    <BorderAllRounded/>
                </div>
                  <div className='qHeader_icon'>
                    <AssignmentIndOutlined/>
                </div>
                  <div className='qHeader_icon'>
                    <PeopleOutlineOutlined/>
                </div>
                  <div className='qHeader_icon'>
                    <NotificationImportantOutlined/>
                </div>
         
            </div>
            <div className='qHeader_input'>
                <input type="text" placeholder='검색하기'/>
                <Search/>


            </div>
            <div className='qHeader_Rem'>
                <dvi className='qHeader_avatar'>
                    <Avatar/>


                </dvi>

            </div>
        </div>

    );
}
export default Navbar;