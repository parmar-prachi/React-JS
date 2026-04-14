import React from 'react';
import { useSelector } from 'react-redux';
import FileCard from '../components/ FileCard';

const FileList = () => {
    // Extracting data, search term, and loading state from Redux
    const { items, searchTerm, loading, error } = useSelector((state) => state.files);

    // LOGIC: Filter files based on name or category
    const filteredFiles = items.filter((file) => {
        const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = file.category?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch || matchesCategory;
    });

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center py-10 font-medium">Error: {error}</div>;
    }

    if (filteredFiles.length === 0) {
        return (
            <div className="text-center py-10 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500">No documents found matching "{searchTerm}"</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFiles.map((file) => (
                <FileCard key={file.id} file={file} />
            ))}
        </div>
    );
};

export default FileList;