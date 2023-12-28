import {Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
function Appbar(){
    const navigate = useNavigate();
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