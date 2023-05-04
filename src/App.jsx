import { useState } from 'react'
import { AddStudent } from './addStudent';
import { StudentsBase } from './StudentsBase';
import './App.css'

export default function App() {
  const [studentsList, setStudentList] = useState([])


  const onAdd = (name, surname, grades) => {
    setStudentList((prev) => [
      ...prev,
      {
        name,
        surname,
        grades
      }
    ]);
  };

  return (

    <div class="mainBox">

      <div class="leftPart">
        <h2>Add Student</h2>
        <AddStudent onAdd={onAdd} />
      </div>
      
      <div class="rightPart">
        <h2>Students</h2> 
        <StudentsBase studentsList={studentsList} />
      </div>

    </div>

  );
};


