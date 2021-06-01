import React,{useState} from 'react'
import "./index.css"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

export default function Navbar() {
	const [toggle,setToggle]=useState(false)
	return (
		<>
		
		<nav className={toggle ? "navbar hidden" : "navbar" }>
		<div className='navbar__logo'>
		<Link to="/"><i>saifie</i></Link>
			
		</div>
		<ul className="navbar__list">

			<li><Link to="/education">ABOUT</Link></li>
			<li ><Link to="/projects">PROJECTS</Link></li>
			
			<li><Link to="/reviews">REVIWES</Link></li>
			<li><Link>CONTACT</Link></li>
			<li><Link>LET'S TALK</Link></li>
			<li ><Link>HOME</Link></li>


			
		</ul>

		<div className="icon" onClick={()=>setToggle(!toggle)}>
			{ toggle ? (<FaBars/>) : (<ImCross/>)}
			</div>


			
		</nav>
		
		
		</>

	)
}