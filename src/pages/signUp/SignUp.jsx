import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

  // =================== react form components 
  // ==================== useForm hook 
    const {
      register,
      handleSubmit,
      // watch,
      formState: { errors },
    } = useForm();

    //========================== sign Up
    const {createUser} = useContext(AuthContext)

    const onSubmit = data => {
      console.log(data)
      createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
    }

    return (
        <div>
        <div>
          <Helmet>
          <title>
          Bangla-restaurant || SignUp
          </title>
          </Helmet>
          </div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", {required: true})} name='name' placeholder="name" className="input input-bordered"  />
                {errors.name && <span className='text-red-600'> name is required</span>}
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered"  />
                {errors.name && <span className='text-red-600'> email is required</span>}

                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true, 
                  minLength: 6, 
                  maxLength: 20,
                  // pattern: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
                  pattern: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{6,}$/
                })} name='password' placeholder="password" className="input input-bordered"  />
                {errors.password?.type === "minLength" && (
                  <p role="alert">password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert">password must be under the 20 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert">password must have one upper case , one lower case , one special character and one digit</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit"  />
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;