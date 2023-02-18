import React, { useContext, useState } from 'react';
// import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';



const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const navigate = useNavigate();
    // if(isLoading){
    //     <Loading></Loading>
    // }

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
                  const user = result.user;
                console.log(user);
                setCreatedUserEmail(email);
            })
       
        .catch(err => console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control">
                             <select name="Type" className="select select-bordered w-full max-w-xs">
                            <option disabled value="">What kind of account do you want to make?</option>
                            <option value="seller">seller
                            </option>
                            <option value="buyer">buyer</option>
                            </select>
                        </div>
              <div className="form-control mt-6">
                 <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
            </form>
            <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;