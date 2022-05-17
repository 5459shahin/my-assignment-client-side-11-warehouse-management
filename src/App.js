import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './assignment-11/About/About';
import Footer from './assignment-11/Footer/Footer';
import Header from './assignment-11/Header/Header';
import Home from './assignment-11/Home/Home';
import ProductDetails from './assignment-11/ProductDetails/ProductDetails';
import AddItem from './assignment-11/AddItem/AddItem';
import Register from './assignment-11/Register/Register';
import Blogs from './assignment-11/Blogs/Blogs';
import NotFound from './assignment-11/NotFound/NotFound';
import Login from './assignment-11/Login/Login';
import RequireAuth from './assignment-11/RequireAuth/RequireAuth';
import AllProducts from './assignment-11/AllProducs/AllProducts';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/productDetails/:ProductDetailsId' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>

        }></Route>


        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>


        <Route path='/allItems' element={<AllProducts></AllProducts>} ></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
