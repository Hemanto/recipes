import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import FavouriteItem from './FavouriteItem'


const Favourite = () => {
    const state = useSelector((state) => state.xyz);
    console.log(state.favouritRecipes);
    const [fav, setFav] = useState(state.favouritRecipes)
    if (fav != 0) {
        console.log(fav);

    }
    return (
        <div>
            <i className="fas fa-heart">
            </i>{' '}
        Favourite List
            {state.favouritRecipes.map(item => <FavouriteItem key={item.id} item={item} />)}


        </div>
    )
}

export default Favourite
