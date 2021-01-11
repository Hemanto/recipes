import React, { useEffect } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'

const END_POINT = 'https://api.edamam.com/search?q=chicken&app_id=111368b8&app_key=7d3f0451dc9d9b87fc975c17d6a7919b'
const APP_ID = '111368b8'
const APP_KEY = '7d3f0451dc9d9b87fc975c17d6a7919b'

// API DOC =  https://developer.edamam.com/edamam-docs-recipe-api


//https://api.spoonacular.com/recipes/random?apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true.

// doc  https://spoonacular.com/food-api/docs



export default function Config() {
const state = useSelector(state => state.alldata)
const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true`)
        .then(res=>{
            const data = res.data;
            console.log(data);
        })

    }, [])

    return (
        <div>

        </div>
    )
}


