import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {
    return (
        <div className="dashboard">
            {feedbacks.length === 0 ? (
                <p>No feedback submitted yet.</p>
            ) : (
                feedbacks.map((fb, index) => (
                    <FeedbackCard key={index} feedback={fb} />
                ))
            )}
        </div>
    );
}

export default FeedbackList;

/* 
When App loads:

1 App runs
2 FeedbackForm runs
3 FeedbackList runs

When user types:

1️ onChange
2️ handleChange
3️ setState
4️ Re-render

When user submits:

1️ handleSubmit
2️ validate
3️ create object
4️ call addFeedback
5️ setFeedbacks in App
6️ App re-renders
7️ FeedbackList re-renders
8️ New FeedbackCard appears

*/