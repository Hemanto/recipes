import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
    // const details = JSON.parse(localStorage.getItem('Random_Recipes')) || []

    const { id } = useParams()
    // console.log('Deatils', details);

    // console.log('id', id);
    //console.log('deatils_id', details[0].id);
    const recipeid = id

    const index = details.find((todo) => todo.id === +id)
    // console.log(index);
    //console.log(recipeid);
    return (
        <div>
            <h1>{index.title}</h1>
            <img src={index.image} alt={index.title} />
        </div>
    )
}

export default Details
