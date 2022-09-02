import React,{Component} from 'react';
import logo from './../../Assests/icon.png'
import "../header/Header.css"
import { Link} from "react-router-dom";


export default function Header() {
	return (<div>

<div>
    <Link to='/'>
	<header class="header-content header">
		<div class="logo-content">
	
			<img src= {logo} alt="logo" />

			<div>
				<span class="address-text">Address</span><br />
				<span class="address-text address-book">Book</span>
			</div>
		</div>
  </header>
  </Link>
  </div> 

	  
	  	
	</div>
	);
  }