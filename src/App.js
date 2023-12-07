import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 

import UserState from './context/User/UserState';
import DataState from './context/Data/DataState';

import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Post from "./components/Home/Post";
import Profile from './components/Profile/Profile';
import AddHouse from './components/AddHouse/AddHouse'
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contributions from "./components/Profile/Contributions";
import PropertyDetail from "./components/Profile/PropertyDetail";
import AddNewProperty from "./components/Profile/AddNewProperty";
import HelpPage from "./components/Profile/HelpPage";
import Logout from "./components/Profile/Logout";
import P_profile from "./components/Profile/P_profile";

const App = () => {

  return (
    <UserState>
      <DataState>
        <Router>
          <Navbar/>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path='/post/:postID' element={<Post />} />
              <Route path='/about' element={<AboutUs/>} />
              {/* <Route path="/add" element={<AddNewProperty/>}/> */}
              <Route path="/profile/*" element={<P_profile/>}>
                {/* <Route path='/profile/profile' element={<Profile />} />
                <Route path='/profile/contributions' element={<Contributions />} />
                <Route path='/profile/contributions/:id' element={<PropertyDetail/>}/>
                <Route path='/profile/addNewProperty' element={<AddNewProperty/>}/>
                <Route path='/profile/help' element={<HelpPage />} />
                <Route path='/profile/logout' element={<Logout />} /> */}
              </Route>
              {/* <Route path="/profile/profile" element={<Profile/>}/>
              <Route path='/profile/contributions' element={<Contributions/>} />
              <Route path='/profile/contributions/:id' element={<PropertyDetail/>}/>
              <Route path='/profile/addNewProperty' element={<AddNewProperty/>}/>
              <Route path='/profile/help' element={<HelpPage/>} />
              <Route path='/profile/logout' element={<Logout />} /> */}
            </Routes>
          </div>
        </Router>
        </DataState>
    </UserState>
  )
}

// export default App


// ****************

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"; 

// import UserState from './context/User/UserState';
// import DataState from './context/Data/DataState';

// import Navbar from './components/Navbar'
// import Home from './components/Home/Home'
// import Post from "./components/Home/Post";
// import Profile from './components/Profile/Profile';
// import AddHouse from './components/AddHouse/AddHouse'
// import AboutUs from "./components/AboutUs";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Contributions from "./components/Profile/Contributions";
// import PropertyDetail from "./components/Profile/PropertyDetail";
// import AddNewProperty from "./components/Profile/AddNewProperty";
// import HelpPage from "./components/Profile/HelpPage";
// import Logout from "./components/Profile/Logout";
// import P_profile from "./components/Profile/P_profile";
// import { useContext, useState } from "react";

// const UserContext=useContext();
// const App = () => {

//   const [user, setUser] = useState({name: '', email: '',user_mongo_id:''});
//   const [userDetails,setUserDetails]=useState(null);
//   const [contri,setContri]=useState([]);

//   return (
//     <UserContext.Provider value={{user,setUser,}}>
//       <Router>
//         <Navbar/>
//         <div>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/signup" element={<Signup/>}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path='/post/:postID' element={<Post />} />
//             <Route path='/about' element={<AboutUs/>} />
//             <Route path="/add" element={<AddHouse/>}/>
//             <Route path="/profile" element={<Profile/>}/>
//             {/* <Route path="/profile" element={<P_profile/>}/> */}
//             <Route path='/profile/contributions' element={<Contributions/>} />
//             <Route path='/profile/contributions/:id' element={<PropertyDetail/>}/>
//             <Route path='/profile/addNewProperty' element={<AddNewProperty/>}/>
//             <Route path='/profile/help' element={<HelpPage/>} />
//             <Route path='/profile/logout' element={<Logout />} />
//           </Routes>
//         </div>
//       </Router>
//     </UserContext.Provider>
//   )
// }

export default App
// export {UserContext};