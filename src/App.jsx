import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import SignPage from './component/Signin';
import LoginPage from './component/Login';
import Cart from './component/Cart';


function App() {
  return (
    <Router>
    
      <Routes>
        
        <Route path='/productlist' element={<ProductList />} />
        
        <Route path='/signin' element={<SignPage />} />
        
        <Route path='/' element={<LoginPage />} />
        
        <Route path='/product/:productId' element={<ProductDetail />} />
        
        <Route path="/cart" element={<Cart />} />
        
        <Route path='*' element={<h2>404 - Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
