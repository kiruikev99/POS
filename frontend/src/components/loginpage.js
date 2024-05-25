import pos from '../images/pos.png'
import you from '../images/wall.jpg'
import './login.css'
import { useContext, useState } from 'react';
import { LoginContex } from './Context/LoginContex';
import background from '../images/wallpaper.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


 const LoginPage = () => {
    
    const { setUsername, setPosPage} = useContext(LoginContex);

// const navigate = useNavigate();

//   function handleClick() {
//     navigate("/home");
//   }

const handleInputChange = (e) => {
    setUsername(e.target.value);
};

const Click = () =>{
    setPosPage(true)
}




    return(
        <div className="division">
           
           <div className="area1">

                <div className='color-section'>

                        <div className="image">
                            <img width={130} src={pos}></img>
                        </div>
                        <div className='welcome'>
                            <h2>WELCOME <span style={{color: "blue"}} >BACK</span> </h2>
                        </div>
                        <div className='form-section'>
                            <form action='' method=''>
                                <input 
                                onChange={handleInputChange} placeholder='Enter Username' required type='text'></input><br></br><br></br>
                                <input name='password' placeholder='Enter Password' type='text'></input><br></br><br></br>
                               
                               
                                <button
                                type='submit' 
                                onClick={Click}> <Link to="/Landing">Submit</Link> </button>
                            </form>
                    </div>
                </div>

           </div>

           <div style={{paddingTop: "70px"}} className='area2'>
            <img height={600} width={600} src={you}></img>
           </div>
        </div>
    )


}
export default LoginPage;