import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import '../Components/skills.scss';



class Skills extends Component {
	render(){
		return (
			<div>
			<Layout>
				<div className='contentBody' style={{textAlign:'center'}}>
					<div className="jumbotron" >
					  <h1 style = {{fontSize:'6.18em'}} className="">Skills</h1>
					  <p className=""><h3>Top 5</h3></p>
					  <hr className="my-4"/>
					  <img title= 'javascript' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/js.png" alt="..." className="rounded-circle grow"/>
					  <img title= 'react' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/react.png" alt="..." className="rounded-circle grow"/>
					  <img title= 'node.js' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/node.png" alt="..." className="rounded-circle grow"/>
					  <img title= 'css' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/css.png" alt="..." className="rounded-circle grow"/>
					  <img title= 'html' style={{width:'121.35px',height:'121.35px', margin:'1.6%'}}src="/static/html.png" alt="..." className="rounded-circle grow"/>
					</div>
				</div>
				<div>
					<div className="card-deck">
					  <div className="card tc">
					    <div className="card-body">
					      <h3 className="card-title">Front-End</h3>
					      <img title = 'bootstrap 'style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}
					      src="/static/boot.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'html' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/html.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'CSS' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/css.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'javascript' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/js.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'jquery' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/jq.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'sass' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/sass.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'react' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/react.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'redux' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/redux.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'next.js' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/next.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'typescript' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/ts.png" alt="..." className="rounded-circle grow"/>
					    </div>
					  </div>
					  <div className="card tc">
					    <div className="card-body">
					      <h3 className="card-title">Back-End</h3>
					      <img title= 'node.js' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/node.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'mysql' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/mysql.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'mongodb' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/mongo.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'python' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/python.jpg" alt="..." className="rounded-circle grow"/>
					      <img title= 'express' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/express.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'postgres' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/postgres.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'redis' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/redis.png" alt="..." className="rounded-circle grow"/>
					    </div>
					  </div> 
					  <div className="card tc">
					    <div className="card-body">
					      <h3 className="card-title">Other</h3>
					      <img title= 'git' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/git.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'RESTful' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/rest.jpg" alt="..." className="rounded-circle grow"/>
					      <img title= 'Responsive Design' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/res.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'Unity 3D' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/unity.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'C#' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/c.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'heroku' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/heroku.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'Amazon Web Services' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/aws.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'jest' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/jest.png" alt="..." className="rounded-circle grow"/>
					      <img title= 'docker' style={{width:'46.35px',height:'46.35px', margin:'1.6%'}}src="/static/docker.png" alt="..." className="rounded-circle grow"/>
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