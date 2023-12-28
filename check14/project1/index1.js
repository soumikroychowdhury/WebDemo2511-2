const express=require('express');
var bodyParser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());
const cors=require('cors');
app.use(cors());
app.use(express.json());

let ADMINS = [], USERS = [], COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(a => a.username === username && a.password === password);
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(403).json({ message: 'User authentication failed' });
  }
};

app.post('/admin/signup', (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find(a => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: 'Admin already exists' });
  } else {
    ADMINS.push(admin);
    res.json({ message: 'Admin created successfully' });
  }
});

app.post('/admin/login', adminAuthentication, (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

var count=0;
app.post('/admin/courses', adminAuthentication, (req, res) => {
  const course = req.body;
  course.id = ++count;
  COURSES.push(course);
  res.json({ message: 'Course created successfully', courseId: course.id });
});

app.put('/admin/courses/:courseId', adminAuthentication, (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId);
  if (course) {
    Object.assign(course, req.body);
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/admin/courses', adminAuthentication, (req, res) => {
  res.json({ courses: COURSES });
});

app.post('/users/signup', (req, res) => {
//   const user = {
//     username: req.body.username,
//     password: req.body.password,
//     purchasedCourses: []
//   }
  const user = {...req.body, purchasedCourses: []};
  USERS.push(user);
  res.json({ message: 'User created successfully' });
});

app.post('/users/login', userAuthentication, (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.get('/users/courses', userAuthentication, (req, res) => {
//   let filteredCourses = [];
//   for (let i = 0; i<COURSES.length; i++) {
//     if (COURSES[i].published) {
//       filteredCourses.push(COURSES[i]);
//     }
//   }
  res.json({ courses: COURSES.filter(c => c.published) });
});

app.post('/users/courses/:courseId', userAuthentication, (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: 'Course purchased successfully' });
  } else {
    res.status(404).json({ message: 'Course not found or not available' });
  }
});

app.get('/users/purchasedCourses', userAuthentication, (req, res) => {
//   var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
//   var purchasedCourses = [];
//   for (let i = 0; i<COURSES.length; i++) {
//     if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
//       purchasedCourses.push(COURSES[i]);
//     }
//   }
  const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id));
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});