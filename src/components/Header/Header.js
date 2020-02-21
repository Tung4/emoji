import React, { useContext } from 'react'
import { Context } from '../../contexts/modal'

export default function Header() {
    const Status = useContext(Context)
    // console.log(Context.changeStatus);
    
    return (
        <div className="header">
                <input type="checkbox" onClick={Status.changeStatus}></input>
                <label htmlFor="vehicle1"> Enable Emoji Mode</label>
            </div>
    )
}
