import "./register.css"
import {
    Link
} from "react-router-dom/Link";

export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <from className="registerForm">
                <label className='registerLabel'>UserName</label>
                <input type="text" className='registerInput' placeholder='write your UserName' />
                <label className='registerLabel'>Email</label>
                <input type="text" className='registerInput' placeholder='write your Eamil' />
                <label className='registerLabel'>Password</label>
                <input type="password" className='registerInput' placeholder='write your PassWord' />
                <button className="registerButton"><Link to="/register" className="link">Register</Link></button>
                <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>

            </from>
        </div>
    )
}
