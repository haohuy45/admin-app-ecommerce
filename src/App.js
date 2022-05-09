import { } from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/header/Header';
import './app.css'
import Home from './page/home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './page/userList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/ProductList';
import SignIn from './page/signin/SignIn';
import SignUp from './page/signup/SignUp';
import PrivateRoute from './components/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { getInititalData, isUserLoggedIn } from './actions';
import { Product } from './page/product/Product';
import { Order } from './page/order/Order';
import { Category } from './page/category/Category';
import Header from './components/header/Header';
import MainLayout from './components/layout/MainLayout.jsx'


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
    // if(auth.authenticate){
    // }
    dispatch(getInititalData())
  }, [])
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path='/product' element={<PrivateRoute />}>
            <Route exact path='/product' element={<Product />} />
          </Route>
          <Route path='/orders' element={<PrivateRoute />}>
            <Route path='/orders' element={<Order />} />
          </Route>
          <Route exact path='/category' element={<PrivateRoute />}>
            <Route exact path='/category' element={<Category />} />
          </Route>
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          {/* <Route path='/product' element={<ProductList />} /> */}
          <Route path='/product/:productId' element={<NewUser />} />
          <Route path='/newUser' element={<NewUser />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
