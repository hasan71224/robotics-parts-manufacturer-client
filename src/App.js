import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Home/Blogs/Blogs';
import MyPortfolio from './Pages/Home/MyPortfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Home/Login/Login';
import Parts from './Pages/Parts/Parts/Parts';
import Purchase from './Pages/Parts/Purchase/Purchase';
import SignUp from './Pages/Home/Login/SignUp';
import RequireAuth from './Pages/Home/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import RequireAdmin from './Pages/Home/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/parts/:partsId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>

          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>

        </Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
