import React, { useState } from 'react';
import "./AddHouse2.css"
import "../utils/fetchAPI"
import axios from 'axios';

function Add_house() {
  const [imgUrl,setImgUrl]=useState('')
  const [title,setTitle]=useState('')
  const [address,setAddress]=useState('')
  const [desc,setDesc]=useState('')
  const [price,setPrice]=useState(0)
  const [locality,setLocality]=useState('Nehru Nagar')
  const [gender,setGender]=useState('Both')
  const [image,setImage]=useState(null)
  const [ownerInfo,setOwnerInfo]=useState('')
  const [ownerContact,setOwnerContact]=useState('')
  const [flipped, setFlipped] = useState(false);
  // const addData = async () => {
    // console.log(localStorage.getItem('u-token'));
    // const response = await fetch(`http://localhost:5000/property`, {
    //     method: 'POST',
    //     headers: {
    //         // 'Content-Type': 'application/json',
    //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2NkNGY2YzgzMDJmNDZkZTMxZjViNCIsImlhdCI6MTY5ODQ4NTQ5NCwiZXhwIjoxNjk5MTc2Njk0fQ.ng9DQNFGnqjT8zGfsUHsloPNsM_L8RzX_fj5yBL3ef8'
    //     },
    //     body: JSON.stringify({ title, desc})
    // });
    // const res = await response.json()
    // console.log(res);


    // const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2NkNGY2YzgzMDJmNDZkZTMxZjViNCIsImlhdCI6MTY5ODQ4NTQ5NCwiZXhwIjoxNjk5MTc2Njk0fQ.ng9DQNFGnqjT8zGfsUHsloPNsM_L8RzX_fj5yBL3ef8';
    // const formData=new FormData()
    // formData.append('title',title)
    // formData.append('image',image)
    // const headers = {
    //   'Authorization': `Bearer ${apiKey}`,
    //   'Content-Type': 'multipart/form-data'
    // };
    // fetch('/property','POST',headers,formData)
    
  // }
const handleSubmit=(e) => {
  e.preventDefault();
  setFlipped(true);
  // addData();
  
    async function finalSubmit(){
    try {
      const apiUrl = `https://homezy-real.glitch.me/property`; 
      const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2NkNGY2YzgzMDJmNDZkZTMxZjViNCIsImlhdCI6MTY5ODQ4NTQ5NCwiZXhwIjoxNjk5MTc2Njk0fQ.ng9DQNFGnqjT8zGfsUHsloPNsM_L8RzX_fj5yBL3ef8';
      const formData=new FormData()
      formData.append('title',title)
      console.log(title)
      formData.append('image',image)
      const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'multipart/form-data'
      };
    const res=await axios.post(apiUrl,formData,{headers})
    console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  finalSubmit()

  // const hs={title,address,desc,price,locality,gender,image}
  // console.log(hs);
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
  setLocality('Nehru Nagar')
  setGender('Both')
  setImage('')
  setOwnerContact('')
  setOwnerInfo('')
}

const imgChanger=(e)=>{
  setImage(e.target.files[0])
  // const file=e.target.files[0]
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
      {/* <h2>Add a House</h2> */}
      <div className={`v-card-container ${flipped ? 'flipped' : ''}`}>
        <div className='v-card'>
          <div className='v-front'>
            <h2>Add a House</h2>
            {/* Your form content for the front face */}
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
                  <option value="Harshvardhan Nagar">Harshvardhan Nagar</option>
                  <option value="Nehru Nagar">Nehru Nagar</option>
                  <option value="Vaishali Nagar">Vaishali Nagar</option>
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
                  accept="image/x-png,image/gif,image/jpeg"
                  required
                  // value={image}
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

export default Add_house;