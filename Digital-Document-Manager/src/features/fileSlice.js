import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage, db } from '../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Thunk: Upload file to Storage then save metadata to Firestore
export const uploadFile = createAsyncThunk('files/uploadFile', async ({ file, category }) => {
    const storageRef = ref(storage, `docs/${Date.now()}_${file.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(uploadTask.ref);

    const fileData = {
        name: file.name,
        type: file.type,
        size: (file.size / 1024).toFixed(2) + " KB",
        category,
        url: downloadURL,
        storagePath: storageRef.fullPath,
        createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "documents"), fileData);
    return { id: docRef.id, ...fileData };
});

// Thunk: Fetch all documents
export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
    const querySnapshot = await getDocs(collection(db, "documents"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

// Thunk: Delete file
export const deleteFile = createAsyncThunk('files/deleteFile', async ({ id, storagePath }) => {
    await deleteObject(ref(storage, storagePath));
    await deleteDoc(doc(db, "documents", id));
    return id;
});

const fileSlice = createSlice({
    name: 'files',
    initialState: { items: [], loading: false, error: null, searchTerm: '' },
    reducers: {
        setSearchTerm: (state, action) => { state.searchTerm = action.payload; }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiles.pending, (state) => { state.loading = true; })
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    },
});

export const { setSearchTerm } = fileSlice.actions;
export default fileSlice.reducer;