import {useState, useEffect} from 'react'
function App() {
  const [todos,setTodos]=useState([{title:"Title 1",description:"Description 1"},{title:"Title 2",description:"Description 2"}]);
  console.log("Hello");
  useEffect(()=>{setInterval(()=>{setTodos([{title:"Title 1",description:"Description 1"},{title:"Title 2",description:"Description 2"}])},1000);},[]);
  return (
    <div>
      {todos.map((todo)=>{return <Todo title={todo.title} description={todo.description}></Todo>})}
    </div>
  )
}
function Todo(props){
  return <div>{props.title}<br/>{props.description}</div>
}
export default App