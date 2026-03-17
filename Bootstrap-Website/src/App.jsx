import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./components/Header";
import "./App.css";
import Home from './pages/Home';
import Courses from "./pages/Courses";
import Shop from "./pages/Shop";
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Instructor from "./pages/instructor";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
      </Routes>
    </Router>
  );
}

export default App;