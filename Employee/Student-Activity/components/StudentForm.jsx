import { useRef, useState } from "react";

function StudentForm({ addStudent }) {

    const nameRef = useRef();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value.trim();

        if (name === "") {
            setError("Student name is required");
            nameRef.current.focus();
            return;
        }

        addStudent(name);

        nameRef.current.value = "";
        nameRef.current.focus();
        setError("");
    };

    return (
        <div className="form-box">

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter student name"
                    ref={nameRef}
                />

                <button type="submit">Add Student</button>

            </form>

            {error && <p className="error">{error}</p>}

        </div>
    );
}

export default StudentForm;