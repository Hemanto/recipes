import React from 'react'
//https://spoonacular.com/recipeImages/
const Ingredients = (props) => {
    return (
        <div>

            <h4>{props.item.name}</h4>
            <img src={`https://spoonacular.com/recipeImages/${props.item.image}`} alt={props.item.name} />
        </div>
    )
}

export default Ingredients
