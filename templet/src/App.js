import React ,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import FHome from './FHome';
import Login from './pages/Login';



function App() {
 const [islogged ,setIslogged] = useState(false)

 const isLoginHander =(islog)=>{
   setIslogged(islog)
 }

  return (
    <div>
      {/* <Login/>
      <Routes> */}
        {/* <Route path='/' element={<FHome/>}/> */}
        {!islogged ? <Login  loginHander={isLoginHander}/> : <FHome setIslogged ={setIslogged}/>} 
      {/* </Routes> */}
    </div> 
  );
}

export default App;
