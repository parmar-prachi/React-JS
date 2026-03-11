import { useState, useEffect } from "react";

function EmployeeForm({ addEmployee, updateEmployee, editEmployee }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [status, setStatus] = useState("Active");

    // Load edit data
    useEffect(() => {
        if (editEmployee) {
            setName(editEmployee.name);
            setEmail(editEmployee.email);
            setPhone(editEmployee.phone);
            setSalary(editEmployee.salary);
            setStatus(editEmployee.status);
        }
    }, [editEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !salary) {
            alert("All fields required");
            return;
        }

        const employee = {
            id: editEmployee ? editEmployee.id : Date.now(),
            name,
            email,
            phone,
            salary,
            status
        };

        if (editEmployee) {
            updateEmployee(employee);
        } else {
            addEmployee(employee);
        }

        setName("");
        setEmail("");
        setPhone("");
        setSalary("");
        setStatus("Active");
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>{editEmployee ? "Edit Employee" : "Add Employee"}</h2>

            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Active</option>
                <option>Inactive</option>
            </select>

            <button type="submit">
                {editEmployee ? "Update Employee" : "Add Employee"}
            </button>

        </form>
    );
}

export default EmployeeForm;