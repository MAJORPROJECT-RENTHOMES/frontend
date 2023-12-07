import React, { useState } from 'react';
import "./AddHouse2.css"
import axios from 'axios';
import { useContext } from 'react';
import { userDetailsData } from './P_profile';
import { useNavigate } from 'react-router-dom';

function AddNewProperty() {
const [imgUrl,setImgUrl]=useState('')
const [title,setTitle]=useState('')
const [address,setAddress]=useState('')
const [desc,setDesc]=useState('')
const [price,setPrice]=useState(0)
const [locality,setLocality]=useState('Nehru nagar')
const [gender,setGender]=useState('2')
const [image,setImage]=useState(null)
const [ownerInfo,setOwnerInfo]=useState('')
const [ownerContact,setOwnerContact]=useState('')
const [flipped, setFlipped] = useState(false);
// const context=useContext(userDetailsData);
const ApiKey=localStorage.getItem('u-token');

const navigate=useNavigate();
const handleSubmit=(e) => {
  console.log('ab add krre');
  e.preventDefault();
  setFlipped(true);
    async function finalSubmit(){
    try {
      const apiUrl = `https://homezy-real.glitch.me/property`; 
      const apiKey = ApiKey;
      const formData=new FormData();
      formData.append('title',title);
      formData.append('desc',desc);
      formData.append('price',price);
      formData.append('image',image);
      formData.append('hostel',gender);
      formData.append('ownerName',ownerInfo);
      formData.append('ownerContact',ownerContact);
      formData.append('address',address);
      formData.append('type',locality);

      console.log(formData);
      const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'multipart/form-data'
      };
    const res=await axios.post(apiUrl,formData,{headers});
    console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  finalSubmit()
  setTimeout(()=>{
    window.location.reload();
    // navigate('/profile/contributions')
  },[20000]);
}
const addAnother=(e)=>{
  setinitial();
  setFlipped(false);
}

const setinitial=()=>{
  setTitle('')
  setAddress('')
  setDesc('')
  setPrice(0)
  // setLocality('Nehru Nagar')
  setGender('Both')
  setImage('')
  setOwnerContact('')
  setOwnerInfo('')
}

const imgChanger=(e)=>{
  setImage(e.target.files[0])
  const reader = new FileReader();
  const file = e.target.files[0];
  if (file) {
    reader.onloadend = () => {
      setImgUrl(reader.result)
    };
    reader.readAsDataURL(file);
  }
}
  return (
    <div className='v-addHouse'>
      <div className={`v-card-container ${flipped ? 'flipped' : ''}`}>
        <div className='v-card'>
          <div className='v-front'>
            <h2>Add a House</h2>
              <form onSubmit={handleSubmit}>

                <label>Owners Info</label>
                <input
                  type="text"
                  required
                  value={ownerInfo}
                  onChange={(e)=>setOwnerInfo(e.target.value)}
                />

                <label>Owners Contact</label>
                <input
                  type="text"
                  required
                  value={ownerContact}
                  onChange={(e)=>setOwnerContact(e.target.value)}
                />

                <label>Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Locality</label>
                <select
                  value={locality}
                  onChange={(e)=>setLocality(e.target.value)}
                >
                  <option value="Harshvardan nagar">Harshvardhan Nagar</option>
                  <option value="Nehru nagar">Nehru Nagar</option>
                  <option value="Vaishali nagar">Vaishali Nagar</option>
                </select>

                <label>Address</label>
                <input 
                  required
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                >
                </input>

                <label>Description</label>
                <textarea 
                  placeholder='Please describe the current condition of the room in the housing project. Include details about the walls, flooring, windows, doors, electrical and plumbing fixtures, paint, and any other relevant information. Your input will help us understand the current state of the room.'
                  required
                  value={desc}
                  onChange={(e)=>setDesc(e.target.value)}  
                >
                </textarea>

                <label>Price</label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                />

                <label>Preference</label>
                <select
                  value={gender}
                  onChange={(e)=>setGender(e.target.value)}
                >
                  <option value="0">Only Boys</option>
                  <option value="1">Only Girls</option>
                  <option value="2">Both</option>
                </select>

                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  accept="png jpg jpeg"
                  required
                  onChange={imgChanger}
                />

                <button>Add House</button>
              </form>
          </div>
          <div className='v-back'>
            {/* Your form content for the back face */}
            <img id='houseImg' src={imgUrl} alt="User House"></img>
            <p>🎊 House Added successfully 🎊</p>
            <button onClick={addAnother}>Add another</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProperty;