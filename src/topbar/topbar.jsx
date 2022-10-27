import './topbar.css'

export default function Topbar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-github"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>

                </ul>
            </div>
            <div className="topRight">
                <img className='topImage' src="https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
