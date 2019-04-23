import React,{Component} from 'react';
import Projects from './Projects.jsx';

class Main extends Component{
    state = {displayBio:false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    
    render(){

        return(
            <div className="mainComponent" >
            <header>
                <h1>Hello!</h1>
                <p>My name is Wiktor.I'm still learning to become a software engineer.</p>
                <p>I'm always looking forward to learn new things about programming.</p>
            </header>

            <section>
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
            <section>
                    <Projects />
            </section>
                
            </div >
        
        )
    }
    
}
export default Main;