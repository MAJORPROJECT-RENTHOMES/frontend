import { React, useContext, useEffect, useState } from 'react'
import DataContext from '../../context/Data/DataContext';
// import UserContext from '.../Context/User/UserContext';
import Card from './Card/Card'
import { useNavigate } from 'react-router-dom';
import Caraousel from './Caraousel/Caraousel';
// import kuchbhinaam from '../../images/';

const Home = () => {

  const { data} = useContext(DataContext);
  const navigate = useNavigate();
  // console.log(data);
  // const { user } = useContext(UserContext);

  // const [data, setData] = useState([])
  
//   useEffect(() => {
//     setData(tmp);
//     console.log(data);
//     // console.log(localStorage);
//     // if (localStorage.getItem('u-token')) {
      
//     // }
//     // else {
//     //     navigate('/login')
//     // }
//     // eslint-disable-next-line 
// }, [tmp])

//     const data = [
    // {
    //     id: 123,
    //     img: 'https://picsum.photos/300/200',
    //     owner: 'jfdsj',
    //     ownerEmail: 'kldsl',
    //     price: 150,
    //     description: 'lkdsals',
    //     title: 'dksl',
    //     beds: null,
    //     featured: 'ldsads'
    // },
//     {
//         id: 1234,
//         img: 'https://picsum.photos/300/200',
//         owner: 'kwsdnf',
//         ownerEmail: 'rgtr',
//         price: 180,
//         description: 'trdh',
//         title: 'rsth',
//         beds: null,
//         featured: 'trh'
//     },
//     {
//         id: 2537,
//         img: 'https://picsum.photos/300/200',
//         owner: 'thrsh',
//         ownerEmail: 'shrt',
//         price: 472,
//         description: 'thrsh',
//         title: 'trshs',
//         beds: null,
//         featured: 'trsh'
//     },
//     {
//         id: 2537,
//         img: 'https://picsum.photos/300/200',
//         owner: 'thrsh',
//         ownerEmail: 'shrt',
//         price: 472,
//         description: 'thrsh',
//         title: 'trshs',
//         beds: null,
//         featured: 'trsh'
//     },
// ]

// useEffect(() => {
//   // console.log(localStorage);
//   if (!localStorage.getItem('u-token')) {
//       navigate('/login')
//   }
//   // eslint-disable-next-line 
// }, [])

  return (
    <>
    <Caraousel/>
    <div className="Card-body">
      {data.map((e) => {
        // console.log(e);
        return <div key={e._id}>
          <Card id={e._id} type={e.title} imgUrl={e.img?e.img:`default.jpg`} price={e.price} area={e.type} specs={e.hostel} dateOfPost={e.createdAt} postedBy={e.currentOwner.username} img={e.currentOwner.profileImg}/>
        </div>
      })}
    </div>
    </>
  )
}

export default Home