import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price, 0)
   
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                // console.log(res);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
            })



        }
      });
   }
   
    return (
        <div  >
        <SectionTitle 
           subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"}
           >
           </SectionTitle>
        
           <div className=" lg:w-[80%] mx-auto overflow-x-auto  p-5 shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] bg-[#FFFFFFFF]">
           <div className='flex justify-evenly mb-8'>
           <h2 className='text-2xl font-semibold'>Items: {cart.length} </h2>
           <h2 className='text-2xl font-semibold'>Total Price: {totalPrice} </h2>
           {
             cart.length ?
             <Link  to="/dashboard/payment">
           <button  className='btn btn-primary bg-[#0091ff] text-white '>Pay</button>
           </Link>
           :
           <button disabled={!cart.length} className='btn btn-primary'>Pay</button>
           }
           </div>
  <table className="table w-full">
    {/* head */}
    <thead className='bg-[#D1A054] text-white uppercase font-light'>
      <tr>
        <th>
          #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th> Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='text-[#737373]'>
    {
        cart.map((item, index) => <tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
            {item.name}
            </td>
            <td>
            ${item.price}
            </td>
            <td>
            <button onClick={() => handleDelete(item._id)}
            className='btn btn-ghost btn-lg'>
            <FaTrashAlt className='text-red-600'></FaTrashAlt>
            </button>
            </td>

          </tr>)
    }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;