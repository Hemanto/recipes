import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CatCard from '../Components/CatCard';
import { Diet } from '../Config'

const Catgy = () => {
    const [catrecips, setCatrecips] = useState([])
    const get = (diettile) => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?diet=${diettile}&apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true`)
            .then(function (response) {
                // handle success
                console.log(response);
                setCatrecips(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    // const get = (diettile) => {
    //     axios.get(Diet, {
    //         params: {
    //             diet: diettile,
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })

    // }
    // useEffect(() => {
    //     get("vegetarian")
    // }, [])



    return (
        <div>
            <h1>Find the wide range of recipes</h1>
            <button onClick={vegetarian => get("vegetarian")}>VEG</button>
            <button onClick={(Paleo) => get('Paleo')}>Non-VEG</button>
            <button onClick={(vegan) => get('vegan')}>vegan</button>
            <button onClick={(glutenFree) => get('glutenFree')}>glutenFree</button>
            {catrecips.map(item => <CatCard key={item.id} item={item} />)}
        </div>
    )
}

export default Catgy
