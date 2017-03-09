import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var app = function() {
	var libraryName = 'react'
  	ReactDOM.render(<TIYPage />, document.querySelector('.container'))
}

var TIYPage = React.createClass({
	render: function(){
		return (
			<div className="home-page">
				<Banner />
				<PageBody />
				<StickyBox />
			</div>
			)
	}
})

var Banner = React.createClass({
	render: function(){
		return (
			<div className="banner">
				<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
				<img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
			</div>
			)
	}
})

var PageBody = React.createClass({
	render: function(){
		return (
			<div className="page-body">	

  				<div className="column1">
					<h1>THE IRON YARD</h1>
      				<p className="TIYHouston">THE IRON YARD | HOUSTON</p>
      				<p className="Happenings">Happenings and updates from The Iron Yard in Houston, TX</p>
     	 			<p className="Search"> SEARCH </p>
      				<form method="get" action="/search" id="search">
  					<input name="q" type="text" size="40" placeholder="Search keywords" />
					</form>
  				</div>
  
  				<div className="column2">
    				<p className="Title">September 22 Starts a New Class of The Iron Yard Houston Students</p>
    				<p className="Author">By Brian Dorton, Campus Director at <a href="https://www.theironyard.com/">The Iron Yard</a> Houston</p>
    				<img id="classroom" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta est sequi numquam, reiciendis, laborum quaerat sed eos error veritatis repudiandae natus ratione. Non consequuntur, consequatur vitae unde debitis recusandae!</p>
  				</div>
    		</div>		
			)
	}
})

var StickyBox = React.createClass({
	render: function(){
		return (
  			<div className="stickybox">
			  	<div className="tophalf">
			    Never miss a post!
			   </div>
			    <div className="bottomhalf">
			      <div className="left">
			      <img id="stickytiylogo" src=" http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/></div>
			      <div className="center">
			        <div id="tiyhouston">tiyhouston</div>
			        <div id="theironyard">The Iron Yard | Houston</div>
			      </div>
			      <div className="right">
			        <iframe frameBorder="0" scrolling="no" allowTransparency="true" height="20" width="65" src="https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=staff&amp;color=blue"></iframe>
			    </div>
			  </div>
		  </div>
		)
	}
})


// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..