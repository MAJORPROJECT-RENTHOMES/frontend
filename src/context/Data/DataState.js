import React from 'react'
import { useState } from 'react'
import DataContext from './DataContext'
import fetchAPI from '../../utils/fetchAPI'

const DataState = (props) => {

    const host = "https://homezy-real.glitch.me"

    const dataVal = []

    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);
    const [similar, setSimilar] = useState([]);

    const getData = 
        // console.log(fetchAPI('/property/getAll', 'GET'));
        // console.log(data);

        async () => {
            const response = await fetch(`https://homezy-real.glitch.me/property/getAll`, {
                method: 'GET',
            });
            // const res = await response.json()
            setData(await response.json());
            
    }

    // const addData = async ( {currentOwner, desc, img, price, beds, featured} ) => {
    //     // console.log(localStorage.getItem('u-token'));
    //     const response = await fetch(`${host}/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('u-token')
    //         },
    //         body: JSON.stringify({ currentOwner, desc, img, price, beds, featured })
    //     });
    //     const res = await response.json()

    //     setData(data.concat(res))
    // }

    // Get all Comments of particular post
    const getComments = async(id)=>{
        // console.log(id);
        const response = await fetch(`https://homezy-real.glitch.me/review/${id}`, {
                method: 'GET',
            });
            // const res = await response.json()
            setComments(await response.json());
        // console.log(comments);
    }

    // Add comment on a particular post
    const addComment = async({postID, text})=>{
        console.log(postID, text);
        const response = await fetch(`https://homezy-real.glitch.me/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('u-token')}`
            },
            body: JSON.stringify({
                'listing': postID, 
                'text': text
            })
        });

        const tmp = await response.json();
        setComments(comments.concat(tmp));
    }

    // Fetch all similar Posts
    const fetchSimilar = async(id)=>{
        // console.log(id);
        const response = await fetch(`https://homezy-real.glitch.me/property/recommendation/${id}`, {
                method: 'GET',
            });
            // const res = await response.json()
            setSimilar(await response.json());
        // console.log(comments);
    }

    return (

        <DataContext.Provider value={{ data, getData, getComments, comments, addComment, fetchSimilar, similar }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState