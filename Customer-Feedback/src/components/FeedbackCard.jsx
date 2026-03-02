function FeedbackCard({ feedback }) {

    return (
        <div className="feedback-card">
            <h3>{feedback.name}</h3>
            <p><strong>Email:</strong> {feedback.email}</p>
            <span className={`badge ${feedback.priority.toLowerCase()}`}>
                {feedback.category} - {feedback.priority}
            </span>

            <p>{feedback.description}</p>

            {feedback.screenshot && (
                <img src={feedback.screenshot} alt="Screenshot" className="preview" />
            )}

            {feedback.steps.length > 0 && (
                <div>
                    <h4>Steps:</h4>
                    <ul>
                        {feedback.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ul>
                </div>
            )}

            {feedback.suggestions.length > 0 && (
                <div>
                    <h4>Suggestions:</h4>
                    <ul>
                        {feedback.suggestions.map((sug, i) => (
                            <li key={i}>{sug}</li>
                        ))}
                    </ul>
                </div>
            )}

            <small>{feedback.timestamp}</small>
        </div>
    );
}

export default FeedbackCard;