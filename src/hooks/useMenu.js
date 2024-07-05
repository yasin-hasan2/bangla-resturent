// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    // // console.log(menu)
    //  useEffect( () =>{
    //     fetch('https://bistro-boss-server-nine-gules.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data);
    //         setLoading(false)

    //     }
    // )
    
    // .catch(error => {
    //     console.error('Error fetching menu:', error);
    // });
    //  },[]);

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })


     return [menu, loading]
}
export default useMenu