import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Layout/Header' ;
import {Footer} from './Components/Layout/Footer' ;
import Exercise from './Components/Exercise' ;
import {muscles ,exercises} from './store' ;

class App extends Component {
state ={
exercises,
category:'' ,
exercise:{}

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

handleExerciseSelected = id => {
  this.setState( ({exercises})=> ({
    exercise :exercises.find(ex =>ex.id ===id)
  })
 )
}

handleExerciseCreate = (exercise) => {
  console.log('Entered !!!')
this.setState( ({exercises})=>({
exercises:[
  ...exercises,
  exercise
]

})  )

}
handleDelete = id =>{
  this.setState( ({exercises})=> ({
    exercises : exercises.filter(ex=>ex.id !==id )
  }))
}


  render() {
    const exercises=this.getExByMus()
    return (
      <div className="App">
        <Header msg="hello"
         muscles ={muscles} 
         onExerciseCreate ={this.handleExerciseCreate}
        
        />
      <Exercise exercises={exercises}
       category={this.state.category} 
      onSelect={this.handleExerciseSelected}   
         exercise = {this.state.exercise}
         onDelete={this.handleDelete}
      />

        <Footer muscles ={muscles}  onSelect={this.handleCategorySelected}  category={this.state.category} />
      </div>
    );
  }
}

export default App;
