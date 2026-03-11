import { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import './App.css'

function App() {

  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // Load from localStorage

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(storedData);
  }, []);

  // Sync to localStorage

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  // Add Record

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  // Delete Record

  const deleteRecord = (id) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
  };

  // Start Edit

  const startEdit = (id) => {
    const record = records.find((r) => r.id === id);
    setEditRecord(record);
  };

  // Update Record

  const updateRecord = (updatedRecord) => {
    const updated = records.map((r) =>
      r.id === updatedRecord.id ? updatedRecord : r
    );

    setRecords(updated);
    setEditRecord(null);
  };

  // Clear All

  const clearAllRecords = () => {
    setRecords([]);
    setShowConfirm(false);
  };


  return (
    <>
      <div className="container">

        <h1>LocalBox Miner Dashboard</h1>

        <RecordForm
          addRecord={addRecord}
          editRecord={editRecord}
          updateRecord={updateRecord}
        />

        <button onClick={clearAllRecords} className="clearBtn">
          Clear All Records
        </button>

        {showConfirm && (
          <div className="confirmBox">
            <p>Are you sure you want to delete all records?</p>

            <button onClick={clearAllRecords}>Yes</button>

            <button onClick={() => setShowConfirm(false)}>No</button>
          </div>
        )}


        <RecordList
          records={records}
          deleteRecord={deleteRecord}
          startEdit={startEdit}
        />

      </div>
    </>

  );
}

export default App;