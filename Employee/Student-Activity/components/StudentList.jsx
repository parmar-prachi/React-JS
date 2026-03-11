import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, toggleDetails, markStatus }) {

    if (students.length === 0) {
        return <p className="empty">No Students Found</p>;
    }

    return (
        <div className="student-grid">

            {students.map(student => (
                <StudentCard
                    key={student.id}
                    student={student}
                    deleteStudent={deleteStudent}
                    toggleDetails={toggleDetails}
                    markStatus={markStatus}
                />
            ))}

        </div>
    );
}

export default StudentList;