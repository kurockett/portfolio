import React, {useContext} from "react";
import {RemoveCircle} from "@material-ui/icons";
import {Context} from "../context/context";

export default ({item}) => {
    const {removeFromCart} = useContext(Context)
    return (
        <div style={{marginBottom: '1rem'}} className="card text-center bg-dark">
            <div className="card-body text-light d-flex justify-content-between align-items-center">
                <h5 style={{width: '200px', textAlign: 'left'}} className="card-title">{item.title}</h5>
                <p className="card-text ml-2 mr-3">Job Vacancy</p>
                <button className="btn btn-danger w-auto"
                        type="button"
                        onClick={() => removeFromCart(item.uuid)}
                ><RemoveCircle/></button>
            </div>
        </div>
    )
}