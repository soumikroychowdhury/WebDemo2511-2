import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button,Card,Grid,TextField,Typography} from '@mui/material';
import {atom, useRecoilValue, useSetRecoilState, useRecoilState} from 'recoil';
import axios from 'axios';
// const courseState = atom({key: 'courseState',default: []});
function Course(){
    let {courseId}=useParams();
    // const setCourse = useSetRecoilState(courseState); 
    const [course,setCourse]=useState(null);
    useEffect(()=>{
        // fetch("http://localhost:3000/admin/courses",{
        //     headers:{
        //         "Authorization":"Bearer "+localStorage.getItem("token")
        //     }
        // }).then(res=>res.json()).then(data=>{setCourses(data.courses);})
        axios.get('http://localhost:3000/admin/course/'+courseId,{
            method:'GET',headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
        }).then(res=>{setCourse(res.data.course)});
    },[]);
    if(!course){
        return <div style={{height:'100vh', justifyContent: 'center', flexDirection: 'column'}}>Loading</div>
    }
    return (
        <div>
            <DisplayTitle title={course.title}/>
            <Grid container>
                <Grid item lg={6} md={6} sm={4}></Grid>
                <Grid item lg={4} md={6} sm={4}></Grid>
            </Grid>
        </div>
    )
}
function DisplayTitle({title}){
    return <div>
        <Typography>{title}</Typography>
    </div>
}
function UpdateCourse(props){
    const [courses,setCourses]=useRecoilState(coursesState);
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
            fetch('http://localhost:3000/admin/courses/'+props.courseId,{
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
                for(let i=0;i<courses.length;i++){
                    if(courses[i].id==props.courseId){
                        updatedCourses.push({
                            id:props.courseId,
                            title:title,
                            description:description,
                            imageLink:imageLink
                        });
                    }else{
                        updatedCourses.push(courses[i]);
                    }
                }
                setCourses(updatedCourses);
            });
        }}>Update Course</Button>
        </Card></div>
    )
}
function CourseDetails(props){
    const courses = useRecoilValue(coursesState);
    let course=null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==props.courseId){
            course=courses[i];
            break;
        }
    }
    if(!course){
        return <div>Loading</div>
    }
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}><Card style={{border: "2px solid black", margin: 6, width: 305, minHeight: 200}}>
    <Typography textAlign={'center'} variant='h4'>{course.title}</Typography>
    <Typography textAlign={'center'} variant='subtitle2'>{course.description}</Typography>
    <img src={course.imageLink} style={{width: 305}} />
    </Card></div>
    )
}
export default Course;