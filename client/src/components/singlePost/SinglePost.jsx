import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost" >
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author :<b>Majdouch</b></span>
                    <span className="singlePostDate" >1 hour ago</span>

                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum labore corporis ipsam esse distinctio,
                    iste sed deserunt expedita vero alias exercitationem reiciendis
                    possimus cum porro quis nostrum fugiat quas voluptate!
                </p>


            </div>

        </div>
    )
}
