import React, { useState } from 'react'
import './Timeline.css';
import Post from './posts/Post';
import Suggestions from './Suggestions';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Ali_",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "Zaigii_",
      postImage: "https://www.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg",
      likes: 56,
      timestamp: "1d",
    },
    {
      user: "Adnan_",
      postImage: "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      likes: 10,
      timestamp: "12h",
    },
    {
      user: "Hanzi_",
      postImage: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      likes: 50,
      timestamp: "2h",
    }
  ]);
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
        {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline;
