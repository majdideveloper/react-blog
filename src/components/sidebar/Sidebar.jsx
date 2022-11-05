import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar" >
      <div className="sidebarItem">
        <span className="sidebarItemTitle">ABOUT ME</span>
        <img className='sidebarImage' src="https://images.pexels.com/photos/14036566/pexels-photo-14036566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          sed! Itaque quo rem doloribus repellendus laboriosam!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">LIFE</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">SPORT</li>
          <li className="sidebarListItem">STYLE</li>
          <li className="sidebarListItem">TECH</li>
          <li className="sidebarListItem">CINEMA</li>

        </ul>

      </div>
      <div className="sidebarItem">
        <span className="sidebarItemTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="siderbarSocialIcon fa-brands fa-square-instagram"></i>
          <i className="siderbarSocialIcon fa-brands fa-linkedin"></i>
          <i className="siderbarSocialIcon fa-brands fa-square-github"></i>
        </div>


      </div>
    </div>
  )
}
