import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Footer from './components/Footer';
import CartProvider from './components/CartContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import OrderConfirmationPage from './components/OrderConfirmationPage';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
