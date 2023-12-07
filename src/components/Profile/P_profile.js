import { createContext, useContext, useEffect, useState } from 'react';
import './p_profile.css';
import Profile from './Profile';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import axios from 'axios';
import Contributions from './Contributions';
import PropertyDetail from './PropertyDetail';
import AddNewProperty from './AddNewProperty';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import HelpPage from './HelpPage';
import UserContext from '../../context/User/UserContext';

const userDetailsData=createContext();
function P_profile() {
  const [userDetails,setUserDetails]=useState(null);
  const [initialData,setInitialData]=useState(null);
  const [leftMenuVisible,setLeftMenuVisible]=useState(false);
  // let initialId;
  // const cntxt=useContext(UserContext);
  // useEffect(()=>{
  //   initialId=cntxt.user.user_mongo_id;
  // },[]);
  const initialId=localStorage.getItem('u-id');
  // console.log(cntxt);
  // const [initialId,setInitialId]=useState('65400c17482619a7209a3f79');
  // const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDAwYzE3NDgyNjE5YTcyMDlhM2Y3OSIsImlhdCI6MTY5ODY5NjIxNiwiZXhwIjoxNjk5Mzg3NDE2fQ.A061QGa7SIeG3gbKsqGiMseHfFYrVtunEvJ3bbyRNcg';
  const apiKey=localStorage.getItem('u-token');
  // console.log(initialId);
  // console.log(apiKey);
  const [contri,setContri]=useState([]);
  useEffect(() => {
    async function getInitialData(){
      const apiUrl = `https://homezy-real.glitch.me/profile/prof/${initialId}`; 
      const headers = {
        'Authorization': `Bearer ${apiKey}`
      };
      const res=await axios.get(apiUrl,{headers});
      console.log(res);
      let initialImage=`https://homezy-real.glitch.me/images/default.jpg`;
      if(res.data.profileImg){
        initialImage=`https://homezy-real.glitch.me/images/${(res.data).profileImg}`;
      }
      const initialuserName=res.data.username;
      const initialemail=res.data.email;
      const initialmobile=res.data.mobile;
      const tempInitialData={
        user_id:initialId,
        userName:'',
        userEmail:'',
        userMobile:'',
        userImg:''
      }
      tempInitialData.userName=initialuserName;
      tempInitialData.userEmail=initialemail;
      tempInitialData.userMobile=initialmobile;
      tempInitialData.userImg=initialImage;
      setInitialData(tempInitialData);
    }
    async function getInitialContri(){
      const apiUrl = `https://homezy-real.glitch.me/property/my`; 
      const headers = {
        'Authorization': `Bearer ${apiKey}`
      };
      const res=await axios.get(apiUrl,{headers});
      console.log(res);
      setContri(res.data);
    }
    getInitialData();
    getInitialContri();
  }, []);
  useEffect(()=>{
    console.log(initialData);
    setUserDetails(initialData);
  },[initialData]);
  const makeLeftMenuVisible=()=>{
    const leftMenu=document.getElementById('p_leftMenuContainer');
    if(leftMenuVisible===false){
      leftMenu.style.zIndex=2;
      leftMenu.style.visibility='visible';
      setLeftMenuVisible(true);
    }
    else{
      leftMenu.style.zIndex=-2;
      leftMenu.style.visibility='hidden';
      setLeftMenuVisible(false);
    }
  }
  return (
    <>
    {userDetails?
      (<userDetailsData.Provider value={{userDetails,setUserDetails,contri,setContri,apiKey}}>
        <div className="profileContainer">
            <div className="p_header">
              <Link className='reactRouterLinks' to={'/profile'}>
                <div className="p_options">Profile</div>
              </Link>
              <Link className='reactRouterLinks' to={'/profile/contributions'}>
                <div className="p_options">Contributions</div>
              </Link>
              <Link className='reactRouterLinks' to={'/profile/help'}>
                <div className="p_options">Help</div>
              </Link>
              {/* <Link className='reactRouterLinks' to={'/profile/logout'}>
                <div className="p_options">Logout</div>
              </Link> */}
            </div>

            {/* <Navbar/> */}
            {/* <Profile/> */}
            <Routes>
              <Route path='/' element={<Profile />} />
              <Route path='/contributions' element={<Contributions />} />
              <Route path='/contributions/:id' element={<PropertyDetail/>}/>
              <Route path='/addNewProperty' element={<AddNewProperty/>}/>
              <Route path='/help' element={<HelpPage />} />
              {/* <Route path='/logout' element={<Logout />} /> */}
            </Routes>
        </div>
      </userDetailsData.Provider>):
      (<></>)
    }
    </>
  );
}

export default P_profile;
export {userDetailsData};
