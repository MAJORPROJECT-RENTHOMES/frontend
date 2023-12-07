import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import './Card.css'
import { Link, useParams } from 'react-router-dom'
// import img from '../../../images/Profile Photo.jpeg'

const Card = (props) => {

    let { type, imgUrl, price, area, specs, dateOfPost, postedBy, img } = props;
    // let history = useHistory();

    var date = new Date(dateOfPost);
    date = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();

    const postURL = '/post/' + props.id;

    const [isLoading, setIsLoading] = useState(true);
    const { ty } = useParams();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [props, ty])
    return (
        <>
            {
                isLoading ?
                    <div className='card'>
                        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
                            <Skeleton height={350} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={postURL} style={{ textDecoration: "none", color: "white" }}>
                        <div className='card'>
                            <div class="card-div">
                                <div class='card-area'>Available</div>
                            </div>
                            <img className='cardImg' src={`https://homezy-real.glitch.me/images/${imgUrl}`} />
                            <div className="card_overlay">
                                <div className="card_title">
                                    {type}
                                </div>
                                <div className="card_runtime">
                                    {area}
                                    <span className="card_rating">
                                        ₹ {price}
                                    </span>
                                </div>
                                {/* <div className="card_desc">
                                    <button>{specs === 0 ? 'Only Boys' : specs === 1 ? 'Only Girls' : 'Both'}</button>
                                </div> */}
                                <div className="card_footer">
                                    <img src={img?`https://homezy-real.glitch.me/images/${img}`:`https://homezy-real.glitch.me/images/default.jpg`} alt="" />
                                    <div>
                                        <p>{postedBy}</p>
                                        <p>{date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Card
