
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCatagory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/mens_banner.jpg'
import women_banner from './Components/Assets/women_banner.jpg'
import kids_banner from './Components/Assets/kids_banner.jpg'
import DataProvider from './Context/DataContext';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product'


function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCatagory category="men" banner={mens_banner} />} />
            <Route path='/women' element={<ShopCatagory category="women" banner={women_banner} />} />
            <Route path='/kids' element={<ShopCatagory category="kids" banner={kids_banner} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </div>

  );
}

export default App;
