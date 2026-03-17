💻 Smart Leave Management System :: 

(React + Redux Toolkit + Redux Thunk)
📌 Project Overview :-

The Smart Leave Management System is a modern, scalable web application built using React.js for UI development and Redux Toolkit for efficient state management. It leverages Redux Thunk middleware to handle asynchronous operations such as fetching, updating, and deleting leave records.

The system is designed to simulate real-world organizational workflows, enabling employees and administrators to manage leave requests seamlessly with real-time UI updates and centralized state handling.

🎯 Objectives :-

To implement centralized state management using Redux Toolkit

To handle asynchronous operations using Redux Thunk

To build a CRUD-based real-world application

To demonstrate UI synchronization without page reloads

To simulate role-based leave workflows

✅ Key Features ::-
1. 📝 Apply for Leave :

Users can submit leave requests with the following details:

Employee Name 

Leave Type (Sick, Casual, Emergency, Vacation, Half-Day)

Start Date & End Date

Reason

Status (Default: Pending)

2. 📊 View Leave Records :

Display all leave applications in table/card format

Includes:

Employee Name

Leave Type

Duration

Status

Applied Date

3. ✏️ Update Leave Request :

Modify:

Leave type

Dates

Reason

Updates state instantly using Redux

4. ❌ Delete Leave Request :

Remove unwanted or cancelled requests

Automatically updates UI + localStorage

5. 🔄 Leave Status Management :

Status options:

Pending

Approved

Rejected

Cancelled

Managed via Redux actions

6. 🔍 Search & Filter :

Search by:

Employee Name

Leave Type

Status

Filter by date range

7. ⚡ Real-Time UI Updates :

No page refresh required

Redux ensures:

Instant UI sync

Single source of truth

🧠 Redux Architecture ::
📦 Slice: leaveSlice.js

Includes:-

applyLeave

fetchLeaves

updateLeave

deleteLeave

approveLeave

setLoading

setError

🔄 Async Flow (Redux Thunk) ::

Example lifecycle:-

Dispatch request → loading = true

Perform async operation (API/localStorage)

Success → update state

Error → set error message

LAYOUT ::- 

<img width="1270" height="382" alt="ss-1" src="https://github.com/user-attachments/assets/0470e26c-639b-4a39-a69a-843d3bb42e19" />


<img width="1264" height="677" alt="ss-2" src="https://github.com/user-attachments/assets/9dd2b09f-adfe-41d1-8f40-b83e9eb0f8f5" />
