import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Layout/Header' ;
import {Footer} from './Components/Layout/Footer' ;
import Exercise from './Components/Exercise' ;
import {muscles ,exercises} from './store' ;

class App extends Component {
state ={
exercises,
category:'shoulders'

}

getExByMus() {

 return Object.entries(this.state.exercises.reduce((exercises,exercise)=>{
    const {muscles} =exercise ;
    exercises[muscles] =exercises[muscles] ? [...exercises[muscles] ,exercise] :[exercise]
    return exercises ;
  } ,{})
 )
}

handleCategorySelected = category =>{
  this.setState({category})
   console.log(this.category)
}
  render() {
    const exercises=this.getExByMus()
    return (
      <div className="App">
        <Header msg="hello" />
      <Exercise exercises={exercises}   category={this.state.category} />

        <Footer muscles ={muscles}  onSelect={this.handleCategorySelected}  category={this.state.category} />
      </div>
    );
  }
}

export default App;
