import React from "react";
import { BiNotepad } from "react-icons/bi"

export default function Header(props) {
    function toggleEdit(){
        props.toggleEditing(prev => !prev)
    }
    return (
        <div className="header"> 
            <BiNotepad/> <strong>Your Notes</strong>{props.showEditButton && <button onClick={toggleEdit} className="edit-button">Edit</button>}
        </div>
    )
}