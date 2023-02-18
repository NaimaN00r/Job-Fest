import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({job}) => {
    const {name,image} =job ;
    return (
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-32 h-32 rounded-full p-4' src={image} alt="Movie"/></figure>
  <div className="card-body flex flex-row">
    <p>{name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to="/login">View Details</Link></button>
    </div>
  </div>
</div>



//        
    );
};

export default Cards;