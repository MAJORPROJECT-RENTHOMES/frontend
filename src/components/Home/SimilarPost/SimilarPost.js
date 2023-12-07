import React, { useEffect, useContext } from 'react'
import DataContext from '../../../context/Data/DataContext'
import Card from '../Card/Card';
import './SimilarPost.css'

const SimilarPost = (props) => {

    const{similar, fetchSimilar} = useContext(DataContext);

    useEffect(()=>{
        fetchSimilar(props.postID);
    }, [])

  return (
    <>
        <h2>View Similar Rooms</h2>
    <div className="similar-body">
      {similar && similar.map((e) => {
        return <div key={e._id} onClick={()=>{window.location.reload()}}>
          <Card id={e._id} type={e.title} imgUrl={e.img?e.img:`default.jpg`} price={e.price} area={e.type} specs={e.hostel} dateOfPost={e.createdAt} postedBy={e.currentOwner.username} img={e.currentOwner.profileImg}/>
        </div>
      })}
    </div>
    </>
  )
}

export default SimilarPost
