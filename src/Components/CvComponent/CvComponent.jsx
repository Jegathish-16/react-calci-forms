import React, { Component } from 'react'
import './CvComponent.css'
// import Profile from './images/Profile.jpg';
export class CvComponent extends Component {
  render() {
    return (
      <React.Fragment>
      <div class="full">
        <div class="left">
          <div class="image">
            {/* <img src={Profile} alt="Profile-Pic" /> */}
          </div>
          <div class="Contact">
              <h3 className='text'>DETAILS</h3>
              <hr />
              <br />
				      <p>&#128231;jegathish162004@gmail.com</p>
				      <p>	&#128241; 7397293789</p>
              <p>&#8982;Chennai </p>
          </div>
          <div class="Skills">
                <hr />
				        <h3 className='text'>SKILLS</h3>
                <hr />
                <br />
                    <p>AutoDesk Fusion 360</p> 
					          <p>Blender</p>
                    <p>Unity Game Engine</p>
                    <p>Premier Pro</p>
                    <p>Operating System</p>
          </div>
          <div class="Program">
                <hr />
				        <h4 className='text'>PROGRAMMING LANGUAGES</h4>
                <hr />
                <br />
                    <p>Python</p>
                    <p>C Programming</p>
					          <p>C# Programming</p>
                <br />                
			    </div>
          <div class="Course">
                <hr />
				        <h3 className='text'>Extra Courses</h3>
                <hr />
                <br />
                <ul>
                    <li><strong>Udemy</strong> - Complete Blender Creator</li>
                    <li><strong>Google Digital Garage</strong> - Digital Marketing</li>
				        </ul>
                <br />
			    </div>
          <div class="Languages">
                <hr />
				        <h3 className='text'>LANGUAGES</h3>
                <hr />
                <br />
                <p>Tamil, Engilsh, Hindi</p>
                <br />
			    </div>
          <div class="Hobbies">
                <hr />    
				        <h3 className='text'>HOBBIES</h3>
                <hr />
                <br />
                <ul>
                    <li>Reading Books</li>
                    <li>Music</li>
				        </ul>
                <br />
			    </div>
        </div>
        <div class="right">
			      <div class="name">
				        <h1>JEGATHISH S</h1>
			  </div>
			  <div class="title">
				    <p>Data Analyst</p>
			  </div>
			  <div class="Summary">
				    <h2>SUMMARY</h2>
                <hr />
                <br />
				        <p>As an Artificial Intelligence and Data Science undergraduate student, I am knowledgeable in the latest technologies and techniques used in the field. With a focus on data analysis and machine learning.
                    As a team member, I have excellent communication skills and am able to work collaboratively to achieve team goals.
				        </p>
			  </div>
			  <div class="Projects">
				  <h2>PROJECTS</h2>
                <hr />
                <br />
				        <h4>&#10004; Sixth Sense Robot - using Computer Vision</h4>
                <h4>&#10004; Designed a Bumper for "Robomaster" using Fusion 360</h4>
                <h4>&#10004; WikiPedia Bot using thread implementation</h4>
                <h4>&#10004; For more, github link: <a href="https://github.com/Jegathish-16">GitHub</a></h4>
			  </div>
            <br />
			  <div class="Education">
			    <h2>EDUCATION</h2>
                <hr />
                <br />
				        <ul>
                    <h3>&#8226; Secondary school(10th Equivalent)(2018-2019)</h3>
                    <p>Seventh Day Adventist Martriculation Higher Secondary School, Vellore - 632002</p>
                    <p><b>Grade: 406 (81.2%)</b></p><br />
                    <h3>&#8226; Higher Secondary school(12th Equivalent)(2020-2021)</h3>
                    <p>Shrishti Martriculation Higher Secondary School, Vellore - 632014</p>
                    <p><b>Grade: 503.48 out of 600</b></p><br />
                    <h3>&#8226; B.Tech Artificial Intelligence and Data Science</h3>
                    <p>Saveetha Engineering College, Thandalam, Chennai - 602105</p>
				        </ul>
			  </div>
			  <div class="project">
				<h2>EVENTS</h2>
                <hr />
                <br />
				        <ul>
                    <h4>&#8226; L&T Construction CAD Challenge - Team Shaastra 2022</h4>				
                    <h4>&#8226; Naan Mudhalvan - Autodesk Fusion 360 Design challenge</h4>				
                </ul>
			  </div>
		  </div>
    </div>
      </React.Fragment>
    )
  }
}

export default CvComponent