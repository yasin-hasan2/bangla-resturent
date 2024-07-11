import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
// import axios from 'axios';


const FoodCard = ({item}) => {
    const { _id ,name, image, price,recipe } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const  [, refetch]= useCart();

    const handleAddToCart = () => {
      // console.log(food)
      if(user && user.email){
        // TODO: send cart item to the database
        // console.log(user.email, food);
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to the cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count
            refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged In",
          text: "Please login to add to the cart ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {

            navigate('/login', {state: {from: location}})

            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success"
            // });
          }
        });
      }
    }
    return (
        <div>
        <div className="card h-[450px] rounded-none ">
        <figure><img src= {image} alt="Food Image" /></figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-500 text-white font-semibold' >$ {price} </p>
        <div className="card-body bg-[#F3F3F3]">
          <h2 className="card-title"> {name} </h2>
          <p className='text-sm'> {recipe} </p>
          <div className="card-actions justify-center">
            <button 
            onClick={ handleAddToCart}
            className="btn btn-outline text-[#BB8506] hover:text-white uppercase"> add to cart </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FoodCard;