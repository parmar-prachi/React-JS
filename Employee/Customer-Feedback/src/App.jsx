import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";
function App() {
    const [feedbacks, setFeedbacks] = useState([]);
    const addFeedback = (newFeedback) => { setFeedbacks([...feedbacks, newFeedback]); };
    return (<div className="app-container">
        <h1>Customer Feedback & Issue Reporting System</h1>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackList feedbacks={feedbacks} />
    </div>);
} export default App;