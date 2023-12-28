import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Card,Typography} from '@mui/material';
function Course(){
    let {courseId}=useParams();
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(res=>res.json()).then(data=>{setCourses(data.courses);})
    },[]);
    let course=null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==courseId){
            course=courses[i];
            break;
        }
    }
    if(!course){
        return <div>Loading</div>
    }
    return (
        <div>
            <Card style={{border: "2px solid black", margin: 6, width: 305, minHeight: 200}}>
            <Typography textAlign={'center'} variant='h4'>{course.title}</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>{course.description}</Typography>
            <img src={course.imageLink} style={{width: 305}} />
            </Card>
        </div>
    )
}
export default Course;