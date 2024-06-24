// import React from 'react';

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu,  refetch] = useMenu();
    const axiosSecure = useAxiosSecure();


    const handleDeleteItem = (item) => {
        console.log(item._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            console.log(result);
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    console.log(res.data);  // Log the entire response
                    if (res.data.deletedCount > 0) {
                      refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: ` ${item.name} has been deleted.`,
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: ` ${item.name} could not be deleted.`,
                            icon: "error"
                        });
                    }
                } catch (error) {
                    console.error("Delete request failed:", error);
                    Swal.fire({
                        title: "Error!",
                        text: `Failed to delete ${item.name}`,
                        icon: "error"
                    });
                }
            }
        });
    }

    

    return (
        <div>
            <SectionTitle heading="manage all items" subHeading="harry Up" ></SectionTitle>
            <div>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          #
          </label>
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item, index)=> <tr key={item._id} >
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.name}
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>$ {item.price}</td>
            <td>
             <Link to={`/dashboard/updateItem/${item._id}`} >
             <button
            className='btn btn-lg btn-ghost text-orange-500 '>
            <FaEdit className=' text-2xl'></FaEdit>
            </button>
             
             </Link>            
            </td>
            <td>
            <button onClick={() => handleDeleteItem(item)}
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

export default ManageItems;