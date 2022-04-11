import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Header from './componets/Header/Header';
import Shop from './componets/Header/Shop/Shop';
import Inventory from './componets/Inventory/Inventory';
import Login from './componets/Login/Login';
import Orders from './componets/Orders/Orders';
import Signup from './componets/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
