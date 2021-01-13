import {
  VALUE_UPDATE,
  SET_VALUE,
  SET_RANDON_RECIPES,
} from "../actions/FetchAction";

const initialState = {
  value: 1,
  name: "",
  recipes: [],
  // curr_recipie: []
};

//action always a object
const FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_UPDATE:
      return { ...state, value: state.value + 1 };
    case SET_VALUE:
      return { ...state, name: action.data };
    case SET_RANDON_RECIPES:
      localStorage.setItem("Random_Recipes", action.data);
      return { ...state, recipes: action.data };
    default:
      return state;
  }
};

export default FetchReducer;
