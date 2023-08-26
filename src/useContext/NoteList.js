import React, { useContext, useState } from 'react'
import { NotesContext } from './UseContext'; //* Importare il contesto

const NoteList = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const [newNote, setNewNote] = useState('');
    const handleAddNote = () => {
        setNotes([...notes, newNote]);
        setNewNote('');
    }
    return (
        <>
            <h1>NoteList</h1>
            <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                />
            <button onClick={handleAddNote}>Aggiungi</button>
            {notes.map((note, index) => <p key={index}>{note}</p>)}
        </>
    )
}
export default NoteList;

