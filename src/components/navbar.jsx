import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Navigation() {
const [showmenu, setShowMenu] = useState(false);
const [isopen, setIsOpen] = useState(false);
const HandleMenu=()=>{
    setShowMenu(!showmenu);
    setIsOpen(!isopen);
}
window.onscroll = () => {
    if (window.scrollY > 200) {
        setShowMenu(false);
        setIsOpen(false);
    }
};
  return (
    <>
    <header className="container-fluid d-none d-lg-flex header1">
        <nav className="container"> 
            <div className="nav1 row ">
                <div className="col-lg-6 col-md-12 nav1-design p-0 d-flex pb-2 pt-2">
                    <div className="d-flex gap-3  justify-center align-items-center">
                        <i className="logos fa-solid fa-envelope"></i>
                        <p className="logo-text mb-0"> info@company.com</p>
                    </div>
                    <div className="d-flex gap-3 mx-5 justify-center align-items-center">
                        <i className="logos fa-solid fa-map"></i>
                        <p className="logo-text mb-0"> Sunny Isles Beach, FL 33160</p>
                    </div>
                </div>
                <div className="col-lg-6 nav1-design p-0 d-flex pb-2 pt-2 justify-content-end align-items-center">
                    <div className="p-2 me-2 social-logo"><i className="social-logo-in fa-brands fa-facebook"></i></div>
                    <div className="p-2 me-2 social-logo"><i className="social-logo-in fa-brands fa-twitter"></i></div>
                    <div className="p-2 me-2 social-logo"><i className="social-logo-in fa-brands fa-linkedin"></i></div>
                    <div className="p-2 me-2 social-logo"><i className="social-logo-in fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </nav>

    </header>
    <header className=" navbar shadow container-fluid" id="nav2-main">
        <nav className="nav-2-container container p-0">
            <div className="nav2 row col-12 p-0 pb-0 pt-4 d-flex ">
                <h1 className=" col-lg-2 col-md-6 col-4 fs-3 fw-bold  fs-md-5">VILLA</h1>
                <i onClick={HandleMenu} className={`col-lg-2 col-2 col-md-6 fs-4 d-flex justify-content-end d-lg-none  text-black ${isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`} id="bars"></i>

                <ul className={`col-lg-10 ${showmenu ? 'nav-mob' : 'd-none'} col-md-12 list-unstyled d-lg-flex  justify-content-end`}  id="navlist">
                    <li className="w-full nav-item-li"><Link className={`text-black ${showmenu ? 'text-white' : 'text-black'} text-capitalize nav-items bg-transparent py-1`} to="/">Home</Link></li>
                    <li className="w-full nav-item-li"><Link className={`text-black ${showmenu ? 'text-white' : 'text-black'} text-capitalize nav-items bg-transparent py-1`} to="/Properties">Properties</Link></li>
                    <li className="w-full nav-item-li"><Link className={`text-black ${showmenu ? 'text-white' : 'text-black'} text-capitalize nav-items bg-transparent py-1`} to="/Contact"> Contact us</Link></li>
                    <li className="w-full nav-item-li"><Link className={`text-black ${showmenu ? 'text-white' : 'text-black'} text-capitalize nav-items bg-transparent py-1`} to="/Add-Property"> Add Property</Link></li>
                    <div className="special-link d-none d-lg-flex  justify-content-center align-items-center gap-1 ">
                        <span className="special-icon ">
                            <i className="fa-solid fa-calendar  text-white"></i>
                        </span>
                         <li className="text-center"><Link className="text-capitalize nav-items text-white" to="/BookSchedule"> schedule visit</Link></li>
                    </div>
                </ul>
            </div>
        </nav>    
    </header>
    </>
  )
}

export default Navigation
