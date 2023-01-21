import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className='post'>
            <div className='post_info'>
                <Avatar/>
                <h5> user ID </h5>
                <small> 작성시간 </small>


            </div>
            <div className='post_body'>
                <div className='post_question'>
                    <p> 질문내용 입니다.</p>

                    <button className='post_btnAnswer'>답변하기</button>


                </div>

                <div className='post_answer'>
                    <p> 답변입니다.</p>
                </div>
                <img src='http://drive.google.com/uc?export=view&id=1r2zjTXTER7yE_p93hCtC9c2jKovTi_sv' alt="답변그림"/>

            </div>

            <div className='post_footer'>
                <div className='post_footerAction'>
                    <ArrowUpwardOutlined/>
                    <ArrowDownwardOutlined/>

                </div>
                <RepeatOneOutlined/>
                <ChatBubbleOutlineOutlined/>
            </div>
            <div className='post_footerRight'>
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>

        </div>
    );
}

export default Post;