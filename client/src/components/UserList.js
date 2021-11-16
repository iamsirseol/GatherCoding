import React from 'react'
import '../css/userList.css'
function UserList({image,username,blog}) {
    // console.log(image,username,blog)
    return (
        <div className='userlist-page'>
            <div className='userlist-profile'><img src={image}></img></div>
            <span className='userlist-username'>{username}</span>
            <span className='userlist-blog'><a href={blog} target='_blank'>{blog}</a></span>
        </div>
    )
}

export default UserList
