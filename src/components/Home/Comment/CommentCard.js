import React from 'react'
import { useState, useEffect } from 'react';

const CommentCard = ({id, imgUrl, name, update, text}) => {

  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const mongodbDate = new Date(update); // Replace this with your actual date
    const currentDate = new Date();
    const timeDifference = currentDate - mongodbDate;
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      setTimeAgo(`${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`);
    } else if (monthsAgo > 0) {
      setTimeAgo(`${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`);
    } else if (daysAgo > 0) {
      setTimeAgo(`${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`);
    } else if (hoursAgo > 0) {
      setTimeAgo(`${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`);
    } else if (minutesAgo > 0) {
      setTimeAgo(`${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`);
    } else {
      setTimeAgo(`${secondsAgo} ${secondsAgo === 1 ? 'second' : 'seconds'} ago`);
    }
  }, [update]);

  return (
    <div className="commentcard-cont">
      <div className="commentcard-cont1">
        <img src={imgUrl?`https://homezy-real.glitch.me/images/${imgUrl}`:`https://homezy-real.glitch.me/images/default.jpg`} alt="" />
        <div className='commentcard-span'>{name} &nbsp; &nbsp; Last edited: {timeAgo}</div>
      </div>
      <div className="commentcard-cont2">
        {text}
      </div>
    </div>
  )
}

export default CommentCard