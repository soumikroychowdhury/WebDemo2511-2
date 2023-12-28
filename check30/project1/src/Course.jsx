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
                <Grid item lg={6} md={6} sm={4}><UpdateCourse course={course} setCourse={setCourse}/></Grid>
                <Grid item lg={4} md={6} sm={4}><CourseDetails course={course}/></Grid>
            </Grid>
        </div>
    )
}
function DisplayTitle({title}){
    return <div style={{height: 240, background: '#212121', top: 0, width: '100vw', zIndex: 0, marginBottom: -240}}>
        <div style={{height: 240, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant={'h4'} style={{color: 'lightblue', fontWeight: 400}} textAlign={'center'}>{title}</Typography>
        </div>
    </div>
}
function UpdateCourse({course,setCourse}){
    const [title,setTitle]=useState(course.title);
    const [description,setDescription]=useState(course.description);
    const [imageLink,setImageLink]=useState(course.imageLink);
    const [price,setPrice]=useState(course.price);
    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card variant={'outlined'} style={{maxWidth: 400, marginTop: 200}}>
            <div style={{padding: 6}}>
                <Typography style={{marginBottom: 6}}>Update Course</Typography>
                <TextField value={title} style={{marginBottom: 6}} onChange={(e)=>{setTitle(e.target.value)}} fullWidth={true} label='Title' variant='outlined'/>
                <TextField value={description} style={{marginBottom: 6}} onChange={(e)=>{setDescription(e.target.value)}} fullWidth={true} label='Description' variant='outlined'/>
                <TextField value={imageLink} style={{marginBottom: 6}} onChange={(e)=>{setImageLink(e.target.value)}} fullWidth={true} label='Image Link' variant='outlined'/>
                <TextField value={price} style={{marginBottom: 6}} onChange={(e)=>{setPrice(e.target.value)}} fullWidth={true} label='Price' variant='outlined'/>
                <Button variant='contained' onClick={async()=>{axios.put('http://localhost:3000/admin/courses/'+course._id,{title:title,description:description,imageLink:imageLink,price:price,published:true},{headers:{'Authorization':'Bearer '+localStorage.getItem('token')}}); let updatedCourse={_id:course._id,title:title,description:description,imageLink:imageLink,price:price};setCourse(updatedCourse);}}>Update Course</Button>
            </div>
        </Card>
    </div>
}
function CourseDetails({course}){
    return <div>
        <Card>
            <img src={course.imageLink} style={{width:400}}/>
            <div>
                <Typography variant='subtitle2'>{course.description}</Typography>
                <Typography variant='subtitle2'>Price: {course.price}</Typography>
            </div>
        </Card>
    </div>
}
export default Course;