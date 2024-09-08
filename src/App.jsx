import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'



function App() {

const books=[
  {id:1,name: 'Accounting',price:120},
  {id:2,name: 'Finance',price:120},
  {id:3,name: 'English',price:100},
  {id:4,name: 'Islamic Studies',price:120},

]
  


  const actors=['Shalman Shah','Manna','Rubel','Jasim']
const singers=[
  {id:1, name:'Dr. Mahfujur',age:'48'},
  {id:2, name:'Imran',age:'38'},
  {id:3, name:'Alif Arman',age:'28'},
  {id:4, name:'Pritom',age:'30'},
]
  return (
    <>
      
      <h1>Vite + React</h1>
    
      <BookStore books={books}></BookStore>
     { actors.map(actor =><Actor name={actor}></Actor> )
     
     }
<Actor name={'Bappa Raj'}></Actor>

{
singers.map(singer => <Singer singer={singer}></Singer>)


}
    {/*<Todo task='Learn React' isDone={true}></Todo>
   <Todo task='Core Concepts' isDone={false}></Todo>
   <Todo task='Try JSX' isDone={true}></Todo>
    <Device name='Laptop' price='55000'></Device>
     <Device name='Mobile' price='17000'></Device>
     <Device name='Watch' price='3000'></Device>

      <Person></Person>
    
      <Developer></Developer>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="70"></Student>
      <Student></Student>*/}
    </>
  )
}

function Device(props){
return <h3>This device {props.name} price {props.price}</h3>



}
function Person(){
const age=24;
const person={name:'Sagar',age:23}

 return <h3 className="student">I am {person.name} with age:{age}</h3>
}


function Developer(){
 const developerStyle = {
margin: '20px',
padding: '20px',
border: '2px solid red',
borderRadius: '10px'

}   
return (
<div style={developerStyle}>  
<h3>Devo devo</h3>
<p>Coding:</p>
</div>

)


}
const {grade, score}={grade: '7', score: '99'};
function Student({grade=1, score=0}){


  return (
<div className='student'>
<h3>This is a student</h3>
<p>Class: {grade}</p>
<p>Score: {score}</p>
</div>
  )


}

export default App
