import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../test.scss';


class Navbar extends Component {
	render(){
		const openNewTab= (url) =>{
			window.open(`${url}`)
		}
		return (
		 <nav id = 'navColor' style = {{width:'100%'}}className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			  <Link href='/'><a className="navbar-brand logo"><strong>CO</strong></a></Link>
			  <div className="navbar-toggler">
			    <button type = 'button' className='btn-sm btn-dark'>
			    	<a className= 'nav-link' href ='/projects'> Projects </a>
			    </button>
			    <button type = 'button' className='btn-sm btn-dark skillbutton'>
			    	<a className= 'nav-link' href ='/skills'> Skills </a>
			    </button>
			    <button type = 'button' className='btn-sm btn-dark skillbutton'>
			    	<a className= 'nav-link resumelink' onClick={()=>openNewTab('/static/ortegaresume.pdf')}> Resume </a>
			    </button>
			  </div>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent test"  >
			    <ul className="navbar-nav ml-auto">
			      <li className="nav-item">
			        <Link href= '/projects'><a className="nav-link" >Projects</a></Link>
			      </li>
			      <li className="nav-item ">
			        <Link href= '/skills' ><a  className="nav-link">Skills</a></Link>
			      </li>
			      <li className="nav-item ">
			        <Link ><a  className="nav-link resumelink" onClick={()=>openNewTab('/static/ortegaresume.pdf')}>Resume</a></Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}  

export default Navbar;