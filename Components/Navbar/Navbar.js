import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';


class Navbar extends Component {
	render(){
		return (
		 <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			  <Link href='/'><a class="navbar-brand">CO</a></Link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent test"  >
			    <ul class="navbar-nav ml-auto">
			      <li class="nav-item ">
			        <Link href= '/about'><a class="nav-link">About Me <span class="sr-only">(current)</span></a></Link>
			      </li>
			      <li class="nav-item">
			        <Link href= '/projects'><a class="nav-link" >Projects</a></Link>
			      </li>
			      <li class="nav-item ">
			        <Link href= '/skills'><a class="nav-link">Skills</a></Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}  

export default Navbar;