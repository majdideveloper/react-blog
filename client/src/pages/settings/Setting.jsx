import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'

export default function Setting() {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update your Title</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label >Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label >User Name</label>
                    <input type="text" placeholder='Majdouch'/>
                    <label >Email</label>
                    <input type="email" placeholder='majdiaribi@gmail.com'/>
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>



                </form>
            </div>
            <Sidebar />

        </div>
    )
}
