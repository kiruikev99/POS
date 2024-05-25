import './adminlogin.css'
import { Link } from 'react-router-dom';
const AdminLogin = () => {
    return(
        <div className="admin-body">
            <div className="sections">
                <div className='img'>
                    <img src={require('./images/tulmart-login.png')}></img>
                    <h4 style={{color: "black", textAlign: "center", backgroundColor: "white", padding: "5px", width: "50vh", borderRadius: "5px"}}><b>ADMIN LOGIN</b></h4>
                </div>
                <div className='form'>
                        <br></br><br></br>
                    <form>
                        
                        <img width={150} src={require('./images/logo2.png')}></img>
                        
                        
                  
                        <input type='text' placeholder='Username'></input><br></br><br></br>
                        <input type='text' placeholder='Password'></input><br></br><br></br>
                        <div style={{display: "flex"}}>


                                <div>
                                <input type='radio'></input>
                                </div>

                            <div>
                            <label style={{paddingLeft: "10px"}}>Remember Me</label>
                            </div>

                                
                       
                        </div>
                        <br></br><br></br>
                        <button type='submit'> <Link to="/adminPOS">Submit</Link></button><br></br><br></br>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default AdminLogin;