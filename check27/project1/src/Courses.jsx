import {useState, useEffect} from 'react';
import {Card,Typography} from '@mui/material';

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
function Course(props){
    return (
        <Card style={{border: "2px solid black", margin: 6, width: 305, minHeight: 200}}>
            <Typography textAlign={'center'} variant='h4'>{props.course.title}</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{props.course.description}</Typography>
            <img src={props.course.imageLink} style={{width: 305}} />
        </Card>
    )
}
export default Courses;