import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../test.scss';


class Navbar extends Component {
	render(){
		return (
		 <nav id = 'navColor' style = {{width:'100%'}}className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			  <Link href='/'><a className="navbar-brand">CO</a></Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent test"  >
			    <ul className="navbar-nav ml-auto">
			      <li className="nav-item">
			        <Link href= '/projects'><a className="nav-link" >Projects</a></Link>
			      </li>
			      <li className="nav-item ">
			        <Link href= '/skills' ><a  className="nav-link">Skills</a></Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}  

export default Navbar;