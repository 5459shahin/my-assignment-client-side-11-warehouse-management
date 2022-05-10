import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './assignment-11/About/About';
import Footer from './assignment-11/Footer/Footer';
import Header from './assignment-11/Header/Header';
import Home from './assignment-11/Home/Home';
import Update from './assignment-11/Update/Update';
import ProductDetails from './assignment-11/ProductDetails/ProductDetails';
import Inventory from './assignment-11/Inventory/Inventory';
import ManageInventories from './assignment-11/ManageInventories/ManageInventories';
import AddItem from './assignment-11/AddItem/AddItem';
import Login from './assignment-11/Login/Login';
import ResetPassword from './assignment-11/ResetPassword/ResetPassword';
import Register from './assignment-11/Register/Register';
import MyItems from './assignment-11/MyItems/MyItems';
import Blogs from './assignment-11/Blogs/Blogs';
import NotFound from './assignment-11/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/productDetails/:ProductDetailsId' element={<ProductDetails></ProductDetails>}></Route>
         <Route path='/update/:id' element={<Update></Update>}></Route>
         <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
         <Route path='/ManageInventories' element={<ManageInventories></ManageInventories>}></Route>
         <Route path='/addItem' element={<AddItem></AddItem>}></Route>


         <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/myItem' element={<MyItems></MyItems>}></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
