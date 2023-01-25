import React, {useEffect, useState} from 'react';
import './Post.css'
import {Avatar, Input} from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutlineOutlined, ExpandMore, Link, MoreHorizOutlined, PeopleAltOutlined,
    RepeatOneOutlined, ShareOutlined
} from "@material-ui/icons";
import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {selectQuestionId, selectQuestionName, setQuestionInfo} from "./features/questionSlice";
import {selectUser} from "./features/userSlice";
import firebase from "./firebase";
import db from "./firebase";
Modal.setAppElement("#root");

function Post() {
function Post( {key, Id, image, question, quoraUser }) {

    const [openModal, setOpenModal] = useState(false);
    const [answer, setAnswer] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName);
const [getAnswer, setGetAnswer] = useState([]);


    const handleAnswer = (e) => {
        e.preventDefault();

        if (questionId){
            db.collection('questions').doc(questionId).collection('answer').add({
                questionId: questionId,
                // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    answer: answer,
                    user: user,
                })


            console.log(questionId, questionName)
            setAnswer("")
            setOpenModal(false)
        }
    }


    useEffect(() => {
        if (questionId) {
            db.collection('questions').doc(questionId).collection('answer').orderBy("desc")
                .onSnapshot((snapshot =>
                    setGetAnswer(
                        snapshot.docs.map((doc) =>
                            ({id: doc.id, answers: doc.data()}))
                    )))
        }
    },[questionId])
}


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