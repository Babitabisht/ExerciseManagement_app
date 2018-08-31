import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Layout/Header' ;
import {Footer} from './Components/Layout/Footer' ;
import Exercise from './Components/Exercise' ;
import {muscles ,exercises} from './store' ;

class App extends Component {
state ={
exercises
}

getExByMus() {

 return Object.entries(this.state.exercises.reduce((exercises,exercise)=>{
    const {muscles} =exercise ;
    exercises[muscles] =exercises[muscles] ? [...exercises[muscles] ,exercise] :[exercise]
    return exercises ;
  } ,{})
 )
}
  render() {
    const exercises=this.getExByMus()
    return (
      <div className="App">
        <Header msg="hello" />
      <Exercise exercises={exercises} />

        <Footer muscles ={muscles} />
      </div>
    );
  }
}

export default App;
