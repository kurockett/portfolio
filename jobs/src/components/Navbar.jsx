import React, {useContext, useState} from "react";
import {AddShoppingCart, Search} from '@material-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import {Context} from "../context/context";

export default () => {
    const {cart, setSearch} = useContext(Context)
    const history = useHistory()
    const submitHandler = (event) => {
        event.preventDefault()
        history.push('/')
    }
    return (
        <nav className="navbar navbar-light bg-dark mb-4">
            <div className="container-md">
                <Link style={{fontSize: '30px'}} to="/" className="nav-link text-light">Home</Link>
                <form className="d-flex align-items-center collapse" onSubmit={submitHandler}>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Поиск вакансий..."
                        aria-label="Search"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="btn btn-outline-light ml-2 mr-3" type="submit"><Search/></button>
                    <Link
                        className="btn btn-outline-light d-flex justify-content-center align-items-center position-relative"
                        to="/cart">
                        <span className="badge bg-danger rounded-pill">{cart.length}</span>
                        <AddShoppingCart/>
                    </Link>
                </form>
            </div>
        </nav>
    )
}