import React, { useEffect, useState } from 'react';
import './Feed.css';
import db from './firebase';
import Post from './Post';
import QuoraBox from './QuoraBox';

function Feed() {
    const [posts, setPosts] = useState([]);


    // db(firestore)에서 데이터 가져오기 (내림차순으로!)
    useEffect(() => {
        db.collection("questions").orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(
            (doc) => (({
                //db doc에 기록된id소환!
                id: doc.id,
                //docs에 있는 모든데이터를 불러오는 코드
                question: doc.data()
            }))
        )))
    }, [])


    return(
        <div className='feed'>
            <QuoraBox/>
            {posts.map(({id, question}) => (
                <Post key ={id} Id={id} image={question.imageUrl}
                question={question.question} timestamp={question.timestamp}
                quoraUser={question.user} />
            ))}

        </div>

    );
}

export default Feed;