import React, {useState} from 'react';
import './Navbar.css'
import {
    AssignmentIndOutlined,
    BorderAllRounded, ExpandMore,
    Home, Language, Link,
    NotificationsOutlined,
    PeopleAltOutlined, Search
} from "@material-ui/icons";
import {Avatar, Button, Input} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import db, {auth} from "./firebase";
import Modal from 'react-modal';

//firebase와 firestore 임포트 방식변화 주의!
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';









function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    // const questions = firebase.firestore.collection('questions');

    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenModal(false)

        //firebase db(firestore) 연동(db에 기록)
        db.collection("questions").add({
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
            user: user,
        });

        //입력후 초기화 code!

        setInput("");
        setInputUrl("");


    }

    return (
        <div className="navbar">

            <div className="qHeader_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png" width='200px'
                    alt=""/>

            </div>

            <div className="qHeader_icons">

                <div className="qHeader_icon">
                    <Home />
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded/>
                </div>

                <div className="qHeader_icon">
                    <AssignmentIndOutlined/>
                </div>

                <div className="qHeader_icon">
                    <PeopleAltOutlined/>
                </div>
                <div className="qHeader_icon">
                    <NotificationsOutlined/>

                </div>

            </div>


            <div className="qHeader_input">
                <input type="text" placeholder="검색하기"/>
                <Search/>

            </div>

            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                </div>
                <Language/>
                <Button onClick={() => setOpenModal(true)}> 질문하기 </Button>

                <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                       shouldCloseOnOverlayClick={false}
                       style={{
                           overlay: {
                               width: 700,
                               height: 600,
                               backgroundColor: "rgba(0,0,0,0.8)",
                               zIndex: "1000",
                               top: "50%",
                               left: "50%",
                               marginTop: "-300px",
                               marginLeft: "-350px",
                           }
                       }}>
                    <div className="modal_title">
                        <h5> 질문 </h5>
                        <h5> 공유하기 </h5>
                    </div>
                    <div className="modal_info">
                        <Avatar src={user.photo}/>
                        <p> 질문자 : {user.displayName ? user.displayName : user.email}</p>

                        <div className="modal_scope">
                            <PeopleAltOutlined/>
                            <p> 전체공개 </p>
                            <ExpandMore/>
                        </div>

                    </div>

                    <div className="modal_Field">
                        <Input type="text" placeholder="궁금하신 내용을 작성해주세요! :)" required value={input} onChange={(e) => setInput(e.target.value)}/>

                        <div className="modal_fieldLink">
                            <Link/>
                            <Input type="text" placeholder="url링크만 작성" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>

                        </div>


                    </div>

                    <div className="modal_buttons">
                        <button type="text" className="add" onClick={handleQuestion}> 질문하기</button>

                        <button onClick={() => setOpenModal(false)}  className="can" >닫기</button>
                    </div>

                </Modal>


            </div>


        </div>
    );
}

export default Navbar;