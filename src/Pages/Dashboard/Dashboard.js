import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-primary text-2xl font-bold'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>

                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add review</Link></li>
                    {/* {admin && <> */}
                        <li><Link to='/dashboard/manageAllOrders'>Manage Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                    {/* </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;