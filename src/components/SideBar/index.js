import React from 'react';
import { Link } from "react-router-dom";  

export default function SideBar() {
  return (
    <aside className="sidebar sidenav">
      {/* <a href="javascript:void(0);" onclick="openmenu()" class="icons">
 <i class="fa-solid fa-bars"></i>
    </a> */}
      <ul>
        <li className="activemenu"><Link to="/">Dashboard</Link></li>
        <li><Link to="/investor">Investors</Link></li>
        <li><Link to="/opportunities">Opportunities</Link></li>
        <li><Link to="/">Orders</Link></li>
        <li><Link to="/">Profile</Link></li>
      </ul>
    </aside>

  )
}
