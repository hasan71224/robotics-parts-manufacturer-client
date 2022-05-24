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

        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
