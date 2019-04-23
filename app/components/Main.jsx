import React,{Component} from 'react';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {displayBio:false};
        this.switchBio = this.switchBio.bind(this);
    }
    switchBio() {
        this.setState(prevState => ({
        displayBio: !prevState.displayBio
        }));
    }
    render(){

        return(
            <div className="mainComponent" >
                <h1>Hello!</h1>
                <p>My name is Wiktor.I'm still learning to become a software engineer.</p>
                <p>I'm always looking forward to learn new things about programming.</p>
                <button onClick={this.switchBio}>Display Bio</button>
                {
                    this.state.displayBio ? (
                        <div className="bio">
                            <p>Right now I live in Ireland but I'm form Poland</p>
                            <p>My favorite language is JavaScript and my favorite framework is React.</p>
                            <p>I love how smooth and easy i can manipulate DOM in it and how classes works in this framework.</p>
                        </div>
                    ) : null
                }
            </div >
        
        )
    }
    
}
export default Main;