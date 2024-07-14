import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey:['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })


    return (
        <div>
        <SectionTitle heading="PAYMENT HISTORY" subHeading="---At a Glance!---" ></SectionTitle>
        <div className=" lg:w-[80%] mx-auto overflow-x-auto  p-5 shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] bg-[#FFFFFFFF]">
        <h2 className="text-3xl">Total Payments: {payments.length} </h2>
        <div className="overflow-x-auto mt-5">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-[#D1A054] text-white uppercase font-light'>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Price</th>
        <th className="hidden lg:flex">Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="text-[#636161]">
      {payments.map((payment, index) => <tr key={payment._id}>
        <th> {index + 1} </th>
        <td> {user.email} </td>
        <td> ${payment.price} </td>
        <td className="hidden lg:flex"> {payment.transactionId} </td>
        <td> {payment.status} </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default PaymentHistory;