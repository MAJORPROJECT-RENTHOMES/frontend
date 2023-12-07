import React, { useContext, useEffect, useState } from 'react'
import { userDetailsData } from './P_profile'
import axios from 'axios'
// import a from '../../im';

const Profile = () => {
    const context=useContext(userDetailsData);
    console.log(context);
    const userData=context.userDetails;
    const ApiKey=context.apiKey;
    const setUserData=context.setUserDetails;
    const [editedUserData,setEditedUserData]=useState(userData);
    const [enteredPassword,setEnteredPassword]=useState('');
    const [enteredConfirmPassword,setEnteredConfirmPassword]=useState('');
    const [editedImage,setEditedImage]=useState(null);
    
    const editBtn=()=>{
        const profileCard=document.getElementById('profileCard');
        profileCard.style.transform='rotateY(180deg)';
    }
    const submitEditedDetails=()=>{
        if(enteredPassword===enteredConfirmPassword){
            async function verifyUpdation(){
                const apiUrl = `https://homezy-real.glitch.me/profile/${userData.user_id}`; 
                const apiKey = ApiKey;
                const headers = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${apiKey}`
                };
                const formData = new FormData();
                formData.append('username', editedUserData.userName);
                formData.append('email', editedUserData.userEmail);
                formData.append('mobile', editedUserData.userMobile);
                formData.append('password', enteredPassword);
                formData.append('image', editedImage);
                const res= await axios.put(apiUrl,formData,{headers});
                console.log(res);
                const tempuserData={...editedUserData};
                tempuserData.userImg=require(`../../images/${res.data.profileImg}`);
                setEditedUserData(tempuserData);
            }
            verifyUpdation();
            setTimeout(() => {
                const profileCard=document.getElementById('profileCard');
                profileCard.style.transform='rotateY(0deg)';
            },1000);
        }
        else{
            console.log("New Password and Confirm New Password are different");
        }
    }
    useEffect(()=>{
        setUserData(editedUserData);
        console.log(userData);
    },[editedUserData,setEditedUserData])
    const editUserName=(e)=>{
        const tempUserData={...editedUserData};
        tempUserData.userName=e.target.value;
        setEditedUserData(tempUserData);
    }
    const editUserMobile=(e)=>{
        const tempUserData={...editedUserData};
        tempUserData.userMobile=e.target.value;
        setEditedUserData(tempUserData);
    }
    const editUserEmail=(e)=>{
        const tempUserData={...editedUserData};
        tempUserData.userEmail=e.target.value;
        setEditedUserData(tempUserData);
    }
    const handleImageChange = async(event) => {
        const file = event.target.files[0];
        setEditedImage(file);
    }
    const changeConfirmPassword=(e)=>{
        setEnteredConfirmPassword(e.target.value);
        console.log(e.target.style);
        const el=e.target;
        if(e.target.value!==enteredPassword){
            el.style.borderBottom='1px solid red';
        }
        else{
            el.style.borderBottom='1px solid black';
        }
    }
    return (
        <div id="profileCardContainer">
            <div id="profileCard">
                <div className="profileFront">
                    <div className='profileBox'>
                        <div className="profilePic">
                            <img src={userData.userImg} alt="Profile Pic" />
                        </div>
                        <div className="inps">
                            <div className="customInp">
                                <div className='profileHeading'>Name</div>
                                <div className='profileInfo' id='profileName'>{userData.userName}</div>
                            </div>
                            
                            <div className="customInp">
                                <div className='profileHeading'>Email-Id</div>
                                <div className='profileInfo' id='profileEmailId'>{userData.userEmail}</div>
                            </div>
                            <div className="customInp">
                                <div className='profileHeading'>Mobile Number</div>
                                <div className='profileInfo' id='profileMobileNo'>{userData.userMobile}</div>
                            </div>
                        </div>
                        <div id="p_editBtn" onClick={editBtn}>Edit</div>
                    </div>
                </div>
                <div className="profileBack">
                    <div className="editDetails">
                        <div className="p_myForm">
                            <label className='customLabel' htmlFor="p_username">Username:</label>
                            <input className='customEditInp' type="text" id="p_username" name="p_username" required value={editedUserData.userName} onChange={editUserName}/>
                            <label className='customLabel' htmlFor="p_useremail">Email Id:</label>
                            <input className='customEditInp' type="email" id="p_useremail" name="p_useremail" value={editedUserData.userEmail} onChange={editUserEmail}/>
                            <label className='customLabel' htmlFor="p_username">Mobile Number:</label>
                            <input className='customEditInp' type="text" id="p_usermobile" name="p_usermobile" value={editedUserData.userMobile} onChange={editUserMobile}/>
                            <label className='customLabel' htmlFor="p_userimg">Profile Picture:</label>
                            <input type="file" id="p_userimg" name="p_userimg" accept="jpg jpeg png" onChange={handleImageChange}/>
                            <label className='customLabel' htmlFor="p_userpassword">New Password:</label>
                            <input className='customEditInp' type="password" id="p_userpassword" name="p_userpassword" required placeholder='Enter Password' value={enteredPassword} onChange={(e)=>setEnteredPassword(e.target.value)}/>
                            <label className='customLabel' htmlFor="p_userConfirmpassword">Confirm New Password:</label>
                            <input className='customEditInp' type="password" id="p_userConfirmpassword" name="p_userConfirmpassword" required placeholder='Confirm Password' value={enteredConfirmPassword} onChange={changeConfirmPassword}/>
                        </div>
                        <div id="p_submitEdit" onClick={submitEditedDetails}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile


// useEffect(()=>{
    //     console.log(userData);
    // });
    // const [imageBlob, setImageBlob] = useState(userData.userImg);
    // const [imgUrl,setImgUrl]=useState('');
    // const NaxFunc=async()=>{
    //     const response=await fetch('http://localhost:5000',{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //     });
    //     console.log(response.json());
    //     return response.json()[0].img;
    // }
    // useEffect(()=>{
    //     console.log(imageBlob);
    //     applyImageChange();
    //     const NaxFunc=async()=>{
    //         const response=await axios.get('http://localhost:5000');
    //         let len=response.data.temp.length;
    //         console.log(response.data.temp);
    //         setImgUrl(response.data.temp[len-1].img);
    //     }
    //     NaxFunc();
    // },[imageBlob,setImageBlob])
    // useEffect(()=>{
    //     if(userData.userImg!=null){
    //         const url=URL.createObjectURL(userData.userImg);
    //         console.log(url);
    //         async function tempF(){
    //             const response=await fetch('http://localhost:5000/check',{
    //                 method:'POST',
    //                 headers:{
    //                     'Content-Type':'application/json',
    //                 },
    //                 body:JSON.stringify({
    //                     img:url
    //                 })
    //             });
    //             console.log(response.json());
    //         }

    //         // async function tempF(){
    //         //     const payload={
    //         //         img:url
    //         //     }
    //         //     const res=await axios.post('http://localhost:5000/check',payload);
    //         //     console.log(res);
    //         // }
    //         tempF();
    //     }
    // },[userData,setUserData]);