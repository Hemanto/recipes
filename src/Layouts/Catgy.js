import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CatCard from '../Components/CatCard';
import { Diet } from '../Config'
import { useSelector, useDispatch } from "react-redux";

const Catgy = () => {
    const [catrecips, setCatrecips] = useState([])
    const [localdata, setLocaldata] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
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


    const state = useSelector(state => state.xyz)

    // const data = localdata.filter(item => {
    //     if (item.vegetarian) {
    //         localStorage.setItem("vegetarian", JSON.stringify([item]));
    //         console.log(item);
    //     } else if (item.vegan) {
    //         localStorage.setItem("vegan", JSON.stringify([item]));
    //     } else if (item.glutenFree) {
    //         localStorage.setItem("glutenFree", JSON.stringify([item]));
    //     } else {
    //         localStorage.setItem("All", JSON.stringify([item]));
    //     }
    // })

    const vergit = localdata.filter(item => item.vegetarian)
    console.log(vergit);
    useEffect(() => {
        console.log(localdata);
        const data = localdata.map(item => {
            if (item.vegetarian) {
                localStorage.setItem("vegetarian", JSON.stringify([item]));
            } else {
                localStorage.setItem("Non-vegetarian", JSON.stringify([item]));
            }
        })

    }, [])

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
