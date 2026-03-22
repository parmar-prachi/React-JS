import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi, axiosApi } from "../features/api/ApiSlice";

const ApiForm = () => {
    const dispatch = useDispatch();

    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");
    const [body, setBody] = useState("");
    const [type, setType] = useState("fetch");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url) {
            alert("Please enter API URL");
            return;
        }

        const payload = {
            url,
            method,
            body: body ? JSON.parse(body) : {},
        };

        if (type === "fetch") {
            dispatch(fetchApi(payload));
        } else {
            dispatch(axiosApi(payload));
        }

        setUrl("");
        setBody("");
    };

    return (
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter API URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <select value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                </select>

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="fetch">fetch()</option>
                    <option value="axios">axios</option>
                </select>

                {method === "POST" && (
                    <textarea
                        placeholder='Enter JSON body e.g. {"name":"Prachi"}'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                )}

                <button type="submit">Send Request</button>
            </form>
        </div>
        
    );
};

export default ApiForm;