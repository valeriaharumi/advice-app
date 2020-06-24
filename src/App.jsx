import React from 'react';
import Axios from 'axios';

import './App.css'

class App extends React.Component{
    state = {
        advice: ''
    };

    componentDidMount(){
       this.fetchAdvice();
    }

    fetchAdvice = () => {
        Axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            const { advice } = res.data.slip;
            
            this.setState({advice: advice})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render(){
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me an advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;