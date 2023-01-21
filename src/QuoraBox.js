import { Avatar } from '@material-ui/core';
import React from 'react';
import './QuoraBox.css';

function QuoraBox() {
    return(
        < div className='quorabox'>
            <div className='quorabox_info'>
                <Avatar/>
                <h5> 리액트 깎는 CIT </h5>
            </div>
            <div className='quorabox_quora'>
                <p> 무엇이 궁금하신가요?</p>

            </div>

        </div>
    );
}

export default QuoraBox;