import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const AdminSideBar = () => {

    return(
        <div>
            <div className="dashboard">
                <div style={{display: "flex"}}>
                    <img style={{borderRadius: "0px"}} width={100} src={require('./images/dash.png')}></img>
                    <h6 style={{paddingTop: "30px",paddingLeft: "20px", color: "white"}}>TULMART DASHBOARD</h6>
                </div>
                <div className='parts'>
                    <hr></hr>
                    <ul>
                        <p>Stock Actions</p>
                        <li className='kk'> <Link to={'/addStock'}>Add Stock</Link></li>
                        <li>  <Link style={{textDecoration: "none", color: "white"}} to={'/deleteStock'}>Delete Product</Link></li>
                        <li>View Product</li>
                        <hr></hr>

                        <p>User Actions</p>
                        <li>Add Admin</li>
                        <li>Add User</li>
                        <li>View All</li>

                    </ul>
                </div>

            </div>
        </div>

    )


}
export default AdminSideBar