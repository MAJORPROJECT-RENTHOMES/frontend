import React from 'react'
import { useEffect,useState } from 'react';
import './Caraousel.css'

const CarouselCard = ({el}) => {

    const imageLink= `https://homezy-real.glitch.me/images/${el.img}`;
    // *****************************************************************************************************************************
    // const presentImgPath = async () => {
    //     try {
    //         const res = await fetch(require(`../../../images/${el.img}`));
    //     //   console.log(res);
    //     //   console.log(imgUrl + ' -> ' + res.status);
        
    //         // Check if the response is a valid image (adjust the content type as needed)
    //         const contentType = res.headers.get('Content-Type');
    //         const contentLength = res.headers.get('Content-Length');
            
    //     //   console.log(contentType+" len= "+contentLength);
    //         if (contentType && contentType.startsWith('image/') ) {
    //         setTempImg(backEndLink+el.img);
    //         } else {
    //         console.log("your file was "+res);
    //         console.log('File not found or invalid:', contentType);
    //         // Handle the case where the file is not found or has an invalid content type
    //         }
    //     } catch (error) {
    //         console.error('Error fetching image:', error);
    //         // Handle other errors that may occur during the fetch
    //     }
    //     };
        
    //     useEffect(() => {
    //     presentImgPath();
    //     }, []);

    // const [tempImg,setTempImg]=useState(require(`../../../images/default2.png`));
    // ***************************************************************************************************************************
  return (
    <>
        <div className="carouselImg">
            <img className='carouselBg' src={imageLink}/>
            <img className='carouselMainImg' src={imageLink}/>
        </div>
        <div className="carouselRestTextData">
            <div className="carouselPropertyType">
                <h2>{el.type}</h2>
            </div>
            <div className="carouselPropertyTitle">
                <h4>{el.title}</h4>
            </div>
            <div className="carouselPropertyPrice">
                &#x20B9; {el.price}
            </div>
        </div>
    </>
  )
}

export default CarouselCard
