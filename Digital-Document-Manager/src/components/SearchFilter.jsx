import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/fileSlice';

const SearchFilter = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.files.searchTerm);

    return (
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full max-w-md">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    🔍
                </span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    placeholder="Search by file name..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div className="text-sm text-gray-500 italic">
                Organizing your digital workspace...
            </div>
        </div>
    );
};

export default SearchFilter;