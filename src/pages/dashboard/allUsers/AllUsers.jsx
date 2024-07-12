// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} id an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }

    const handleDeleteUser = user => {
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
    
    
                axiosSecure.delete(`/users/${user._id}`)
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
        <div>
        <SectionTitle heading="MANAGE ALL USERS" subHeading="---How many??---" ></SectionTitle>
        <div className=" lg:w-[80%] mx-auto overflow-x-auto  p-5 shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] bg-[#FFFFFFFF]">
            <div className='flex justify-evenly my-4' >
            <h2 className='text-3xl' >All users</h2>
            <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto w-full">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-[#D1A054] text-white uppercase font-light'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th> Role</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody className="text-[#737373]">
      {
        users.map((user, index) => <tr key={user._id} >
            <th>{index + 1}</th>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td> 
            { user.role === 'admin' ? 'admin' :
              <button onClick={() => handleMakeAdmin(user)}
            className='btn btn-ghost btn-lg'>
            <FaUser className='text-orange-500'></FaUser>
            </button>
            }
            </td>
            <td>
            <button onClick={() => handleDeleteUser(user._id)}
            className='btn btn-lg btn-outline text-red-600 '>
            <FaTrashAlt className=' text-2xl'></FaTrashAlt>
            </button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllUsers;