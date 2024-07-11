// import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialSignIn from '../../components/socialSignIn/SocialSignIn';
import logInImg from '../../assets/img/others/authentication2.png';

const Login = () => {
  // const captchaRef = useRef(null)

  const [disabled, setDisabled] = useState(true)

  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/" ;

  console.log('state in the location ', location.state)

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user); 
          Swal.fire({
            title: "user login successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace: true});
        })
    }


    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      // console.log(user_captcha_value);
      if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
      }
      else{
        setDisabled(true)
      }
    }


    return (
        <div>
        <div>
          <Helmet>
          <title>
          Bangla-restaurant || LogIn
          </title>
          </Helmet>
          </div>
        <div className="hero min-h-screen bg-logInCover ">
        <div className="hero-content  lg:w-[80%]  justify-around  flex-col md:flex-row-reverse shadow-[20px_35px_60px_-15px_rgba(0,0,0,0.3)] border-2">
          <div className="text-center lg:text-left">
          <img src={logInImg} className="w-[500px]" alt="" />
          </div>
          <div className=" shrink-0 w-full max-w-sm   ">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered h-10 rounded-none bg-[#FFFFFF] text-[#D0D0D0]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered h-10 rounded-none bg-[#FFFFFF] text-[#D0D0D0]" required />
                
              </div>
              <div className="form-control">
                <label className="label ">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text"  name="captcha" placeholder="type the captcha" className="input input-bordered h-10 rounded-none bg-[#FFFFFF] text-[#D0D0D0]" required />
              </div>
              <div className="form-control mt-6">
                
              <input disabled={false} className="btn btn-outline bg-[#D1A054] text-white uppercase" name="submit" type="submit" />
                </div>
            </form>
            <p className='px-6 text-[#D1A054] text-center mt-1'>
            <small>New Here? <Link to="/signUp" className='font-semibold' > Create an account</Link> </small>
            </p>
            <div className='text-center'>
            <span className='text-black text-sm text-center '>or Sign In with</span>
            </div>
            <SocialSignIn></SocialSignIn>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;