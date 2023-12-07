import React, { useContext, useState } from 'react'
import DataContext from '../../../context/Data/DataContext';

const AddComment = (props) => {
    const {addComment} = useContext(DataContext);
    const [userComment, setUserComment] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(props.postID);
        addComment({postID: props.postID, text: userComment});
        setUserComment('');
    }

    const handleChange = (e) => {
        setUserComment(e.target.value);
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='textarea-form'>
            <textarea spellcheck="false" name="text" value={userComment} id="textarea" onChange={handleChange} placeholder='Please give review.... It Helps a lot'></textarea>
            <div>
            <button className='textarea-btn'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default AddComment