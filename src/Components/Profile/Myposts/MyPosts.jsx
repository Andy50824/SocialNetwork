import React from 'react'
import s from './MyPosts.module.css';
import Post from './post/post.jsx'
import {reduxForm, Field, reset} from 'redux-form'
import {requiredFields, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControl/FormsControls';


const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div >
            
            <Field validate={[requiredFields, maxLength10]} 
            placeholder='New Post' component={Textarea} name={"newPostText"}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
    </form>
  )
}

const MyPostReduxForm = reduxForm({form: 'myNewPost'})(MyPostsForm)

const MyPosts = (props) => {
  const addPost = (values) => {
    console.log(values)
    props.onAddPost(values.newPostText)
  }
  let postItems = props.postData
  .map(p => <Post message={p.message} like={p.like} />)

  return (
    <div className={s.postBlock} onSubmit={props.handleSubmit}>
      <h3>My posts</h3>
      <div>
        <MyPostReduxForm onSubmit={addPost}/>
      </div>
      <div className={s.posts} >
        {postItems}
      </div>
    </div>
  )
}

export default MyPosts