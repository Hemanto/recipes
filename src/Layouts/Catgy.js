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

    const CategorisedData = {
        veg: [],
        vegan: [],
        gluten: []
    }
    // const {veg, nonveg, gluten} = localdata.reduce((acc, item) => {
    //     if (item.vegetarian) {
    //         acc.veg.push(item)
    //     } else if (item.vegan) {
    //         acc.nonveg.push(item)
    //     } else if (item.glutenFree) {
    //         acc.gluten.push(item)
    //     }
    //     return acc
    // }, CategorisedData)
    localdata.forEach(item => {
        if (item.vegetarian) {
            CategorisedData.veg.push(item)
        } else if (item.vegan) {
            CategorisedData.vegan.push(item)
        } else if (item.glutenFree) {
            CategorisedData.gluten.push(item)
        }
    });


    // const vergit = localdata.filter(item => item.vegetarian)
    // console.log(vergit);
    useEffect(() => {
        // console.log(localdata);
        // const data = localdata.map(item => {
        //     if (item.vegetarian) {
        //         localStorage.setItem("vegetarian", JSON.stringify([item]));
        //     } else {
        //         localStorage.setItem("Non-vegetarian", JSON.stringify([item]));
        //     }
        // })
        localStorage.setItem("vegetarian", JSON.stringify(CategorisedData.veg));
        localStorage.setItem("vegan", JSON.stringify(CategorisedData.vegan));
        localStorage.setItem("glutenFree", JSON.stringify(CategorisedData.gluten));

    }, [])
    const [catdata, setCatdata] = useState([])
    const postcar = (catitem) => {
        setCatdata(JSON.parse(localStorage.getItem(catitem)) || [])
        console.log(catdata);
    }

    return (
        <div>
            <h1>Find the wide range of recipes</h1>
            <img onClick={() => postcar('vegetarian')} src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78" alt="image" width='400' />
            <img onClick={() => postcar('glutenFree')} src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78" alt="image" width='400' />
            <img onClick={() => postcar('vegan')} src="https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78" alt="image" width='400' />
            {/* <button onClick={vegetarian => get("vegetarian")}>VEG</button>
            <button onClick={(Paleo) => get('Paleo')}>Non-VEG</button>
            <button onClick={(vegan) => get('vegan')}>vegan</button>
            <button onClick={(glutenFree) => get('glutenFree')}>glutenFree</button>*/}
            {catdata.map(item => <CatCard key={item.id} item={item} />)}
        </div>
    )
}

export default Catgy
