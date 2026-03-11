import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import './App.css';

function App() {

    const [students, setStudents] = useState([]);

    const addStudent = (name) => {
        const newStudent = {
            id: Date.now(),
            name,
            status: "absent",
            showDetails: false
        };

        setStudents([...students, newStudent]);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(s => s.id !== id));
    };

    const toggleDetails = (id) => {
        setStudents(
            students.map(s =>
                s.id === id ? { ...s, showDetails: !s.showDetails } : s
            )
        );
    };

    const markStatus = (id, status) => {
        setStudents(
            students.map(s =>
                s.id === id ? { ...s, status } : s
            )
        );
    };

    const total = students.length;
    const present = students.filter(s => s.status === "present").length;
    const absent = students.filter(s => s.status === "absent").length;

    return (
        <div className="container">

            <h1 className="title">🎓 Student Activity Manager</h1>

            {/* Dashboard */}
            
            <div className="dashboard">
                <div className="card total">
                    <h3>Total Students</h3>
                    <p>{total}</p>
                </div>

                <div className="card present">
                    <h3>Present</h3>
                    <p>{present}</p>
                </div>

                <div className="card absent">
                    <h3>Absent</h3>
                    <p>{absent}</p>
                </div>
            </div>

            <StudentForm addStudent={addStudent} />

            <StudentList
                students={students}
                deleteStudent={deleteStudent}
                toggleDetails={toggleDetails}
                markStatus={markStatus}
            />

        </div>
    );
}

export default App;