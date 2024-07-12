
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const {register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });

        if(res.data.success){
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

        // console.log(res.data);
    
    }
    return (
        <div>
        <SectionTitle heading="add an item" subHeading="what's new?" ></SectionTitle>
        
        <div className="bg-[#E8E8E8] p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6 text-black">
        <label className="label">
          <span className="label-text text-black">Recipe name?</span>
        </label>
        <input type="text" 
        placeholder="Recipe name" 
        {...register('name', {required: true})}
        className="input input-bordered w-full bg-white " />
      </div>

      <div className="flex gap-6 ">
     {/** category */}
     <div className="w-full">
     <label className="label">
     <span className="label-text text-black">Category</span>
   </label>
   <select defaultValue="default" {...register('category' , {required: true})}
      className="  select select-bordered w-full bg-white">
          <option disabled value="default"> Select a category  ?</option>
          <option value="salad">Salad</option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="dessert">dessert</option>
     </select>
     </div>

     {/** price */}

     <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text text-black">Price</span>
        </label>
        <input type="text" 
        placeholder="Price" 
        {...register('price' , {required: true})}
        className="input input-bordered w-full bg-white" />
      </div>

      </div>

      {/**recipe details */}

      <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black">Recipe Details</span>
  </label>
  <textarea {...register('recipe')} className="textarea textarea-bordered h-24 bg-white" placeholder="Bio"></textarea>
</div>



<div className=" form-control w-full my-6">
<input {...register('image' , {required: true})} type="file" className="file-input w-full max-w-xs bg-white" />
</div>



<button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] ">
 Add Item
 <FaUtensils className="ml-4"></FaUtensils>
 </button>
    </form>
        </div>
        </div>
    );
};

export default AddItems;