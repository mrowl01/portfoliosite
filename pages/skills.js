import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import './skills.css';


class Skills extends Component {
	render(){
		return (
			<div>
			<Layout>
				<div class='contentBody' style={{textAlign:'center'}}>
					<div class="jumbotron" style={{backgroundImage:`url('http://www.designshock.com/wp-content/uploads/2014/08/1_thumb1.jpg')`}}>
					  <h1 class="display-4">Skills</h1>
					  <p class="lead">Top 5 skills</p>
					  <hr class="my-4"/>
					  <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					  <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					  <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					  <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					  <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					</div>
				</div>
				<div>
					<div class="card-deck">
					  <div class="card">
					    <div class="card-body">
					      <h5 class="card-title">Front-End</h5>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}
					      src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					      <img style={{width:'75px',height:'75px', margin:'1.6%'}}src="/static/boot.png" alt="..." class="rounded-circle"/>
					    </div>
					  </div>
					  <div class="card">
					    <img src="..." class="card-img-top" alt="..."/>
					    <div class="card-body">
					      <h5 class="card-title">Card title</h5>
					      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
					    </div>
					  </div>
					  <div class="card">
					    <img src="..." class="card-img-top" alt="..."/>
					    <div class="card-body">
					      <h5 class="card-title">Card title</h5>
					      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
					    </div>
					  </div>
					</div>
				</div>
			</Layout>
			</div>
		)
	}
}

export default Skills ;