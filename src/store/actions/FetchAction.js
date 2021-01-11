// Action Type
export const VALUE_UPDATE = "VALUE_UPDATE";
export const SET_VALUE = "SET_VALUE";

// actions
// optioanl augs data
export const valueUpdate = () => {
  return {
    type: VALUE_UPDATE,
    //value TO BE SEND TO REDUCER
  }
}

export const setValue = (value) => {
  return {
    type: SET_VALUE,
    data: value
    //value TO BE SEND TO REDUCER
  }
}