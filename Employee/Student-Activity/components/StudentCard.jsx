function StudentCard({ student, deleteStudent, toggleDetails, markStatus }) {

    return (
        <div className="student-card">

            <h3>{student.name}</h3>

            <p className={student.status === "present" ? "status present" : "status absent"}>
                {student.status}
            </p>

            <div className="buttons">

                <button onClick={() => toggleDetails(student.id)}>
                    Details
                </button>

                <button
                    className="present-btn"
                    onClick={() => markStatus(student.id, "present")}
                >
                    Present
                </button>

                <button
                    className="absent-btn"
                    onClick={() => markStatus(student.id, "absent")}
                >
                    Absent
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                >
                    Delete
                </button>

            </div>

            {student.showDetails && (
                <p className="details">
                    📚 This student participates in classroom activities.
                </p>
            )}

        </div>
    );
}

export default StudentCard;