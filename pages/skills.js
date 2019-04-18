import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import '../Components/skills.scss';



class Skills extends Component {
	render(){
		return (
			<div>
			<Layout>
				<div class='contentBody' style={{textAlign:'center'}}>
					<div class="jumbotron" >
					  <h1 style = {{fontSize:'6.18em'}} class="">Skills</h1>
					  <p class=""><h3>Top 5</h3></p>
					  <hr class="my-4"/>
					  <img title= 'javascript' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/js.png" alt="..." class="rounded-circle grow"/>
					  <img title= 'react' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/react.png" alt="..." class="rounded-circle grow"/>
					  <img title= 'node.js' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/node.png" alt="..." class="rounded-circle grow"/>
					  <img title= 'css' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/css.png" alt="..." class="rounded-circle grow"/>
					  <img title= 'html' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/html.png" alt="..." class="rounded-circle grow"/>
					</div>
				</div>
				<div>
					<div class="card-deck">
					  <div class="card tc">
					    <div class="card-body">
					      <h3 class="card-title">Front-End</h3>
					      <img title = 'bootstrap 'style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}
					      src="/static/boot.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'html' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/html.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'CSS' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/css.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'javascript' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/js.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'jquery' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/jq.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'sass' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/sass.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'react' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/react.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'redux' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/redux.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'next.js' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/next.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'typescript' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/ts.png" alt="..." class="rounded-circle grow"/>
					    </div>
					  </div>
					  <div class="card tc">
					    <div class="card-body">
					      <h3 class="card-title">Back-End</h3>
					      <img title= 'node.js' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/node.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'mysql' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/mysql.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'mongodb' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/mongo.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'python' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/python.jpg" alt="..." class="rounded-circle grow"/>
					      <img title= 'express' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/express.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'postgres' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/postgres.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'redis' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/redis.png" alt="..." class="rounded-circle grow"/>
					    </div>
					  </div> 
					  <div class="card tc">
					    <div class="card-body">
					      <h3 class="card-title">Other</h3>
					      <img title= 'git' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/git.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'RESTful' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/rest.jpg" alt="..." class="rounded-circle grow"/>
					      <img title= 'Responsive Design' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/res.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'Unity 3D' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/unity.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'C#' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/c.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'heroku' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/heroku.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'Amazon Web Services' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/aws.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'jest' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/jest.png" alt="..." class="rounded-circle grow"/>
					      <img title= 'docker' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/docker.png" alt="..." class="rounded-circle grow"/>
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