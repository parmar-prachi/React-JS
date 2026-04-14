import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFiles } from '../features/fileSlice';
import UploadFile from '../components/UploadFile';
import FileList from '../components/FileList';
import SearchFilter  from '../components/SearchFilter';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Digital Document Manager</h1>
                <UploadFile />
                <SearchFilter />
                <FileList />
            </div>
        </div>
    );
};

export default Dashboard;