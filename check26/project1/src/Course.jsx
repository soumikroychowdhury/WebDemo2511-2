import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button,TextField,Card,Typography} from '@mui/material';
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
            <CourseDetails course={course}/>
            <UpdateCourse course={course} courses={courses} setCourses={setCourses}/>
        </div>
    )
}

function UpdateCourse(props){
    const course=props.course;
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [imageLink,setImageLink]=useState('');
    return (
        <div style={{
            display: 'flex', justifyContent: 'center'
        }}><Card variant={'outlined'} style={{width:400,padding:6}}>
        <Typography variant={'h4'}>Update Course</Typography><br/>
        <TextField fullWidth={true} label="Title" variant="outlined" onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} label="Description" variant="outlined" onChange={(e)=>{setDescription(e.target.value)}}/><br/><br/>
        <TextField fullWidth={true} label="Image Link" variant="outlined" onChange={(e)=>{setImageLink(e.target.value)}}/><br/><br/>
        <Button size={'large'} variant="contained" onClick={()=>{
            fetch('http://localhost:3000/admin/courses/'+course.id,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem('token')
                },
                body:JSON.stringify({
                    title:title,
                    description:description,
                    imageLink:imageLink,
                    published:true
                })
            }).then(res=>res.json()).then(data=>{
                let updatedCourses=[];
                for(let i=0;i<props.courses.length;i++){
                    if(props.courses[i].id==course.id){
                        updatedCourses.push({
                            id:course.id,
                            title:title,
                            description:description,
                            imageLink:imageLink
                        });
                    }else{
                        updatedCourses.push(props.courses[i]);
                    }
                }
                props.setCourses(updatedCourses);
            });
        }}>Update Course</Button>
        </Card></div>
    )
}
function CourseDetails(props){
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}><Card style={{border: "2px solid black", margin: 6, width: 305, minHeight: 200}}>
    <Typography textAlign={'center'} variant='h4'>{props.course.title}</Typography>
    <Typography textAlign={'center'} variant='subtitle2'>{props.course.description}</Typography>
    <img src={props.course.imageLink} style={{width: 305}} />
    </Card></div>
    )
}

export default Course;