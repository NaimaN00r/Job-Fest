import React from 'react';
import logo from '../../src/Asset/pngtree-hand-drawn-online-learning-reading-education-illustration-png-image_2166730.jpeg';

const Header = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse bg-slate-100 bg-cover">
                <img src={logo} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold ">Job  Fest!</h1>
                    <p className="py-8 text-lg ">A company which provide the most wanted job to the job seeker.It sees,observes,knows about the canditate.Catagories the job in the best best way so that one can find job easily.</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                  
                    <div >
                    <div className="form-control w-42">
                        <label className="cursor-pointer label bg-pink-600 rounded-full">
                            <span className="label-text pl-32">Job Seeker</span>
                            <input type="checkbox" className="toggle toggle-accent" />
                            <span className="label-text pr-32">Job Poster</span>
                        </label>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Header;