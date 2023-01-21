import React from 'react';
import './Navbar.css';
import {AssignmentIndOutlined, BorderAllRounded, Home, Language, NotificationImportantOutlined, PeopleOutlineOutlined, Search} from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';
import logo from './img/quora.jpg';




function Navbar(){
    return(
        <div className='navbar'>
            <div className='qHeader_logo'>
             <img src={logo} width="200px" alt="logo"/>
             

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
                <div className='qHeader_avatar'>
                    <Avatar/>
                </div>
                    <Language/>
                    <Button>질문하기</Button>



                

            </div>
        </div>

    );
}
export default Navbar;