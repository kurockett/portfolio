import React, {useContext} from 'react'
import {Context} from "../context/context";

export default () => {
    const {cart, successAlert} = useContext(Context)
    return (
        <div style={{marginTop: '1rem', display: successAlert ? 'none' : 'block'}} className="alert alert-success"
             role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Vacancy has been added to cart</p>
            <p>Title: {[...cart].pop().title}</p>
            <p className="mb-0">A couple of seconds before the alert closes</p>
        </div>
    )
}