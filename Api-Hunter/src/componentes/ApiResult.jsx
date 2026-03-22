import React from "react";
import { useSelector } from "react-redux";

const ApiResult = () => {
    const { loading, data, error, status, method, url } = useSelector(
        (state) => state.api
    );

    return (
        <div className="result-card"> 
            <h3>API Response</h3>

            <p><strong>Endpoint:</strong> {url}</p>
            <p><strong>Method:</strong> {method}</p>

            {loading && <p className="loading">⏳ Loading...</p>}
            {error && <p className="error">❌ {error}</p>}
            {status && <p className="success">✅ Status: {status}</p>}

            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
};

export default ApiResult;