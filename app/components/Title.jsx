import React, {Component} from 'react';

const TITLES =[
    'a software engineer student',
    'a philosophy lover',
    'an japan culture enthusiast '
];

class Title extends Component {
    state = {titleIndex: 0, fadeIn:true};

    componentDidMount(){
        this.timeout = setTimeout(() => this.setState({fadeIn: false}),2000);

        this.animateTitles();
    }
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }
    animateTitles = () =>{
       this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex,fadeIn:true});
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }

    render(){
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I'm {title}</p>
        )
    }
}

export default Title;