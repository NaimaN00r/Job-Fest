import React, { useEffect, useState } from 'react';
import Cards from '../../Shared/Cards';

const Companies = () => {
    const [companies,setCompanies]=useState([]);
  useEffect(()=>{
    fetch('companies.json')
    .then(res=> res.json())
    .then(data=>setCompanies(data))
} , []);
    return (
        <div>
            <h1 className='text-center text-2xl mt-10 mb-10 font-bold border-b-4 w-52 bg-emerald-100 mx-auto'>Top Companies</h1>

            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            companies.map(job=>
                <Cards 
                    key={job.id}
                    job={job}
                
                    ></Cards>)          
                  }
        </div>
       
        </div>
        
    );
};

export default Companies;