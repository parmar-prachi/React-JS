💻 LocalBox Miner :: 

📝 Project Overview :-

LocalBox Miner is a React-based offline data management application designed to demonstrate core React concepts such as state management, component communication, CRUD operations, and localStorage integration.

The application allows users to add, view, update, and delete records while storing all data locally in the browser using localStorage.

This project simulates a lightweight admin dashboard where data persistence is handled entirely on the client side without any backend or external API.

🚀 Key Features :-

✔ Add new records using controlled form inputs
✔ Edit and update existing records
✔ Delete individual records
✔ Clear all records with confirmation
✔ Persistent data storage using localStorage
✔ Dynamic UI updates using React state
✔ Conditional rendering for empty states and edit mode

🧩 Project Architecture :-

The application is structured using reusable React components :-

📄 RecordForm - 

Handles adding and updating records using controlled inputs and form validation.

📋 RecordList - 

Displays stored records in a structured table layout.

🧾 RecordRow -

Represents each record with Edit and Delete actions, demonstrating argument passing in event handlers.

All components communicate through props and shared state managed in the main App component.

⚡ React Concepts Demonstrated ::-

Event Handling :-

onChange → Input field updates

onSubmit → Add or update record

onClick → Edit, delete, or clear records

State Management :

Records are stored in React state and updated dynamically to trigger UI re-rendering.

Passing Arguments to Event Handlers
 
Examples: -

deleteRecord(id)

startEdit(id)

clearAllRecords()

Local Storage Integration

The application demonstrates:

Loading saved data from localStorage on component mount

Saving updated records automatically

Storing records in JSON format

🎭 Conditional Rendering ::-

The interface dynamically responds to state changes:-

Display “No Records Found” when no data exists

Switch between Add Mode and Edit Mode

Show form validation messages

Display confirmation UI before clearing records
 
📊 Dashboard Summary ::-

The interface dynamically displays:-

Total number of records

Last added record

Stored data table

Edit/Delete controls

Validation feedback

All updates happen instantly using React state synchronized with localStorage.

🛠️ Technologies Used ::-

React.js

JavaScript (ES6+)

HTML5

CSS3

localStorage API

Vite

LAYOUT : 

<img width="1273" height="289" alt="ss-1" src="https://github.com/user-attachments/assets/00fd88d2-63c6-41aa-bb30-8e1aa48b12ad" />


<img width="1253" height="457" alt="ss-2" src="https://github.com/user-attachments/assets/192a261f-c37b-434c-8d6a-b72479be040a" />


