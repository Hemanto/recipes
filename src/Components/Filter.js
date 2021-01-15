import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterRecipes } from '../store/actions/FetchAction'

const Filter = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
    const [renderData, setRenderData] = useState([])
    const dispatch = useDispatch()
    const searchvalue = () => {

    }
    const filter_data = (data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))

    console.log('Filter data', filter_data);

    useEffect(() => {
        dispatch(filterRecipes(filter_data))
    }, [search])
    //console.log(renderDate);
    return (
        <div style={{ textAlign: 'center' }}>
            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={searchvalue}>Search</button>
        </div >
    )
}

export default Filter
