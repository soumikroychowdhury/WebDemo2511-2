import {useState, useEffect} from 'react';
import {Button, Card,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
function Courses(){
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(res=>res.json()).then(data=>{setCourses(data.courses);})
    },[]);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {courses.map(course=>{return <Course course={course}/>})}
        </div>
    )
}
function Course({course}){
    const navigate=useNavigate();
    return (
        <Card style={{border: "2px solid black", margin: 6, width: 305, minHeight: 200}}>
            <Typography textAlign={'center'} variant='h4'>{course.title}</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{course.description}</Typography>
            <img src={course.imageLink} style={{width: 305}} />
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
                <Button variant='contained' size='large' onClick={()=>{
                    navigate('/course/'+course._id);
                }}>Edit</Button>
            </div>
        </Card>
    )
}
export default Courses;