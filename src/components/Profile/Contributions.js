import React from 'react'
import ContriCard from './ContriCard'
import { useContext } from 'react'
import { userDetailsData } from './P_profile'

const Contributions = () => {
  const context=useContext(userDetailsData);
  const contributions=context.contri;
  return (
    <div className="contriBoxContainer">
      <div className='contriBox'>
        {
          contributions.map((contriData,index)=>{
            return <ContriCard key={index} contriData={contriData}/>
          })
        }
        <ContriCard contriData={'addNewProp'}/>
      </div>
    </div>
  )
}

export default Contributions
