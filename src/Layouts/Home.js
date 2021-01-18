import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  valueUpdate,
  setValue,
  getRecipes,
} from "../store/actions/FetchAction";
import Category from "./Category";
import { Random_recipes } from "../Config";
import { useState } from "react";
import Filter from "../Components/Filter";

const Home = () => {
  const state = useSelector((state) => state.xyz);
  const dispatch = useDispatch();
  const [newdata, setNewdata] = useState('')
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
  const fld = state.filter_recipes
  console.log({ fld });
  // const [filer_data, setFiler_data] = useState([])
  // console.log('new dsta', filer_data);
  //setRecipes
  //const recipes = (JSON.parse(localStorage.getItem('Random_Recipes')) || [])
  // console.log(state.filter_recipes);
  // const fetchData = (count) => {
  //   axios.get(Random_recipes(count)).then((res) => {
  //     const data = res.data;
  //     const recipe = JSON.stringify(data.recipes);
  //     //console.log(recipe);
  //     return recipe;
  //   });
  // }
  //console.log('state', recipes);

  useEffect(() => {
    if (recipes.length == 0) {
      axios.get('https://api.spoonacular.com/recipes/random?apiKey=56dc78ece8b041ccace71034ca88e7d7&number=50&includeNutrition=true')
        .then(function (response) {
          const data = (response.data)
          setNewdata(JSON.stringify(data.recipes))
          console.log(data.recipes);
          dispatch(getRecipes(JSON.stringify(data.recipes)))
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, []);
  // useEffect(() => {
  //   if (state) {
  //     setFiler_data(fld)
  //   }
  // }, [state])

  return (
    <>
      <Filter />
      <div className='displyrep'>

        {state.filter_recipes.map(item =>
          <Category key={item.id} item={item} />
        )}
        hi
      </div>
    </>
  );
};

export default Home;
