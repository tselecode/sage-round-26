import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>



        </Route>

      </Routes>
    </BrowserRouter>
  </>
}
export default App;
