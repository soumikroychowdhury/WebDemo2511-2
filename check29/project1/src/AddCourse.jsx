import {Button,TextField,Card,Typography} from '@mui/material';
import {useState} from 'react';
import axios from 'axios';

function AddCourse(){
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [imageLink,setImageLink]=useState('');
    const [price,setPrice]=useState(0);
    return <div>
        <div style={{
            paddingTop: 140, marginBottom: 6, display: 'flex', justifyContent: 'center'
        }}><Card variant={'outlined'} style={{width:400,padding:6}}>
        <Typography variant={'h4'}>Add Course</Typography><br/>
        <TextField fullWidth={true} label="Title" variant="outlined" onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} label="Description" variant="outlined" onChange={(e)=>{setDescription(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} label="Image Link" variant="outlined" onChange={(e)=>{setImageLink(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} label="Price" variant="outlined" onChange={(e)=>{setPrice(e.target.value)}}/><br/><br/>
        <Button size={'large'} variant="contained" onClick={async()=>{
            // fetch('http://localhost:3000/admin/courses',{
            //     method:'POST',
            //     headers:{
            //         'Content-Type':'application/json',
            //         'Authorization':'Bearer '+localStorage.getItem('token')
            //     },
            //     body:JSON.stringify({
            //         title:title,
            //         description:description,
            //         imageLink:imageLink,
            //         published:true
            //     })
            // }).then(res=>res.json()).then(data=>{console.log(data);
            await axios.post('http://localhost:3000/admin/courses',{
                title:title, description:description, imageLink:imageLink, published:true, price:price},{
                headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
            });
            alert('Course Addded');
        }}>Add Course</Button>
        </Card></div>
    </div>
}
export default AddCourse;