import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './components/pages/Shop';
import Product from './components/pages/Product';
import Header from './components/pages/Header';
import ShopContextProvider from './components/pages/ShopContext';  // Import ShopContextProvider
// import CartPage from './components/pages/CartPage';
// import ShoppingCart from './components/pages/ShoppingCart';
import Cart from './components/pages/Cart';
import MailingAddress from './components/pages/MailingAddress';
import AllProduct from './components/pages/AllProduct';
import Footer from './components/pages/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import RefundPolicy from './components/pages/RefundPolicy';
// import { ShoppingCart } from '@mui/icons-material';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>  {/* Wrap everything inside ShopContextProvider */}
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path="/product/:productId" element={<Product />} />
            {/* <Route path='/CartPage' element={<CartPage />} /> */}
            {/* <Route path='/' element={<ShoppingCart />} /> */}
                    <Route path='/Cart' element={<Cart/>} />
                    <Route path="/MailingAddress" element={<MailingAddress />} />
                    <Route path='/all_Product' element={<AllProduct/>} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                                        <Route path="/RefundPolicy" element={<RefundPolicy />} />


                    

                                          
            
          </Routes>
          <Footer/>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
