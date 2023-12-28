import {useState, useEffect} from 'react'
function useTodos() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{const fetchData=async()=>{const res=await fetch("http://localhost:3000/todos");const data=await res.json();console.log(data);setTodos(data);};const intervalId=setInterval(fetchData,1000);return ()=>clearInterval(intervalId);},[]);
  const handleDelete = async (id)=>{
    try{await fetch(`http://localhost:3000/todos/${id}`,{method:'DELETE'});setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!==id));}catch(error){console.error(error);}
  };
  return [todos,handleDelete];
}
function App() {
  // const [todos,setTodos] = useState([]);
  const [todos,handleDelete] = useTodos();
  // useEffect(()=>{fetch("http://localhost:3000/todos").then((res)=>{res.json().then((data)=>{console.log(data);setTodos(data);setInterval(()=>{fetch("http://localhost:3000/todos").then((res)=>{res.json().then((data)=>{console.log(data);setTodos(data);})})},1000);})})},[]);
  // useEffect(()=>{const fetchData=async()=>{const res=await fetch("http://localhost:3000/todos");const data=await res.json();console.log(data);setTodos(data);};const intervalId=setInterval(fetchData,1000);return ()=>clearInterval(intervalId);},[]);
  // const handleDelete = async (id)=>{
  //   try{await fetch(`http://localhost:3000/todos/${id}`,{method:'DELETE'});setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!==id));}catch(error){console.error(error);}
  // };
  return (
    <div>
      {todos.map((todo)=>{return <div>{todo.title}{todo.description}<button onClick={()=>{handleDelete(todo.id)}}>Delete</button><br/></div>})}
    </div>
  )
}
export default App