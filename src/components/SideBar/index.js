import React from 'react';
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="sidebar sidenav">
      {/* <a href="javascript:void(0);" onclick="openmenu()" class="icons">
 <i class="fa-solid fa-bars"></i>
    </a> */}
      <ul>
        <li className="">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/investor" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>Investors</NavLink>
        </li>
        <li>
          <NavLink to="/opportunities" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>Opportunities</NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>Orders</NavLink>
        </li>
        <li>
          <NavLink to="/" >Profile</NavLink>
        </li>
      </ul>
    </aside>

  )
}
