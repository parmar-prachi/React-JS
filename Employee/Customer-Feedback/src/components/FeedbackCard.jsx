function FeedbackCard({ feedback }) {

    const { name, email, category, priority, description, screenshot, steps, suggestions, timestamp } = feedback;

    const renderList = (title, items) =>
        items.length > 0 && (
            <div>
                <h4>{title}</h4>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        );

    return (
        <div className="feedback-card">
            <h3>{name}</h3>
            <p><strong>Email:</strong> {email}</p>

            <span className={`badge ${priority.toLowerCase()}`}>
                {category} - {priority}
            </span>

            <p>{description}</p>

            {screenshot && (
                <img src={screenshot} alt="Screenshot" className="preview" />
            )}

            {renderList("Steps:", steps)}
            {renderList("Suggestions:", suggestions)}

            <small>{timestamp}</small>
        </div>
    );
}

export default FeedbackCard;