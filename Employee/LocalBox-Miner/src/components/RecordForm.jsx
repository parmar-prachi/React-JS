import { useState, useEffect } from "react";

function RecordForm({ addRecord, editRecord, updateRecord }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (editRecord) {
            setName(editRecord.name);
            setEmail(editRecord.email);
        }
    }, [editRecord]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("All fields required");
            return;
        }

        const record = {
            id: editRecord ? editRecord.id : Date.now(),
            name,
            email
        };

        if (editRecord) {
            updateRecord(record);
        } else {
            addRecord(record);
        }

        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
                {editRecord ? "Update Record" : "Add Record"}
            </button>

        </form>
    );
}

export default RecordForm;