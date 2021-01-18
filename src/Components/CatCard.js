import React from 'react'
import { Link } from "react-router-dom";

const CatCard = (props) => {
    return (
        <Link to={`/details/${props.item.id}/`}>
            <div>
                {props.item.title}<br />
                <img src={props.item.image} alt={props.item.id} />
            </div>
        </Link>
    )
}

export default CatCard
