import { useState } from 'react'
function App() {
  const [a,setA]=useState({title:"Title 1",description:"Description 1"});
  setInterval(()=>{setA({title:"Title 2",description:"Description 2"})},1000);
  return (
    <>
      {a.title}<br/>{a.description}
      <Demo a1={"World"}></Demo>
    </>
  )
}
function Demo(props){
  return <div>Hello<br/>{props.a1}</div>
}
export default App