// import {useState, createContext, useContext} from 'react';
import {Button, Card, Typography} from '@mui/material';
import {atom, RecoilRoot, useSetRecoilState, useRecoilValue} from  'recoil';
// const CountContext=createContext();
const countState=atom({key:'countState',default:0});
function App() {
  // const [count, setCount]=useState(0);
  return (
    //{/*<CountContext.Provider value={{count: count, setCount: setCount}}>*/}
    <RecoilRoot><div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{padding: 40, width: 400}}>
        <Typography variant='h4' style={{textAlign: 'center'}}>Welcome Here</Typography><br/>
        <Buttons/>
        <CountComponent/>
      </Card>
    </div></RecoilRoot>
    //{/*</CountContext.Provider>*/}
  )
}
function Buttons(){
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Increment/>
      <Decrement/>
    </div>
  )
}
function Increment(){
  // const {setCount}=useContext(CountContext);
  const setCount=useSetRecoilState(countState);
  return <div>
    <Button variant='contained' onClick={()=>/*setCount(count+1)*/setCount(count=>count+1)}>Increment</Button>
  </div>
}
function Decrement(){
  // const {setCount}=useContext(CountContext);
  const setCount=useSetRecoilState(countState);
  return <div>
    <Button variant='contained' onClick={()=>/*setCount(count-1)*/setCount(count=>count-1)}>Decrement</Button>
  </div>
}
function CountComponent(){
  // const {count}=useContext(CountContext);
  const count=useRecoilValue(countState);
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Typography variant='h4'>{count}</Typography>
    </div>
  )
}
export default App