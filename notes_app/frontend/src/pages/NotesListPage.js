import React, {useState, useEffect} from "react";
import ListItem from "../components/ListItem";
import {ReactComponent as AddIcon} from './add.svg'

export default function NotesListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])
    
    const getNotes = async () => {
        const response = await fetch("/api/notes")
        const data = await response.json()
        setNotes(data)
    }
    
    const addNote = () => {
        fetch("/api/notes/addnote", {
            method: "POST",
            body: JSON.stringify({
                title: {}
            })
        })
    }

    return (
        <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>
            ))}
            <button onClick={addNote} className="plus-button"><AddIcon/></button>
        </div>
    )
}