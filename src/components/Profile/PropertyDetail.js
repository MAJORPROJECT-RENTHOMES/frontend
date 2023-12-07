import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { userDetailsData } from './P_profile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
    const propertyId=(useParams()).id;
    const context=useContext(userDetailsData);
    const setUserContri=context.setContri;
    const ApiKey=context.apiKey;
    const [userContributions,setUserContributions]=useState(context.contri);
    const [propertyDetails,setPropertyDetails]=useState(null);
    const [editedPropertyDetails,setEditedPropertyDetails]=useState(null);
    const [imageChanged,setImageChanged]=useState(false);
    const [editedImage,setEditedImage]=useState('');
    const [editedImageFile,setEditedImageFile]=useState(null);
    const [pref,setPref]=useState('No Preference');
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(propertyId);
        let i;
        for(i=0;i<userContributions.length;i++){
            if(userContributions[i]._id===propertyId){
                setPropertyDetails(userContributions[i]);
                setEditedImage(userContributions[i].userImg);
                setEditedPropertyDetails(userContributions[i]);
                break;
            }
        }
    },[]);
    const makePropertyDetailsVisible=()=>{
        const propertyDetailCard=document.getElementById('p_propertyDetailCard');
        const editPropertyFormCard=document.getElementById('p_editPropertyFormCard');
        propertyDetailCard.style.zIndex=1;
        propertyDetailCard.style.visibility='visible';
        editPropertyFormCard.style.zIndex=-1;
        editPropertyFormCard.style.visibility='hidden';
    }
    const makeEditFormVisible=()=>{
        const propertyDetailCard=document.getElementById('p_propertyDetailCard');
        const editPropertyFormCard=document.getElementById('p_editPropertyFormCard');
        propertyDetailCard.style.zIndex=-1;
        propertyDetailCard.style.visibility='hidden';
        editPropertyFormCard.style.zIndex=1;
        editPropertyFormCard.style.visibility='visible';
    }
    const EditProperties=()=>{
        makeEditFormVisible();
    }
    const cancelEditingForm=()=>{
        makePropertyDetailsVisible();
    }
    const SubmitEditedForm=()=>{
        async function editPropertyDetailsOnSubmit(){
            const apiUrl = `https://homezy-real.glitch.me/property/${propertyId}`; 
            const apiKey = ApiKey;
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${apiKey}`
            };
            const formData = new FormData();
            formData.append('title', editedPropertyDetails.title);
            formData.append('address', editedPropertyDetails.address);
            formData.append('price', editedPropertyDetails.price);
            formData.append('ownerName', editedPropertyDetails.ownerName);
            formData.append('ownerContact', editedPropertyDetails.ownerContact);
            formData.append('preference', editedPropertyDetails.preference);
            formData.append('desc', editedPropertyDetails.desc);
            formData.append('image', editedImageFile);
            const res= await axios.put(apiUrl,formData,{headers});
            console.log(res);
            const tempUserContributions={...userContributions};
            for(let i=0;i<tempUserContributions.length;i++){
                if(tempUserContributions[i]._id===propertyId){
                    tempUserContributions[i]=res;
                    break;
                }
            }
            setUserContributions(tempUserContributions);
            window.location.reload();
        }
        editPropertyDetailsOnSubmit();
    }
    const DeleteProperty=async()=>{
        const apiUrl = `https://homezy-real.glitch.me/property/${propertyId}`;
        const apiKey=ApiKey;
        const headers = {
            'Authorization': `Bearer ${apiKey}`
        };
        const res=await axios.delete(apiUrl,{headers});
        console.log(res);
        for(let i=0;i<userContributions.length;i++){
            if(userContributions[i]._id===propertyId){
                userContributions.splice(i,1);
                break;
            }
        }
        setUserContri(userContributions);
        navigate('/profile/contributions');
    }
    const editPropertyImage=(e)=>{
        setImageChanged(true);
        const file=e.target.files[0];
        setEditedImageFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setEditedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
    const editPropertyTitle=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.title=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editPropertyAddress=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.address=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editPropertyPrice=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.price=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editOwnerName=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.ownerName=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editOwnerMobile=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.ownerContact=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editDesc=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.desc=e.target.value;
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    const editPreference=(e)=>{
        const tempEditedPropertyDetails={...editedPropertyDetails};
        tempEditedPropertyDetails.preference=e.target.value;
        setPref(e.target.value);
        setEditedPropertyDetails(tempEditedPropertyDetails);
    }
    return (
        <>
        {
            propertyDetails && editedPropertyDetails
            ?
            <div className="propertyDetailsPageContainer">
                <div className="editFormAndDetail">
                    <div id='p_editPropertyFormCard' className="editPropertyForm">
                        <div className="editPropertyLeft">
                            <div className="editedPropertyImage">
                                <img src={imageChanged?editedImage:`https://homezy-real.glitch.me/images/${editedPropertyDetails.img}`} alt="" />
                                <input type="file" accept='jpg jpeg png' onChange={editPropertyImage} />
                            </div>
                            <div className="editPropertyLeftHeaders editedPropertyTitle">
                                <label className='customLabel requiredFields' htmlFor="p_editedPropertyTitle">Title: </label>
                                <input className='customPropertyEditInp' type="text" id='p_editedPropertyTitle' name='p_editedPropertyTitle' value={editedPropertyDetails.title} required onChange={editPropertyTitle} />
                            </div>
                            <div className="editPropertyLeftHeaders editedPropertyAddress">
                                <label className='customLabel requiredFields' htmlFor="p_editedPropertyAddress">Address: </label>
                                <input className='customPropertyEditInp' type="text" id='p_editedPropertyAddress' name='p_editedPropertyAddress' value={editedPropertyDetails.address} required onChange={editPropertyAddress} />
                            </div>
                            <div className="editPropertyLeftHeaders editedPropertyPrice">
                                <label className='customLabel requiredFields' htmlFor="p_editedPropertyPrice">Price: </label>
                                <input className='customPropertyEditInp' type="text" id='p_editedPropertyPrice' name='p_editedPropertyPrice' value={editedPropertyDetails.price} required onChange={editPropertyPrice} />
                            </div>
                        </div>
                        <div className="editPropertyRight">
                            <div className="editPropertyLeftHeaders editedPropertyOwnerName">
                                <label className='customLabel requiredFields' htmlFor="p_editedPropertyOwnerName">Owner's Name: </label>
                                <input className='customPropertyEditInp' type="text" id='p_editedPropertyOwnerName' name='p_editedPropertyOwnerName' value={editedPropertyDetails.ownerName} required onChange={editOwnerName} />
                            </div>
                            <div className="editPropertyLeftHeaders editedPropertyOwnerMobile">
                                <label className='customLabel requiredFields' htmlFor="p_editedPropertyOwnerMobile">Owner's Mobile Number: </label>
                                <input className='customPropertyEditInp' type="text" id='p_editedPropertyOwnerMobile' name='p_editedPropertyOwnerMobile' value={editedPropertyDetails.ownerContact} required onChange={editOwnerMobile} />
                            </div>
                            <div className="editPropertyLeftHeaders editedPropertyOwnerPreference">
                                <label className='customLabel' htmlFor="p_editedPropertyOwnerPreference">Preference: </label>
                                <label className='radioOptionsPropertyEdit' htmlFor="No Preference">
                                    <input type="radio" id="No Preference" name="options" value="No Preference" checked={pref==='No Preference'} onChange={editPreference}/>
                                    No preference
                                </label>
                                <label className='radioOptionsPropertyEdit' htmlFor="Only Boys">
                                    <input type="radio" id="Only Boys" name="options" value="Only Boys" checked={pref==='Only Boys'} onChange={editPreference}/>
                                    Only Boys
                                </label>
                                <label className='radioOptionsPropertyEdit' htmlFor="Only Girls">
                                    <input type="radio" id="Only Girls" name="options" value="Only Girls" checked={pref==='Only Girls'} onChange={editPreference}/>
                                    Only Girls
                                </label>
                            </div>
                            <div className="editPropertyLeftHeaders" id='editedPropertyOwnerDesc'>
                                <label className='customLabel' htmlFor="p_editedPropertyOwnerDesc">Description: </label>
                                <textarea className='customPropertyEditInpTextArea' id='p_editedPropertyOwnerDesc' name='p_editedPropertyOwnerDesc' value={editedPropertyDetails.desc?editedPropertyDetails.desc:''} onChange={editDesc} />
                            </div>
                            <div className="editBtnContainer">
                                <div className="editSubmitBtn" onClick={cancelEditingForm}>Cancel</div>
                                <div className="editSubmitBtn" onClick={SubmitEditedForm}>Edit</div>
                            </div>
                        </div>
                    </div>
                    <div id='p_propertyDetailCard' className='propertyDetailsPage'>
                        <div className="propertyDetailImage">
                            <img src={`https://homezy-real.glitch.me/images/${propertyDetails.img}`} alt="" />
                        </div>
                        <div className="HeadingHouseProperties">Details</div>
                        <div className="propertyDetailsDetails">
                            <div className="card_details cardOwnerName">
                                <div className='cardHousePropertiesLabel'>Title:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.title}</div>
                            </div>
                            <div className="card_details cardOwnerName">
                                <div className='cardHousePropertiesLabel'>Owner Name:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.ownerName}</div>
                            </div>
                            <div className="card_details cardOwnerContact">
                                <div className='cardHousePropertiesLabel'>Owner Mobile Number:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.ownerContact}</div>
                            </div>
                            <div className="card_details cardAddress">
                                <div className='cardHousePropertiesLabel'>Address:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.address}</div>
                            </div>
                            <div className="card_details cardPrice">
                                <div className='cardHousePropertiesLabel'>Price:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.price}</div>
                            </div>
                            <div className="card_details cardPrice">
                                <div className='cardHousePropertiesLabel'>Description:</div>
                                <div className='cardHousePropertiesValue'>{propertyDetails.desc?propertyDetails.desc:'NA'}</div>
                            </div>
                            <div className="card_details cardPrice">
                                <div className='cardHousePropertiesLabel'>Created:</div>
                                <div className='cardHousePropertiesValue'>{(new Date(propertyDetails.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }))}</div>
                            </div>
                            <div className="card_details cardPrice">
                                <div className='cardHousePropertiesLabel'>Last Edited:</div>
                                <div className='cardHousePropertiesValue'>{(new Date(propertyDetails.updatedAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }))}</div>
                            </div>
                        </div>
                        <div className="editPropertyBtn" onClick={EditProperties}>Edit</div>
                        <div className="deletePropertyBtn" onClick={DeleteProperty}>Delete</div>
                    </div>
                </div>
            </div>
            :
            <></>
        }
        </>
    )
}

export default PropertyDetail
