import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './QuoraBox.css';

function QuoraBox() {
    // 유저정보가져오기
    const user = useSelector(selectUser);

    return(
        < div className='quorabox'>
            <div className='quorabox_info'>
                <Avatar src={user.photo}/>
                <h5> {user.displayName} </h5>
            </div>
            <div className='quorabox_quora'>
                <p> 무엇이 궁금하신가요?</p>

            </div>

        </div>
    );
}

export default QuoraBox;