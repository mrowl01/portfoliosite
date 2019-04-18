import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout'
import '../Components/test.scss';

class Projects extends Component{
	render(){
		return(
			<Layout >
			<div className = 'card-deck' >
			<div className = 'card-columns' >
				<div class="card mx-auto" >
				  <img class = 'img-fluid'src="/static/face.jpg" alt="..." style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body  " >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>Face Detection</h5>
				    <h6>FullStack Project</h6>
				    <p class="card-text">
				    	<strong>backend: </strong> nodejs, docker, redis, postgres SQL
				    	
				    	<strong>frontend:</strong> React, Tachyons  
				    	
				    	<hr/>
				    	Web app that uses API clarify to detect faces of pictures. Only accepts URL links.
				    </p>
				    <a href="https://face-recognition0.herokuapp.com/" class="btn btn-primary btn-sm" style = {{marginBottom:'2%', marginRight: '2%'}}>Live</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/FaceRecognitionApp" class="btn btn-primary btn-sm">Github Front-End</a>
				    
				    <a style = {{marginBottom:'2%'}}href="https://github.com/mrowl01/FaceRecognitionBackEnd" class="btn btn-primary btn-sm">Github Back-End</a>
				  </div>
				</div>
				<div class="card mx-auto" >
				  <img class = 'img-fluid' src="/static/robo.jpg" alt="..."  style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body  " >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>Robo Cards</h5>
				    <h6>FrontEnd Project</h6>
				    <p class="card-text">
				    	<strong>frontend:</strong> React w/ Redux, Tachyons  
				    	
				    	<hr/>
				    	Uses API for pictures and contact cards info. Interactive search. Hope to turn into cat pics in future.
				    </p>
				    <a href="https://evening-cliffs-84413.herokuapp.com/" class="btn btn-primary btn-sm" style = {{marginRight:'1.6%', marginBottom:'2%'}}>Live</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/CatFriends" class="btn btn-primary btn-sm">Github</a>
				    
				  </div>
				</div>
				<div class="card mx-auto" >
				  <img class = 'img-fluid' src="/static/starwars.jpg" alt="..." style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body" >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>Starwars World Search</h5>
				    <h6>FrontEnd Project</h6>
				    <p class="card-text">
				    	<strong>frontend:</strong> React, Tachyons  
				    	
				    	<hr/>
				    	Uses API to search starwars universe. Interactive search. Returns information as cards with backgrounds that are randomly generated based on array of images.
				    </p>
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/starwarsSearch" class="btn btn-primary btn-sm">Github</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://www.youtube.com/watch?v=11HC1KLeuD0" class="btn btn-primary btn-sm">YouTube</a>
				  </div>
				</div>
				<div class="card mx-auto" >
				  <img class = 'img-fluid' src="/static/yelp.jpeg" alt="..." style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body" >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>Campgrounds</h5>
				    <h6>FullStack Project</h6>
				    <p class="card-text">
				    	<strong>Tech Stack: </strong> Node, Express, MongoDB
				    	<hr/>
				    	Lets you post campground information and leave comments on others post. It also only lets you edit your post.
				    </p>
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/starwarsSearchr" class="btn btn-primary btn-sm">Github</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://www.youtube.com/watch?v=4RqyPv6lLAY&feature=youtu.be" class="btn btn-primary btn-sm">YouTube</a>
				  </div>
				</div>
				<div class="card mx-auto" >
				  <img class = 'img-fluid' src="/static/2d.jpg" alt="..." style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body" >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>2D Space Shooter</h5>
				    <h6>Unity Project</h6>
				    <p class="card-text">
				    	<hr/>
				    	2d space shooter game made with Unity. 
				    	
				    	Simple game that keeps track of store based on enemies destroyed. Able to control ship with arrow keys and fire with space button.
				    	The enemies have a simple animation used with built in unity tools.
				    </p>
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/Space_Shooter_2D" class="btn btn-primary btn-sm">Github</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://www.youtube.com/watch?v=GcD19xx9t68" class="btn btn-primary btn-sm">YouTube</a>
				  </div>
				</div>
				<div class="card mx-auto" >
				  <img class = 'img-fluid' src="/static/minos.jpg" alt="..." style = {{width:'inherit', display:'flex', justifyContent:'center', overflow:'hidden'}} />
				  <div class="card-body" >
				    <h5 class="card-title" style = {{marginBottom:'1.6%'}}>Minotaur Dungeon</h5>
				    <h6>Unity Project</h6>
				    <p class="card-text">
				    	<hr/>
				    	3d space dungeon crawler game. Inspired by diablo attempting to make it in a greek mythology style.
				    	Learned 3D modeling because of this. Maze assets made with Blender. Navmesh placed on map to detect walkable areas. Still WIP.
				    </p>
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://github.com/mrowl01/starwarsSearchr" class="btn btn-primary btn-sm">Github</a>
				    
				    <a style = {{marginRight:'1.6%', marginBottom:'2%'}} href="https://www.youtube.com/watch?v=4RqyPv6lLAY&feature=youtu.be" class="btn btn-primary btn-sm">YouTube</a>
				  </div>
				</div>
			</div>
			</div>
			</Layout>
		)
	}
}

export default Projects; 


