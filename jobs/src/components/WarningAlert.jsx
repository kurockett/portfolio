import React, {useContext} from 'react'
import {Context} from "../context/context";

export default () => {
    const {warningAlert} = useContext(Context)
    return (
        <div style={{marginTop: '1rem', display: !warningAlert ? 'none' : 'block'}} className="alert alert-warning"
             role="alert">
            <h4 className="alert-heading">Warning!</h4>
            <p>A duplicate was found!</p>
            <p className="mb-0">Please check your vacancies cart!</p>
        </div>
    )
}