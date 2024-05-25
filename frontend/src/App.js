import logo from './logo.svg';

import LoginPage from './components/loginpage';
import { LoginContex } from './components/Context/LoginContex';
import { useState } from 'react';
import LandingPOS from './components/LandingPOS';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import DeleteProduct from './components/deleteproduct';
import AdminLogin from './components/AdminSection/AdminLogin';
import AdminPage from './components/AdminSection/AdminSideBar';
import AddStock from './components/AdminSection/AddStock';
function App() {
  const [Username, setUsername] = useState("");
  const [PosPage, setPosPage] = useState(false);

  return (


    <div className="App">
     
        
       <Routes>
        
       <Route path="/Landing" element={<>
        <Navbar/>
        <LandingPOS/>
       
       
       </>} />

       <Route path="/admin" element={<AdminLogin/>} />



       <Route path="/adminPOS" element={<AdminPage/>} />
       <Route path="/addStock" element={<AddStock/>} />

       


       <Route path="/addProduct" element={<>
        
        <Navbar/>
        <AddProduct/>
       
       </>} />

       <Route path="/DeleteProduct" element={<>
        
        <Navbar/>
        <DeleteProduct/>
       
       </>} />
       
       </Routes>
        

 

     
      

     
      
 
      
      
     


       


    

    
    </div>
  );
}

export default App;
