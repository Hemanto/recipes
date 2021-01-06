import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {changeState} from '../actions'

import Category from './Category'


const Home = () => {
  const dataFrmmaterste = useSelector(state=>state.alldata)
  const dispatch = useDispatch()
  return (
    <div>
      <Category/>
      <h1 style={{textAlign:'center'}}>
        <button onClick={()=>dispatch(changeState())}>fetch data</button>
        {dataFrmmaterste}
      </h1>
    </div>
  )
}

export default Home
