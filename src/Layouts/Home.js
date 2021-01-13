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

const Home = () => {
  const state = useSelector((state) => state.xyz);
  const dispatch = useDispatch();
  const recipes = (JSON.parse(localStorage.getItem('Random_Recipes')) || [])


  //console.log(recipeItem);

  useEffect(() => {
    axios.get(Random_recipes).then((res) => {
      const data = res.data;
      const recipe = JSON.stringify(data.recipes);
      dispatch(getRecipes(recipe));
    });
  }, []);
  console.log(recipes);
  return (
    <div className='displyrep'>
      {recipes.map(item =>
        <Category key={item.id} item={item} />
      )}

      <h1 style={{ textAlign: "center" }}>
        <button onClick={() => dispatch(valueUpdate())}>update data</button>
        <button onClick={() => dispatch(setValue("Sourav"))}>
          update name
        </button>
        {state.name}
      </h1>
    </div>
  );
};

export default Home;
