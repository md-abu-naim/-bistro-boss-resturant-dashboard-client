import { FaCartArrowDown, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul>
                    <li><NavLink to='/dashboard/userHome' className='flex items-center p-4'><FaHome className="mr-2" /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation' className='flex items-center p-4'><FaCalendar className="mr-2" /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/cart' className='flex items-center p-4'><FaCartArrowDown className="mr-2" /> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/review' className='flex items-center p-4'><FaAd className="mr-2" /> Review</NavLink></li>
                    <li><NavLink to='/dashboard/myBookings' className='flex items-center p-4'><FaList className="mr-2" /> My Bookings</NavLink></li>

                    <div className="divider"></div> 
                    
                    <li><NavLink to='/' className='flex items-center p-4'><FaHome className="mr-2" />Home</NavLink></li>
                    <li><NavLink to='/order/salad' className='flex items-center p-4'><FaList className="mr-2" />Menu</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;