import { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // Load data from localStorage :

  useEffect(() => {
    const saved = localStorage.getItem("employees");
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  // Save data to localStorage  :

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add Employee  :

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  // Delete Employee :

  const deleteEmployee = (id) => {
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  };

  // Start Edit :

  const startEdit = (id) => {
    const emp = employees.find(e => e.id === id);
    setEditEmployee(emp);
  };

  // Update Employee :

  const updateEmployee = (updatedEmp) => {
    const updated = employees.map(emp =>
      emp.id === updatedEmp.id ? updatedEmp : emp
    );

    setEmployees(updated);
    setEditEmployee(null);
  };

  // Clear All :

  const clearAllEmployees = () => {
    setEmployees([]);
  };

  return (
    <div className="container">

      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        editEmployee={editEmployee}
      />

      <button onClick={clearAllEmployees}>Clear All</button>

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;