import React, { useState } from "react";
import {Link} from "react-router-dom"
import {GoNote} from "react-icons/go"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {motion} from "framer-motion"

export default function ListItem(props) {

    // const [transparent, toggleTransparency] = useState(false)

    const deleteNote = () => {
        // toggleTransparency(prev => !prev)
        props.deleteNote(props.note.id)
    }

    return (
        <div className="note">
            <span>{props.editing && <button onClick={deleteNote} className="delete-button">{<AiOutlineMinusCircle/>}</button>}</span>
            <Link to={`/note/${props.note.id}`}>
                <GoNote/> <strong className="note-title">{props.note.title}</strong><span>{props.note.updated.replace("T", ", ").slice(0, 17)}</span>
            </Link>
            
        </div>
    )
}