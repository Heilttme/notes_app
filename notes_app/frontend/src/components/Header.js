import React from "react";
import { BiNotepad } from "react-icons/bi"

export default function Header(props) {
    return (
        <div className="header"> 
            <BiNotepad/> <strong>Your Notes</strong>{props.showEditButton && <button onclick={props.toggleEditing(prev => !prev)} className="edit-button">Edit</button>}
        </div>
    )
}