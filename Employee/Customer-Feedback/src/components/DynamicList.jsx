function DynamicList({ label, items, setItems }) {

    const handleChange = (index, value) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };

    const addRow = () => {
        setItems([...items, ""]);
    };

    const removeRow = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    return (
        <div className="dynamic-section">
            <label>{label}</label>
            {items.map((item, index) => (
                <div key={index} className="dynamic-row">
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                    <button type="button" onClick={() => removeRow(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addRow}>+ Add</button>
        </div>
    );
}

export default DynamicList;