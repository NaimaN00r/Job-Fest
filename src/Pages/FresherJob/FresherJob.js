import React, { useEffect, useState } from 'react';
import Card1 from '../../Shared/Card1';

const FresherJob = () => {
const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    fetch('fresher.json')
    .then(res=> res.json())
    .then(data=>setJobs(data))
} , []);
    return (
        <div>
            <h1 className='text-center text-5xl mt-20 mb-20 font-bold border-b-4 border-black w-80 bg-emerald-200 ml-20'>Job Section</h1>
            <div className="hero-content text-center text-black">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Freshers Job</h1>
                        <p className="mb-5">If you are new in the job industry,checkout the following jobs</p>
                       
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

export default FresherJob;