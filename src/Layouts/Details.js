import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { favouritRecipes } from '../store/actions/FetchAction'
import Ingredients from '../Components/Ingredients'

const Details = () => {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
    const { id } = useParams()
    const index = details.find((todo) => todo.id === +id)

    const dispatch = useDispatch()
    const addToFav = () => {
        dispatch(favouritRecipes(index))
        console.log(index);
    }
    return (
        <div>
            <h1>{index.title}</h1>
            <img src={index.image} alt={index.title} />
            {index.vegetarian ? <span style={{ color: 'green' }}> &#11044; </span> : <span style={{ color: 'red' }}> &#11044; </span>}
            <button onClick={addToFav}>Add to favourit</button>
            <h3>Instructions</h3>
            <div dangerouslySetInnerHTML={{ __html: index.instructions }}></div>
            <h3>Summary</h3>
            <p>{index.summary}</p>
            <h1>Ingredients</h1>
            {index.extendedIngredients.map(item => <Ingredients key={item.id} item={item} />)}
        </div>
    )
}

export default Details

//     < div
// dangerouslySetInnerHTML = {{
//     __html: props.house.description
// }}></div >
