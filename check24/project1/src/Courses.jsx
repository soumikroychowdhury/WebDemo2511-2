import {useState, useEffect} from 'react';
function Courses(){
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(res=>res.json()).then(data=>{setCourses(data);})
    },[]);
    return (
        <div>
            <h2>Courses</h2>
        </div>
    )
}
export default Courses;