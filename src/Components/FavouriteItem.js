import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";


const FavouriteItem = (props) => {
    const [favlocal, setFavlocal] = useState(JSON.parse(localStorage.getItem('Random_Recipes')) || [])
    return (
        <Link to={`/details/${props.item.id}/`}>
            <div className='divone'>
                {props.item ? <div><img src={props.item.image} alt={props.item.title} />
                    <h1>{props.item.title}</h1>
                </div> : <div><img src={favlocal.image} alt={favlocal.title} />
                        <h1>{favlocal.title}</h1>
                    </div>

                }

            </div>
        </Link>
    )
}

export default FavouriteItem
