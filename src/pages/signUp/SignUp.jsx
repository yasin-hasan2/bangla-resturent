import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialSignIn from '../../components/socialSignIn/SocialSignIn';
import signInImg from '../../assets/img/others/authentication2.png'

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  // =================== react form components 
  // ==================== useForm hook 
    const {
      register,
      handleSubmit,
      reset,
      // watch,
      formState: { errors },
    } = useForm();

    //========================== sign Up
    const {createUser, updateUserProfile} = useContext(AuthContext)


    const navigate = useNavigate();

    const onSubmit = data => {
      console.log(data)
      createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database')
              reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
            }
          })
          
        })
        .catch(error => console.log(error))
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
        <div className="hero min-h-screen bg-logInCover ">
        <div className="hero-content lg:w-[80%] flex-col lg:flex-row-reverse justify-between shadow-[20px_35px_60px_-15px_rgba(0,0,0,0.3)] border-2 p-5">
          <div className="text-center lg:text-left  ">
            <h1 className="text-5xl font-bold text-center mb-4">Sign Up now!</h1>
            <img src={signInImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm  ">
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Name</span>
                </label>
                <input type="text" {...register("name", {required: true})} name='name' placeholder="name" className="input input-bordered   bg-[#FFFFFF] text-[#D0D0D0]" />
                {errors.name && <span className='text-red-600'> name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Photo URL</span>
                </label>
                <input type="file" {...register("photoURL", {required: true})}  placeholder="Photo URL" className="file-input w-full max-w-xs bg-[#FFFFFF] text-[#D0D0D0]"  />
                {errors.photoURL && <span className='text-red-600'> Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered   bg-[#FFFFFF] text-[#D0D0D0]"  />
                {errors.name && <span className='text-red-600'> email is required</span>}

                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true, 
                  minLength: 6, 
                  maxLength: 20,
                  // pattern: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
                  pattern: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{6,}$/
                })} name='password' placeholder="password" className="input input-bordered   bg-[#FFFFFF] text-[#D0D0D0]"  />
                {errors.password?.type === "minLength" && (
                  <p role="alert" className='text-red-500'>password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className='text-red-500'>password must be under the 20 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className='text-red-500'>password must have one upper case , one lower case , one special character and one digit</p>
                )}
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-outline bg-[#D1A054] text-white uppercase" type="submit"  />
              </div>
            </form>
            <div>
            <p className='px-6 text-[#D1A054] text-center mt-1'>
            <small>All ready have an account <Link to="/login" className='font-semibold'>Log In</Link> </small>
            </p>
            <SocialSignIn></SocialSignIn>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;