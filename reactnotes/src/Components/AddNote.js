import { useState } from "react";

const AddNote = ({handleAddNote} ) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }   
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };
    return (
        <div className="new Note">
            <textarea 
            rows={8}
            cols={10}
            placeholder="Type to add Note...."
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="noteFooter">
                <small>{characterLimit - noteText.length} remaining!</small>
                <button className="save" onClick={handleSaveClick}> Save </button>
            </div>
        </div>
    );
};



export default AddNote;