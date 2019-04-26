import React, { Component } from 'react';
import ARRAY_OF_PROJECTS from './ProjectsArray.jsx';
import Header from './Header.jsx';

class SingleProject extends Component {
    render(){
        const { title, image, description, link } = this.props.singleProject;
        return(
            <div className="projects">
                <h3>{title}</h3>
                <img src={image} alt="Project image"/>
                <p>{description}</p>
                <a href={link} target="_blank">Link to this project</a>
            </div>

        )
    }
}

class Projects extends Component{

    render(){
        return(
            <div>
                <Header/>
                <h2>Highlighted Projects</h2>
                <div >
                   {
                        ARRAY_OF_PROJECTS.map((PROJECTS)=>{
                           return(
                               <SingleProject key={PROJECTS.id} singleProject={PROJECTS}/>
                           )
                       })
                   }
                </div>
            </div>
        )
    }

    
}
export default Projects;