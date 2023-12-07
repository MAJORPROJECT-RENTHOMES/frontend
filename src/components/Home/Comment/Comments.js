import React, { useContext } from 'react'
import CommentCard from './CommentCard'
import DataContext from '../../../context/Data/DataContext'
import AddComment from './AddComment';
import './comment.css'

const Comments = (props) => {
  console.log(props.postID);
  const {comments} = useContext(DataContext);

  return (
    <>
    <h2>Comments</h2>
    <div className='comments-cont'>
        <AddComment postID={props.postID}/>
        <div className='comments-card'>
        {comments.map((e) => {
        return <div className='commentcard-body' key={e._id}>
          <CommentCard id={e._id} imgUrl={e.author.profileImg} name={e.author.username} update={e.updatedAt} text={e.text}/>
        </div>
      })}
        </div>
    </div>
    </>
  )
}

export default Comments