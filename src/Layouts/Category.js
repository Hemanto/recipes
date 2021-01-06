import React from 'react'
import {Link} from 'react-router-dom'

const CatDetails = () => {
    return (
        <Link to={`/category/details/idname`}>
        <div className='categoy'>
           <img src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg" alt="imge"/>
           <h2>Chicken Vesuvio</h2>
           
        </div>
        </Link>
    )
}

export default CatDetails
