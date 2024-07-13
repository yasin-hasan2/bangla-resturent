import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUser } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend  } from 'recharts';



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
      queryKey: ['order-stats'],
      queryFn: async () => {
        // loading(true);
        const res = await axiosSecure.get('/order-stats');
        return res.data;
      }
    })
console.log(chartData)
    // custom shape for the bar chart 
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // pie chart data

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }; 

    const pieChartData = chartData.map(data => {
      return {name: data.category, value: data.revenue}
    })

    return (
        <div className='bg-[#F3F3F3]'>
            <h2 className="text-4xl font-semibold mb-4 ml-4">
            <span>Hi, welcome Back!</span>
            <br />
            <h3 className='text-[#D1A054] '>
            {
              user?.displayName ? user.displayName : 'Back'
          }
            </h3>
            </h2>
            <div className="   flex flex-col lg:flex-row justify-center items-center gap-4 ">
            
            
            <div className=" rounded-lg stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-[#FFFFFF] ">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="inline-block h-8 w-8 stroke-current text-white"></FaDollarSign>
            </div>
            <div className="stat-title text-white">Revenue</div>
            <div className="stat-value">${stats?.revenue}</div>
            <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
          </div>
        
          <div className=" rounded-lg stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
            <div className="stat-figure text-secondary">
              <FaUser className="inline-block h-8 w-8 stroke-current text-white" ></FaUser>
            </div>
            <div className="stat-title text-white">New Users</div>
            <div className="stat-value text-white"> {stats?.users} </div>
            <div className="stat-desc text-white">↗︎ 400 (22%)</div>
          </div>
          
          <div className=" rounded-lg stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
            <div className="stat-figure text-secondary">
              <FaBook className="inline-block h-8 w-8 stroke-current text-white" ></FaBook>
            </div>
            <div className="stat-title text-white">Menu Items</div>
            <div className="stat-value text-white"> {stats?.menuItems} </div>
            <div className="stat-desc text-white">↗︎ 400 (22%)</div>
          </div>
        
          <div className="rounded-lg stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <div className="stat-title text-white">Orders</div>
            <div className="stat-value text-white"> {stats?.orders} </div>
            <div className="stat-desc text-white">↘︎ 90 (14%)</div>
          </div>
            
            </div>


            <div className='flex items-center flex-col lg:flex-row border mt-10 bg-[#FFFFFF] pb-10'>
            <div className="lg:w-1/2">
            <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
      
      {
        /**
         * 
         * chartData.map((data, index) => {
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        })
         */
      }
      
          {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
        
      </Bar>
    </BarChart>
            </div>
            <div className="w-1/2">
            <PieChart width={400} height={400}>
            <Legend></Legend>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
            </div>
            </div>

        </div>
    );
};

export default AdminHome;