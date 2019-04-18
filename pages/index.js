import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import '../Components/test.scss';

class Index extends Component{
	render(){
		return(
			<Layout >
			<h1 style = {{fontSize:'80px' , textAlign:'center'}} className="">Chris Ortega</h1>
			    <p style = {{textAlign:'center'}} className="lead"><h4>Software Developer</h4></p>
			<hr/>
				<div className = 'container mt-5'>
					<div className = 'row'>
						<div className = 'col text-center'>
						<img src="/static/pp.jpg" alt="..." className="rounded-circle img-thumbnail"/>
						</div>
					</div>
				</div>
			<div style = {{ paddingTop: '6.17%' , paddingBottom:'6.17%'}}>
				<p style = {{textAlign:'center', fontSize:'20px'}}> 
					I'm a motivated guy when it comes to tech and web dev.
					I do a lot of online courses to learn new skills.
					<br/>
					If I don't know how to do it I'll learn it. The job always gets done to the best of my ability.
					<br/><br/>
					Started coding for fun using Unity3D and I love practicle things. Web Dev became the next logical step so 
					I started to absorb as much info as I could. I'm still learning there is a lot! Keeps me happy :)
					<br/><br/>
					Outside of tech and coding I'm a mma practisioner and I still make games with Unity when I can - exploring VR.
				</p>
			</div>
			<hr/>
			</Layout>
		)
	}
}

export default Index; 