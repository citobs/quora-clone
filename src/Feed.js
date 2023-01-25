import React, { useEffect, useState } from 'react';
import './Feed.css';
import db from './firebase';
import Post from './Post';
import QuoraBox from './QuoraBox';

function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection("questions").orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(
            (doc) => (({
                id: doc.id,
                question: doc.data()
            }))
        )))
    }, [])


    return(
        <div className='feed'>
            <QuoraBox/>
            <Post/>

        </div>

    );
}

export default Feed;