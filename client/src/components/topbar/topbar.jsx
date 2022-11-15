import { Link } from "react-router-dom";
import './topbar.css';

export default function Topbar() {
    const user = false
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-github"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link> 
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {
                user ? ( <img className='topImage' src="https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />)
                : 
                (<ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>

                </ul>
                    )
                }
               
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div >
    )
}
