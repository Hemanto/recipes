import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {valueUpdate, setValue} from '../store/actions/FetchAction'
import Config from '../Config'

import Category from './Category'


const Home = () => {
  const state = useSelector(state=>state.xyz)
  
  const dispatch = useDispatch()
  return (
    <div>
      <Category/>
      <h1 style={{textAlign:'center'}}>
     
        <button onClick={() => dispatch(valueUpdate())}>update data</button>
        <button onClick={() => dispatch(setValue("Sourav"))}>update name</button>
        {state.name}
      </h1>
      <Config/>
    </div>
  )
}

export default Home
