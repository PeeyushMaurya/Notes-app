import { useEffect, useState } from "react";
import {nanoid} from "nanoid"
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

 const App = () => {

  const [notes, setNotes] = useState([
  {
    
    id: nanoid(),
    text: "my First note",
    date: "08/02/2022"
  },

  {
    id: nanoid(),
    text: "my Second note",
    date: "18/02/2022"
  },

  {
    id: nanoid(),
    text: "my Third note",
    date: "28/02/2022"
  }
]);

  const [searchText, setSearchText] = useState('');
  
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes); 
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter( (notes) => notes.id !== id);
    setNotes(newNotes);
  }
   return (
     <div className={`${darkMode && `darkMode`}`} >
       <div className="container">
     <Header handleToggleDarkMode={setDarkMode} />
     <Search handleSearchNote={setSearchText} />
     <NotesList notes={notes.filter((note) =>
       note.text.toLowerCase().includes(searchText))}

        handleAddNote={addNote}
         handleDeleteNote={deleteNote} />
   </div>
     </div>
   
   );
 };



 export default App;