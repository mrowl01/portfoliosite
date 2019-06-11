import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import '../Components/test.scss';
import '../Components/skills.scss';

class Index extends Component{
	render(){
		const openNewTab= (url) =>{
			window.open(`${url}`)
		}
		return(
			<Layout >
			<div style = {{textAlign:'center'}}>
				<h1 style = {{fontSize:'80px' , textAlign:'center'}} className="">Chris Ortega</h1>
				    <p style = {{textAlign:'center'}} className="lead"><h4>Software Developer</h4></p>
				    	<img onClick= {()=>openNewTab('https://www.linkedin.com/in/chris-ortega-141645184/')}
				    	 	className = 'grow socialmedialinks' src='/static/slinkedin.png' />
				    	<img onClick= {()=>openNewTab('https://github.com/mrowl01')}
				    		className = 'grow socialmedialinks' src='/static/sgit.png' />
				<hr/>
					<div className = 'container mt-5'>
						<div className = 'row'>
							<div className = 'col text-center'>
							<img src="/static/pp.jpeg" alt="..." className="rounded-circle img-thumbnail"/>
							<br/>
							</div>
						</div>
					</div>
				<div style = {{ paddingTop: '6.17%' , paddingBottom:'6.17%'}}>
					<p style = {{ fontSize:'20px'}}> 
						I'm a motivated guy when it comes to tech.
						I started by coding on Unity3D making games. <br/> My love for practical applications
						pushed me into web development where I started to absorb as much info as I could.
						 There is a lot to learn so I'm always taking new online courses. It keeps me happy and motivated :).<br/>
						Outside of tech I'm a mma practitioner and I make games when I can using Unity3D. Exploring VR Development for fun.
					</p>
				</div>
			</div>
			<hr/>
			</Layout>
		)
	}
}

export default Index; 