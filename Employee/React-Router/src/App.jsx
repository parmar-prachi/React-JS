import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav_bar from './components/Navbar';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import ViewBook from "./pages/ViewBook";
import EditBook from './pages/EditBook';
import ViewDetails from "./pages/ViewDetails";
import { useState, useEffect } from "react";

function App() {

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [
      {
        b_id: 1,
        title: "गोदान",
        author: "Munshi Premchand",
        publisher: "Sahitya Sarowar",
        type: "Hindi Novel ",
        price: "420",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Godaan_by_Munshi_Premchand.png/500px-Godaan_by_Munshi_Premchand.png",
        des: "Godan is a Hindi novel by Munshi Premchand, It was first published in 1936 and is considered one of the greatest Hindustani novels of modern Indian literature. Themed around the socio economic deprivation as well as the exploitation of the village poor, the novel was the last complete novel of Premchand."
      },
      {
        b_id: 2,
        title: "गुनाहों का देवता",
        author: "Dharamveer Bharti",
        publisher: "Bharatiya Jnanpith",
        type: "Romantic/Tragic Novel",
        price: "232",
        image: "https://m.media-amazon.com/images/I/81B4hL+kjVL.jpg",
        des: "Gunahon Ka Devta is a timeless and most popular Hindi novel by Dharamvir Bharati, first published in 1949. Set in Allahabad (now Prayagraj), it depicts a selfless, pure, yet unrequited and tragic love story between Chander and Sudha. The novel portrays themes of love, social morality, sacrifice, and emotional conflict."
      },
      {
        b_id: 3,
        title: "दीवार में एक खिड़की रहती थी",
        author: "Vinod Kumar Shukla",
        publisher: "Hind Yugm",
        type: "Fiction Novel",
        price: "300",
        image: "https://m.media-amazon.com/images/I/41Qsxm2T-XL._SY445_SX342_FMwebp_.jpg",
        des: "There Lived a Window in the Wallis a Hindi novelwritten by renowned literary figure Vinod Kumar Shukla, recipient of the Sahitya Akademi Award.It is a love story filled with simplicity, modesty, and human dreams, depicting the lives of Raghuvar Prasad and Sonsi and the emotions of their small home"
      }
    ];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BrowserRouter>
      <Nav_bar />

      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/addbook" element={<AddBook books={books} setBooks={setBooks} />} />
        <Route path="/viewbook" element={<ViewBook books={books} setBooks={setBooks} />} />
        <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
        <Route path="/details/:id" element={<ViewDetails books={books} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;