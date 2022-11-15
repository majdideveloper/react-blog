import {
    Link
} from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <from className="loginForm">
                <label className='loginLabel'>Email</label>
                <input type="text" className='loginInput' placeholder='write your Eamil' />
                <label className='loginLabel'>Password</label>
                <input type="password" className='loginInput' placeholder='write your PassWord' />
                <button className="loginButton"><Link to="/Login" className="link">Login</Link></button>
                <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>

            </from>
        </div>
    )
}
