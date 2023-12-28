import Signup from './Signup.jsx'
import Appbar from './Appbar.jsx'
import Signin from './Signin.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',backgroundColor:'#eeeeee'}}>
      <Router>
      <Appbar/>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Signin/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App