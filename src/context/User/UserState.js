import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext';

const UserState = (props) => {

    // const [userDetails,setUserDetails]=useState(null);
    // const [contri,setContri]=useState([]);
    const [user, setUser] = useState({name: '', email: '',user_mongo_id:''});
    console.log(1);

    return (
        <UserContext.Provider value={{user, setUser,}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState