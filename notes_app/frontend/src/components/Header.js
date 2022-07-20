import React from "react";
import { BiNotepad } from "react-icons/bi"

export default function Header() {
    return (
        <div className="header"> 
            <BiNotepad/> <strong>Your Notes</strong>
        </div>
    )
}