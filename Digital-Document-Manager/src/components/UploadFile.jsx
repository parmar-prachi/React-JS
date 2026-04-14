import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../features/fileSlice';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('Personal');
    const dispatch = useDispatch();

    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) return alert("Select a file");
        dispatch(uploadFile({ file, category }));
        setFile(null);
    };

    return (
        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md flex gap-4 items-end mb-6">
            <div className="flex-1">
                <label className="block text-sm font-bold mb-1">Select Document</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full border p-2" />
            </div>
            <div>
                <label className="block text-sm font-bold mb-1">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
                    <option>Personal</option>
                    <option>Academic</option>
                    <option>Office</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload</button>
        </form>
    );
};

export default UploadFile;