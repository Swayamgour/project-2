
// import  Images from './images.png'
// import './Images/images.jpg'

// import  './Images/images.jpeg'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
// import { Link } from 'react-router-dom'
//  import logo from './logo.png'
import Log from'../Pages/Log'
 import '../Pages/Navbar.css'
import Home from './Home'



const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
      <>
        <div className='header'>
        {/* <Router><switch><Route exact path='Log' element={<Log/>}/></switch></Router> */}

            <nav className='navbar'>
                {/* { <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> } */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                 
                <li className='nav-item'>
                        {/* <a href='./About' onClick={closeMenu}>About</a> */}
                        <img src='https://us.123rf.com/450wm/john79/john791702/john79170200044/john79170200044.jpg?ver=6' width='1%' height='1%'></img>
               {/* <Link  to="Hom"  smooth={true} offset={50} duration={100} onClick={closeMenu}><img src={Images} />  </Link> */}
                    </li>
                     
                    <li className='nav-item'>
                        {/* <a href='/' onClick={closeMenu}>Home</a> */}
                        <Link  to="Hom"  smooth={true} offset={50} duration={100} onClick={closeMenu}>Home </Link>
                                
                            
                    </li>
                    <li className='nav-item'>
                    <Link  to="Cla"  smooth={true} offset={50} duration={100} onClick={closeMenu}>Classes </Link>
                        {/* <a href='./Classes' onClick={closeMenu}>Classes</a> */}
                    </li>
                    <li className='nav-item'>
                        {/* <a href='./About' onClick={closeMenu}>About</a> */}
                        <Link  to="Abo"  smooth={true} offset={50} duration={100} onClick={closeMenu}>About </Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#Pricing' onClick={closeMenu}>Pricing</a> */}
                        <Link  to="Pri"  smooth={true}  duration={100} onClick={closeMenu}>Pricing </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="pi"  smooth={true}  duration={100} onClick={closeMenu}>Contect Us </Link>
                        {/* <a href='#Pricing' onClick={closeMenu}>Pricing</a> */}
                       {/* <button className='btn1'> <a href='/Log'>Join Us</a></button> */}
                   

                    </li>
                    <li className='nav-item'>
                    <button className='btn2'><a href='./Registration'>Join US</a></button>
                        </li>

                </ul>
                
            </nav>
        </div>
       <Home/>
        </>
    )
}

export default Navbar;