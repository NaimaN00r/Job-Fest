import React, { useEffect, useState } from 'react';
import Card1 from '../../Shared/Card1';
import Cards from '../../Shared/Cards';

const ExperiencedJob = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
      fetch('experienced.json')
      .then(res=> res.json())
      .then(data=>setJobs(data))
  } , []);
      return (
          <div>
              <div className="hero-content text-center text-black">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold">Experienced Job</h1>
                        <p className="mb-5">If you want to do something better then your previous job,maybe you can find something better here</p>
                       
                    </div>
                </div>
  
              <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
              jobs.map(job=>
                  <Card1 
                      key={job.id}
                      job={job}
                  
                      ></Card1>)          
                    }
          </div>
          <h1 className='text-center text-2xl mt-10 mb-10 font-bold  w-52  mx-auto'><button className='btn btn-outline'>See All Jobs</button></h1>
          </div>
          
      );
};

export default ExperiencedJob;