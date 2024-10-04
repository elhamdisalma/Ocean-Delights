import './App.css';

import './index.css';
import 'flowbite/dist/flowbite.min.css';




import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cakes from './Pages/Cakes';
import ShopCategory from './Pages/ShopCategory';
import Food from './Pages/Food';
import LoginSignup from './Pages/LoginSignup';
import Soupe from './Pages/Soupe'
import Bread from './Pages/Bread';
import Pizza from './Pages/Pizza';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/cakes' element={<Cakes />}/>
        <Route path='/pizza' element={<Pizza />}/>
        <Route path='/' element={<Food />}/>
        <Route path='/Bread' element={<Bread />}/>
        <Route path="product" element={<Pizza/>}>
          <Route path=':productId' element ={<Pizza/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
