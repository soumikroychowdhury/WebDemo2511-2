import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TodoList from './Components/TodoList';
import useSWR from 'swr'
function App() {
    return (
        <RecoilRoot>
            <Router>
                <InitState />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/todos' element={<TodoList />} />
                    <Route path='/' element={<Login />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}
const fetcher = ({url}: {url: string,}) => fetch(url, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}).then((res) => res.json());
function InitState() {
    const { data} = useSWR({url: ''}, fetcher)
    console.log(data);
    return <></>
}
export default App;