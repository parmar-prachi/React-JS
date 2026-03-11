import EmployeeRow from "./EmployeeRow";

function EmployeeList({ employees, deleteEmployee, startEdit }) {

    if (employees.length === 0) {
        return <h3>No Employees Found</h3>;
    }

    return (
        <table border="1">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

                {employees.map(emp => (
                    <EmployeeRow
                        key={emp.id}
                        emp={emp}
                        deleteEmployee={deleteEmployee}
                        startEdit={startEdit}
                    />
                ))}

            </tbody>

        </table>
    );
}

export default EmployeeList;