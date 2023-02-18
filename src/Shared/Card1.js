import React from 'react';
import { Link } from 'react-router-dom';

const Card1 = ({job}) => {
    const {title,name,image,location } =job ;
    return (
        
        <div className="card card-compact w-80 h-80 bg-none hover:bg-white shadow-xl">
                    <div>
                     <figure><img className='w-96 h-32 ' src={image} alt="Shoes" /></figure>
                    </div>
               <div className="card-body">
                <h1 className='text-center font-semibold text-xl'>{title}</h1>
           <p className='text-center'>{name}</p>
              <p className='text-center'>{location}</p>
             <div className='flex justify-center items-center'>
                <Link to="/login"><button className="btn btn-primary">Apply</button>
                  </Link> 
                </div>
                  </div>
         </div>
        
                
    );
};

export default Card1;