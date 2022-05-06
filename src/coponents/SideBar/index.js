import React from 'react'

export default function SideBar() {
  return (
    <aside className="sidebar sidenav">
      {/* <a href="javascript:void(0);" onclick="openmenu()" class="icons">
 <i class="fa-solid fa-bars"></i>
    </a> */}
      <ul>
        <li className="activemenu"><a href="/;">Dashboard</a></li>
        <li><a href="/;">Investors</a></li>
        <li><a href="/;">Opportunities</a></li>
        <li><a href="/;">Orders</a></li>
        <li><a href="/;">Profile</a></li>
      </ul>
    </aside>

  )
}
