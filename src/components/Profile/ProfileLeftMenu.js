import React from 'react'
import { useContext } from 'react'
import { userDetailsData } from './P_profile';
import { Link } from 'react-router-dom';

const ProfileLeftMenu = () => {
    const context=useContext(userDetailsData);
    if (!context) {
        return <div>Loading...</div>; // or any appropriate fallback
    }
    const userData=context.userDetails;
    return (
        <div id='p_leftMenuContainer' className="leftMenuContainer">
            <div className='leftMenu'>
                <div className="leftPicContainer">
                    <div className="profilePic">
                        <img src={userData.userImg} alt="Profile Pic" />
                    </div>
                </div>
                <div className="profileOptions">
                    <Link className='reactRouterLinks' to={'/'}>
                        <div className="leftMenuOptions mainProfile">Profile</div>
                    </Link>
                    <Link className='reactRouterLinks' to={'/contributions'}>
                        <div className="leftMenuOptions contributions">Contributions</div>
                    </Link>
                    <Link className='reactRouterLinks' to={'/help'}>
                        <div className="leftMenuOptions help">Help</div>
                    </Link>
                    <Link className='reactRouterLinks' to={'/logout'}>
                        <div className="leftMenuOptions logout">Logout</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileLeftMenu
