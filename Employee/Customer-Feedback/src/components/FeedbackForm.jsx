import { useState, useRef } from "react";
import DynamicList from "./DynamicList";

function FeedbackForm({ addFeedback }) {

    const initialState = {
        name: "",
        email: "",
        category: "",
        priority: "",
        description: ""
    };

    const [formData, setFormData] = useState(initialState);
    const [steps, setSteps] = useState([""]);
    const [suggestions, setSuggestions] = useState([""]);
    const [errors, setErrors] = useState({});

    const screenshotRef = useRef();
    const notesRef = useRef();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const err = {};

        if (!formData.name) err.name = "Name required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            err.email = "Valid email required";
        if (!formData.category) err.category = "Select category";
        if (!formData.priority) err.priority = "Select priority";
        if (formData.description.length < 10)
            err.description = "Minimum 10 characters required";

        setErrors(err);
        return !Object.keys(err).length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addFeedback({
            ...formData,
            steps,
            suggestions,
            screenshot: screenshotRef.current.value,
            notes: notesRef.current.value,
            timestamp: new Date().toLocaleString()
        });

        setFormData(initialState);
        setSteps([""]);
        setSuggestions([""]);
        screenshotRef.current.value = "";
        notesRef.current.value = "";
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <h2>Submit Feedback</h2>

            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option>Bug</option>
                <option>Suggestion</option>
                <option>Complaint</option>
                <option>Other</option>
            </select>
            {errors.category && <p className="error">{errors.category}</p>}

            <select name="priority" value={formData.priority} onChange={handleChange}>
                <option value="">Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            {errors.priority && <p className="error">{errors.priority}</p>}

            <textarea name="description" placeholder="Detailed Description" value={formData.description} onChange={handleChange} />
            {errors.description && <p className="error">{errors.description}</p>}

            <input type="text" placeholder="Screenshot URL (optional)" ref={screenshotRef} />
            <textarea placeholder="Additional Notes (optional)" ref={notesRef}></textarea>

            <DynamicList label="Steps to Reproduce" items={steps} setItems={setSteps} />
            <DynamicList label="Suggested Improvements" items={suggestions} setItems={setSuggestions} />

            <button type="submit" className="sub-btn">Submit Feedback</button>
        </form>
    );
}

export default FeedbackForm;