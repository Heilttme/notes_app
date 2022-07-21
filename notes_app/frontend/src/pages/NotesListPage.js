import React, {useState, useEffect} from "react";
import ListItem from "../components/ListItem";
import {ReactComponent as AddIcon} from './add.svg'

export default function NotesListPage(props) {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
        props.toggleEditButton(prev => !prev)
    }, [])
    
    const getNotes = async () => {
        const response = await fetch("/api/notes")
        const data = await response.json()
        setNotes(data)
    }
    
    const addNote = () => {
        fetch(`/api/notes/add/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

    return (
        <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem editing={props.editing} key={index} note={note}/>
            ))}
            <button onClick={addNote} className="plus-button"><AddIcon/></button>
        </div>
    )
}