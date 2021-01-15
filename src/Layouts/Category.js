import React from "react";
import { Link } from "react-router-dom";



const CatDetails = (props) => {
  // console.log('check i d', props.item.id);
  return (
    <Link to={`/details/${props.item.id}/`}>
      <div className="categoy">
        <img
          src={props.item.image}
          alt={props.item.title}
        />
        <h2>{props.item.title}</h2>
      </div>
    </Link>
  );
};

export default CatDetails;
