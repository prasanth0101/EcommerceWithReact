import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCatagory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCatagory />} />
          <Route path='/women' element={<ShopCatagory />} />
          <Route path='/kids' element={<ShopCatagory />} />
          <Route path='/cart' element={<ShopCatagory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
