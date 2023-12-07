import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ContriCard = ({contriData}) => {
  useEffect(()=>{
    console.log(contriData);
  },[]);
  return (
    <>
    {
      contriData!=='addNewProp'?
      <Link className='reactRouterLinks' to={`/profile/contributions/${contriData._id}`}>
        <div className='contriCard'>
          <div className="contriCardMain">
            <div className="cardImage">
              <img src={contriData.img?`https://homezy-real.glitch.me/images/${contriData.img}`:''} alt="" />
            </div>
            <div className="houseProperties">
              <div className="HeadingHouseProperties">Details</div>
              <div className="card_details cardTitle">
                <div className='cardHousePropertiesLabel'>Title:</div>
                <div className='cardHousePropertiesValue'>{contriData.title}</div>
              </div>
              <div className="card_details cardAddress">
                <div className='cardHousePropertiesLabel'>Address:</div>
                <div className='cardHousePropertiesValue'>{contriData.address.length>30?`${contriData.address.substring(0,25)}...`:contriData.address}</div>
              </div>
              <div className="card_details cardPrice">
                <div className='cardHousePropertiesLabel'>Price:</div>
                <div className='cardHousePropertiesValue'>{contriData.price}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      :
      <Link className='reactRouterLinks' to={`/profile/addNewProperty`}>
        <div className="contriCard ">
          <div className="addNewPropertyCard">
            <img src={'https://homezy-real.glitch.me/images/addNewProperty.png'} alt="" />
            <div className='addNewPropertyText'>Add New Property</div>
          </div>
        </div>
      </Link>
      }
    </>
  )
}

export default ContriCard
