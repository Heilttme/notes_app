import React from "react";
import {Link} from "react-router-dom"
import {GoNote} from "react-icons/go"

export default function ListItem(props) {
    return (
        <div className="note">
            <Link className="lll" to={`/note/${props.note.id}`}>
                <GoNote/> <strong className="note-title">{props.note.title}</strong><span>{props.note.updated.replace("T", ", ").slice(0, 17)}</span>
            </Link>
        </div>
    )
}