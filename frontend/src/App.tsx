import './App.css';
import UserForm from './ui/users/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Confiration from './ui/Confirmation';
import Navbar from './ui/Navbar';
import ProductDetails from './ui/products/ProductDetails';
import Cart from './ui/user_settings/Cart';
import ProductSearch from './ui/products/ProductSearch';
import ProductNovelties from './ui/products/ProductNovelties';
import ProductCategories from './ui/products/ProductCategories';
import UserProfile from './ui/user_settings/UserProfile';
import ProductForm from './ui/products/ProductForm';
import { connect } from 'react-redux';
import { getProductList } from './ducks/products/operation';
import { GetProductListProps } from './ui/interfaces';
import { useEffect } from 'react';

function App({ getProductList }: GetProductListProps) {
  useEffect(() => {
    getProductList();
  });

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/form/:action' element={<UserForm />} />
          <Route path='/confirm/:userId/:login' element={<Confiration />} />
          <Route path='/details/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<ProductSearch />} />
          <Route path='/' element={<ProductSearch />} />
          <Route path='/novelties' element={<ProductNovelties />} />
          <Route path='/categories' element={<ProductCategories />} />
          <Route path='/user%20panel' element={<UserProfile />} />
          <Route path='/add/product' element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = {
  getProductList,
};

export default connect(null, mapDispatchToProps)(App);
