import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import {Link} from "react-router-dom"

export default function NotePage(props) {
    const {id} = useParams()

    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
        props.toggleEditButton(prev => !prev)
    }, [id])

    const getNote = async () => {
        const response = await fetch(`/api/notes/${id}`)
        const data = await response.json()
        setNote(data)
    }

    const updateNote = async () => {
        await fetch(`/api/notes/${id}/update/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
    }

    return (
        <div className="note-element">
            <Link to={"/"}>
                <button onClick={updateNote} className="arrow-back">{<IoIosArrowBack/>}</button>
            </Link>
            <br/>
            <input maxLength="20" onChange={e => setNote({...note, "title": e.target.value})} defaultValue={note?.title}></input>
            <textarea onChange={e => setNote({...note, "body": e.target.value})} defaultValue={note?.body}></textarea>
        </div>
    )
}