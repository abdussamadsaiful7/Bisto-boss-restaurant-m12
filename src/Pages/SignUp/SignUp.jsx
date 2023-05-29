import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import img from '../../assets/others/authentication2.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name:data.name, email:data.email}
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    toast.success('User created successfully!');
                                    navigate('/')
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })

    };



    return (
        <div>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 login-img">
                <div className="hero-content flex-col lg:flex-row-reverse my-14 md:mx-14 shadow-lg 
                 shadow-black md:pl-10">
                    <div className="text-center lg:text-left">
                       <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-2xl text-center font-bold">Sign Up please!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })}
                                    className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })}
                                    className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,

                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 character </p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>password must be less then 20 character </p>}
                                {errors.password?.type === 'required' && <p className='text-red-500'>password must be one uppercase, lowercase character and one digit</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='pl-4 pb-4'>Already have an account ?
                            <Link className='text-red-500' to='/login'>Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;