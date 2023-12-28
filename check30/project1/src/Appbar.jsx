import {Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
function Appbar(){
    const navigate = useNavigate();
    const [username,setUsername]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/me",{
            headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}).then(res=>res.json()).then(data=>{if(data.username){setUsername(data.username);}})
    },[]);
    if(username){
        return (
            <div style={{display: "flex",justifyContent: "space-between", padding: 4}}>
            <div style={{backgroundColor: "lightblue"}}>
                <Typography variant={'h4'}>Courses</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant={'contained'} onClick={()=>{navigate('/addcourse')}}>Add Course</Button>
                <Button variant={'contained'} onClick={()=>{navigate('/courses')}}>Courses</Button>
                <Typography variant={'h4'}>{username}</Typography>
                <Button variant={'contained'} onClick={()=>{
                    localStorage.removeItem('token');
                    setUsername(null);
                    navigate('/login');
                }}>Sign Out</Button>
            </div>
            </div>
        )
    }
    return (
        <div style={{display: "flex",justifyContent: "space-between", padding: 4}}>
        <div style={{backgroundColor: "lightblue"}}>
            <Typography variant={'h4'}>Courses</Typography>
        </div>
        <div>
            <Button style={{marginRight: 10}} variant={'contained'} onClick={()=>{navigate('/signup')}}>Sign Up</Button>
            <Button variant={'contained'} onClick={()=>{navigate('./login')}}>Sign In</Button>
        </div>
        </div>
    )
}
export default Appbar;