import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.commbox.io/wp-content/uploads/2019/10/32-1-1024x597.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">We are a highly trusted company to give opportunity for building a safe carrer.</p>
                       
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row flex justify-center">
                    <div class="md:col-span-8 pb-5 header-text">
                        <h1 className='text-4xl font-semibold mt-8 pl-5'>Why Choose Us</h1>
                        <p>
                            Who are in extremely love with eco friendly system.
                        </p>
                    </div>
                </div>
                </div>
                <div class="flex  gap-2">
                    <div class="lg:col-span-4 md:col-span-6 ">
                    <div className="card w-96 pr-1 pl-1 bg-pink-100 hover:bg-slate-50 text-black">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Expert Technicians</h2>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="lg:col-span-4 md:col-span-6">

                    <div className="card w-96 bg-pink-100 hover:bg-slate-50 text-black">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Professional Service</h2>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="lg:col-span-4 md:col-span-6">
                    <div className="card w-96 bg-pink-100 hover:bg-slate-50 text-black">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Great Support</h2>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="lg:col-span-4 md:col-span-6">

                    <div className="card w-96 bg-pink-100 hover:bg-slate-50 text-black">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Technical Skills</h2>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        
                    </div>
                  
                        </div>
                    </div>
            


    );
};

export default AboutUs;