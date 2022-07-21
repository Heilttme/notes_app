import React, {useState, useEffect} from "react";
import ListItem from "../components/ListItem";
import {ReactComponent as AddIcon} from './add.svg'

export default function NotesListPage(props) {
    const [notes, setNotes] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(() => {
        props.toggleEditButton(prev => !prev)
    },[])

    useEffect(() => {
        getNotes()
    }, [reload])
    
    const getNotes = async () => {
        const response = await fetch("/api/notes")
        const data = await response.json()
        setNotes(data)
    }
    
    const addNote = async () => {
        await fetch(`/api/notes/add/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        setReload(prev => prev += 1)
    }

    const deleteNote = async id => {
        await fetch(`/api/notes/${id}/delete/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        setReload(prev => prev += 1)
    }

    return (
        <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem editing={props.editing} key={index} note={note} deleteNote={deleteNote}/>
            ))}
            <button onClick={addNote} className="plus-button"><AddIcon/></button>
        </div>
    )
}