import axios from 'axios'
import { useEffect, useState } from 'react';
import Sidebar from './components/Layouts/Sidebar';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './components/Layouts/HomePage';
import Students from './components/Layouts/Students';
import Courses from './components/Layouts/Courses';
import Classes from './components/Layouts/Classes';


function App() {

const [students,setStudents] = useState();
const [studentInfo,setStudentInfo] = useState(
  {name: "",age:"",classId:""}
);

const getAll = () => {
   axios.get('http://localhost:3001/api/student/getAll')
  .then(function (response) {
    setStudents(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}


useEffect( () => {
  getAll()
  console.log(students)
}, [])



const deleteFunc = (id) => {
  axios.delete(`http://localhost:3001/api/student/delete/${id}`)
       .then(response => {
         getAll()
       })
       .catch(error => {
           console.log(error)
           console.log(students)
           
       });
}

const addStudent = () => {
  axios.post(`http://localhost:3001/api/student/create/`, {
    name:studentInfo.name,
    age:studentInfo.age,
    classId:studentInfo.classId,
  })
       .then(response => {
        getAll()
       })
       .catch(error => {
           console.log(error)
           console.log(students)
           
       });
}

  return (
    <div className="container">
    <Sidebar/>
    <div className="content-wrapper">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/students" element={<Students/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/courses" element={<Courses/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;

{/* <input type="text" placeholder="Student Name"  onChange={(e) => setStudentInfo({...studentInfo, name: e.target.value})}/>
<input type="number" placeholder="Student Age"  onChange={(e) => setStudentInfo({...studentInfo, age: e.target.value})}/>
<input type="number" placeholder="Student Class" onChange={(e) => setStudentInfo({...studentInfo, classId: e.target.value})}/>
<button onClick={(e) => addStudent()}>Add Student</button>
{students ? students.map((item,key) => (
<div key={key} className="student">
  <h1>{item.name}{item.id}</h1>
  <button onClick={() => deleteFunc(item.id)}>SİL</button>
</div>
)) : "felflew"} */}

