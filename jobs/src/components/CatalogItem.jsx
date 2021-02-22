import React, {useContext} from "react";
import {Context} from "../context/context";
import {Add} from '@material-ui/icons';
import {useHistory} from "react-router-dom";

export default ({item}) => {
    const {addToCart, setWarningAlert, checkOnDublicates, alerting, setAlerting, setAdded} = useContext(Context)
    const history = useHistory()
    return (
        <div style={{marginBottom: '1rem'}} className="card text-center bg-dark">
            <div className="card-body text-light d-flex justify-content-between align-items-center">
                <h5 style={{width: '200px', textAlign: 'left'}} className="card-title">{item.title}</h5>
                <p className="card-text ml-2 mr-3">Job Vacancy</p>
                <button className="btn btn-success"
                        type="button"
                        onClick={() => {
                            if (!checkOnDublicates(item)) {
                                addToCart(item)
                                setAdded(true)
                                history.push('/cart')
                            } else {
                                setWarningAlert(true)
                                setAlerting(true)
                                setTimeout(() => {
                                    setWarningAlert(false)
                                    setAlerting(false)
                                }, 2000)
                            }
                        }}
                        disabled={alerting}
                ><Add/></button>
            </div>
        </div>
    )
}
