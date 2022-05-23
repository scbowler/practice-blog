import React, { useEffect, useState } from 'react';
import DeleteModal from '../components/delete-modal';
import Post from '../components/post';
import Title from '../components/title';
import { blog } from '../lib';

function ViewPosts() {
  const [ posts, setPosts ] = useState(null);
  const [ postToDelete, setPostToDelete ] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await blog.getPosts();
      
      setPosts(posts);
    }

    getPosts();
  }, []);

  const deletePost = async () => {
    await blog.deletePost(postToDelete.id);
    
    const updatedPosts = [...posts];
    const index = updatedPosts.findIndex(p => p.id === postToDelete.id);
    updatedPosts.splice(index, 1);

    setPosts(updatedPosts);
    setPostToDelete(null);
  }
  
  return (
    <div className="container">
      <Title>All Posts</Title>
      <ul className="list-group list-group-flush">
        {
          posts
            ? posts.map(post => <Post key={post.id} {...post} onDelete={() => setPostToDelete(post)}/>)
            : <li className='text-center'>Posts Loading...</li>
        }
      </ul>
      <DeleteModal post={postToDelete} close={() => setPostToDelete(null)} deletePost={deletePost}/>
    </div>
  );
}

export default ViewPosts;
