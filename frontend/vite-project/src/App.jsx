import React from "react";
import "./App.css";
import { Routes,Route } from 'react-router-dom';
import Main from "./layout/Main/Main";
import Home from "./pages/HomePage/Home";
import Basket from "./pages/BasketPage/Basket";
import AddPage from "./pages/AddPage/admin";


function App() {
	return (
		<>

<Routes>
  <Route path ='/' element = {<Main/>}>
     <Route path='/admin'element={<AddPage/>}></Route>
  <Route path='/Basket' element={<Basket/>}></Route>
       <Route path ='/Home' element={<Home/>}></Route>
  </Route>
  </Routes>
		</>
	);
}

export default App;
