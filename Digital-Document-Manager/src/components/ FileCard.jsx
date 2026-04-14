import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../features/fileSlice';

const FileCard = ({ file }) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white border p-4 rounded shadow hover:shadow-lg transition">
            <div className="h-32 bg-gray-100 flex items-center justify-center mb-2 overflow-hidden">
                {file.type.includes('image') ? (
                    <img src={file.url} alt={file.name} className="object-cover h-full w-full" />
                ) : (
                    <span className="text-4xl">📄</span>
                )}
            </div>
            <h3 className="font-bold truncate">{file.name}</h3>
            <p className="text-xs text-gray-500">{file.category} • {file.size}</p>
            <div className="mt-4 flex justify-between">
                <a href={file.url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm font-semibold">View</a>
                <button
                    onClick={() => dispatch(deleteFile({ id: file.id, storagePath: file.storagePath }))}
                    className="text-red-500 text-sm font-semibold"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FileCard;