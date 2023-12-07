import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"





const App = () => {
  return (
    <div>


      <div  className="bg-slate-900">
        <Navbar></Navbar>
      </div>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>


    </div>
  )

  }
export default App;
