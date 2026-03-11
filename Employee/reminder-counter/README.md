📌 Reminder Counter Application (ReactJS) 

📖 Project Overview  ::--

The Reminder Counter Application is a ReactJS-based timer application that allows users to set a custom time in minutes and seconds. The counter automatically increments every second and displays a reminder message once the predefined time limit is reached. This project demonstrates effective use of React Hooks for state management and side-effect handling.

🎯 Objective ::--

The main objective of this project is to :-

Display a running counter

Automatically increment the counter every second

Show a reminder message when the counter reaches a specified limit

Demonstrate the use of timers and React Hooks (useState, useEffect)

🛠️ How the Application Works ::--

The user enters minutes and seconds as input.

On clicking Start, the inputs are converted into total seconds and the timer begins.

The counter increments every second using setInterval.

The timer automatically stops once it reaches the defined time limit.

A reminder alert message is displayed when the time limit is reached.

Users can Pause the timer at any moment or Reset it to clear all values.
 
⚙️ Key Features ::--

⏱️ Automatic counter increment (every 1 second)

⏸️ Pause and ▶️ Resume functionality

🔁 Reset option to clear timer and inputs

🔔 Reminder alert when time limit is reached

🧹 Proper cleanup of timers using useEffect

🧠 Concepts Demonstrated  ::--

React Hooks: useState, useEffect

Timer handling using setInterval

Conditional rendering for reminder alerts

State-based UI updates

Cleanup of side effects to prevent memory leaks

🧩 Technologies Used ::--

Frontend: ReactJS

Build Tool: Vite / Create React App

Language: JavaScript (ES6)

📂 Project Folder Structure ::--

reminder-counter/
│
├── src/
│ ├── components/
│ │ └── ReminderCounter.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
└── package.json

✅ Conclusion  ::--

The Reminder Counter Application is a simple yet effective ReactJS project that showcases timer-based logic, state management, and clean component design. It serves as a practical example for understanding real-time updates and side-effect handling in React.

Layout ::- 

<img width="644" height="483" alt="Screenshot 2026-02-10 at 1 33 36 AM" src="https://github.com/user-attachments/assets/d117adf2-0e5d-4374-bc38-7d7a20cedad9" />

<img width="969" height="550" alt="Screenshot 2026-02-10 at 1 33 03 AM" src="https://github.com/user-attachments/assets/63287808-1245-46be-85d8-30bcad7def29" />
