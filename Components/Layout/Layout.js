import React, {Component} from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar'
import '../test.scss';


class Layout extends Component {
	render(){
		return(
			<div>
				<Head>
					<title> Chris Ortega's Portfolio </title>
					<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
				</Head>
				<Navbar/>
				<div className = "container" style = {{paddingTop:'6.17%'}}>
					{this.props.children}
				</div>
			</div>
			
		)
	}
}

export default Layout;