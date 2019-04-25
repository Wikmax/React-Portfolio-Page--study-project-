import React,{Component} from 'react';
import Projects from './Projects.jsx';
import SocialProfiles from './SocialProfiles.jsx';
import profilePicture from '../assets/profile.png';
import Title from './Title.jsx';

class Main extends Component{
    state = {displayBio:false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    
    render(){

        return(
            <div className="mainComponent" >
            <header>
                <img src={profilePicture} alt="Profile image"/>
                <h1>Hello!</h1>
                <p>My name is Wiktor.</p>
                    {this.state.displayBio ? <Title /> : <p>I'm a software engineer student</p>}
                <p>I'm always looking forward to learn new things about programming.</p>
            </header>

            <section className="displayBio">
                {
                    this.state.displayBio ? (
                        <div className="bio">
                            <p>Right now I live in Ireland but I'm form Poland</p>
                            <p>My favorite language is JavaScript and my favorite framework is React.</p>
                            <p>I love how smooth and easy i can manipulate DOM in it and how classes works in this framework.</p>
                            <button className="buttonReadMore"
                            onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                            <button className="buttonReadMore"
                            onClick={this.toggleDisplayBio}>Read more</button>
                    )
                }
            </section>
                <hr/>
            <section className="projectSection">
                    <Projects />
            </section>
            
            <footer>
                <hr/>
                <SocialProfiles/>
            </footer>
            </div >
        
        )
    }
    
}
export default Main;