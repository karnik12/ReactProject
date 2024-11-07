import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
          
        <div className="navbar-bg"></div>

        <nav className="navbar navbar-expand-lg main-navbar">
            <ul className="navbar-nav navbar-right">

                <li className="dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1"/>
                    <div className="d-sm-none d-lg-inline-block">Hi, Admin</div></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item has-icon text-danger"> Logout</a>
                    </div>
                </li>
            </ul>
        </nav>

        
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index-2.html">CodiePie</a>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <a href="index-2.html">CP</a>
                </div>
                {/* <ul className="sidebar-menu">
                    <li className="menu-header">Dashboard</li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="index-0.html">Analytics</a></li>
                            <li><a className="nav-link" href="index-2.html">Ecommerce</a></li>
                        </ul>
                    </li>
                    <li className="menu-header">Starter</li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Layout</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="layout-default.html">Default Layout</a></li>
                            
                            <li><a className="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
                        </ul>
                    </li>

                    <li><a className="nav-link" href="credits.html"><i className="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
                </ul> */}
                <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                    <a href="/admin/users" className="btn btn-primary btn-lg btn-block btn-icon-split"> Users</a>
                </div>
            </aside>
            
        </div>
        <Outlet/>
    </>
  )
}

export default Sidebar
