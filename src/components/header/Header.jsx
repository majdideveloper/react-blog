import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerSmallTitle">React & Node</span>
                <span className="headerLargeTitle">Blog</span>
            </div>
            <img className='headerImage' src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>

    )
}
