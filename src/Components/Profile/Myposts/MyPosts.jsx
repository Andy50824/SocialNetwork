import React from 'react'
import s from './MyPosts.module.css';
import Post from './post/post.jsx'


const MyPosts = (props) => {
  let postItems = props.postData
  .map(p => <Post message={p.message} like={p.like} />)

  let newPostEl = React.createRef();

  let addPost = () => {
    props.onAddPost()
  }

  let onPostChange =() => {
    let text = newPostEl.current.value;
    props.onPostChange(text)    
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div >
          <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts} >
        {postItems}
      </div>
    </div>
  )
}

export default MyPosts