import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DataContext from '../../context/Data/DataContext'
import BedIcon from '@mui/icons-material/Bed';
import Comments from './Comment/Comments'
import SimilarPost from './SimilarPost/SimilarPost';

const Post = () => {

    const { data } = useContext(DataContext);
    const { getComments } = useContext(DataContext);

    const navigate = useNavigate();

    // const data = [
    //     {
    //         id: '123',
    //         img: 'https://picsum.photos/300/200',
    //         owner: 'jfdsj',
    //         ownerEmail: 'kldsl',
    //         price: 150,
    //         description: 'lkdsals',
    //         title: 'dksl',
    //         beds: null,
    //         featured: 'ldsads'
    //     },
    //     {
    //         id: '1234',
    //         img: 'https://picsum.photos/300/200',
    //         owner: 'kwsdnf',
    //         ownerEmail: 'rgtr',
    //         price: 180,
    //         description: 'trdh',
    //         title: 'rsth',
    //         beds: null,
    //         featured: 'trh'
    //     },
    //     {
    //         id: '2537',
    //         img: 'https://picsum.photos/300/200',
    //         owner: 'thrsh',
    //         ownerEmail: 'shrt',
    //         price: 472,
    //         description: 'thrsh',
    //         title: 'trshs',
    //         beds: null,
    //         featured: 'trsh'
    //     },
    //     {
    //         id: '111',
    //         img: 'https://picsum.photos/300/200',
    //         owner: 'thrsh',
    //         ownerEmail: 'shrt',
    //         price: 472,
    //         description: 'thrsh',
    //         title: 'trshs',
    //         beds: null,
    //         featured: 'trsh'
    //     },
    // ]
    // console.log(data);

    let post = null;
    let { postID } = useParams();
    for (let index = 0; index < data.length; index++) {
        if (data[index]._id === postID)
            post = data[index];
    }
    const funct = async () => {
        // console.log(postID);

        getComments(postID);
    }

    useEffect(() => {
        funct();

        if(!localStorage.getItem('u-token'))
            navigate('/login');

    }, []);

    console.log(post);

    return (
        <div className='post-cont'>
            <div className='post'>
                {
                    post
                        ?
                        <div className='post-container'>
                            <div class="post-image">
                                <img className='bgImg' src={`https://homezy-real.glitch.me/images/${post.img}`} alt="" />
                                <img className='Img' src={`https://homezy-real.glitch.me/images/${post.img}`} alt="Image Description" />
                            </div>
                            <div class="post-desc">
                                <div>
                                    <h2>{post.title}</h2>
                                    <p className='postDesc'>{post.desc}</p>
                                    <table>
                                        <tr>
                                            <td>Address</td>
                                            <td>{post.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Preference</td>
                                            <td>{post.hostel === 0 ? 'Only for Boys' : post.hostel === 1 ? 'Only for Girls' : 'Both for Girls and Boys'}</td>
                                        </tr>
                                        <tr>
                                            <td>Owner Name</td>
                                            <td>{post.ownerName}</td>
                                        </tr>
                                        <tr>
                                            <td>Owner Contact</td>
                                            <td>{post.ownerContact}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{post.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Area</td>
                                            <td>{post.type}</td>
                                        </tr>
                                        {/* <tr>
                                        <td>Edited On</td>
                                        <td>{new Date(post.createdAt).getDate() + " " + new Date(post.createdAt).toLocaleString('default', { month: 'long' }) + " " + new Date(post.createdAt).getFullYear()}</td>
                                    </tr> */}
                                        {/* <tr>
                                            <td>Furniture</td>
                                            <td>{post.beds} beds</td>
                                        </tr> */}

                                    </table>
                                </div>
                                <div className='post-footer'>
                                    <img src={post.currentOwner.profileImg ? `https://homezy-real.glitch.me/images/${post.currentOwner.profileImg}`: `https://homezy-real.glitch.me/images/default.jpg`} alt="" />
                                    <div className='post-footer-span'>
                                        {post.currentOwner.username} 
                                        <div>Last edited: {new Date(post.updatedAt).getDate() + " " + new Date(post.updatedAt).toLocaleString('default', { month: 'long' }) + " " + new Date(post.updatedAt).getFullYear()}</div>
                                    </div>
                                </div>
                                {/* <p><span className='boldSpan'>:</span>{post.address}</p>
                                <p><span className='boldSpan'>Preference:</span>{post.hostel === 0 ? 'Only for Boys' : post.hostel === 1 ? 'Only for Girls' : 'Both for Girls and Boys'}</p> */}
                                {/* <p><span className='boldSpan'>Owner Name:</span>{post.ownerName}</p> */}
                                {/* <p><span className='boldSpan'>Owner Contact:</span>{post.ownerContact}</p>
                                <p><span className='boldSpan'>Price:</span>{post.price}</p>
                                <p><span className='boldSpan'>Edited On:</span>{new Date(post.createdAt).getDate() + " " + new Date(post.createdAt).toLocaleString('default', { month: 'long' }) + " " + new Date(post.createdAt).getFullYear()}</p> */}
                                {/* <svg data-testid="DeleteIcon"></svg> */}
                                {/* <button>{BedIcon} 7220886051</button> */}
                                {/* <i>{</i> */}
                            </div>
                        </div>
                        :
                        <div></div>}
            </div>
            <SimilarPost postID={postID}/>
            <Comments postID={postID} />
        </div>
    )
}

export default Post