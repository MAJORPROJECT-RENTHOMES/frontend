import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DataContext from '../../../context/Data/DataContext';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Caraousel.css'
import CarouselCard from './CarouselCard';
// import '../../../images'

const Caraousel = () => {
  const context=useContext(DataContext);
  console.log(context);
  const all_properties=context.data;
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     console.log(all_properties);
  //   },5000)
  // },[]);
  return(
    <>
      {
        all_properties.length!==0?
        <div className="carouselArea">
          <div className='mainCarouselArea'>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
              >
              {
                all_properties.map((el)=>{
                  return <div className='carouselDiv'>
                    <Link to={`/post/${el._id}`}>
                      {/* <div className="carouselImg">
                        <img className='carouselBg' src={require(`../../../images/${el.img}`)}/>
                        <img className='carouselMainImg' src={require(`../../../images/${el.img}`)}/>
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
                      </div> */}
                      <CarouselCard el={el}/>
                    </Link>
                  </div>
                })
              }
            </Carousel>
          </div>
        </div>
        :
        <></>
        }
    </>
  )
}

export default Caraousel
