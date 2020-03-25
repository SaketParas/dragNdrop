import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={props => <Home {...props}/>}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
