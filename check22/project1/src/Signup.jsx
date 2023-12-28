import {Button,TextField,Card,Typography} from '@mui/material';
function Signup(){
    return <div>
        <center><div style={{
            paddingTop: 140, marginBottom: 6
        }}>
            <Typography variant={'h4'}>Welcome</Typography>
        </div></center>
        <center><Card variant={'outlined'} style={{width:400,padding:6}}>
        <TextField fullWidth={true} id="username" label="Username" variant="outlined" /><br/><br/>
        <TextField fullWidth={true} id="password" label="Password" variant="outlined" /><br/><br/>
        <Button size={'large'} variant="contained">Signup</Button>
    </Card></center>
    </div>
}
export default Signup;