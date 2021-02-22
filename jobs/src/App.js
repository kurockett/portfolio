import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Navbar from './components/Navbar'
import Cart from "./pages/Cart";
import Home from './pages/Home'
import {Context} from "./context/context";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [search, setSearch] = useState('')
    const [successAlert, setSuccessAlert] = useState(false)
    const [warningAlert, setWarningAlert] = useState(false)
    const [loading, setLoading] = useState(true)
    const [alerting, setAlerting] = useState(false)
    const [added, setAdded] = useState(false)
    const addToCart = (newItem) => {
        setCart(prevState => prevState.concat([newItem]))
    }
    const removeFromCart = (id) => {
        setCart(prevState => prevState.filter((item) => item.uuid !== id))
    }
    const searchFromItems = (title) => {
        setFilteredData(data.filter((item) => item.title.toLowerCase().includes(title.toLowerCase().trim())))
    }
    const checkOnDublicates = (item) => cart.includes(item)

    useEffect(() => {
        fetch('http://api.dataatwork.org/v1/jobs')
            .then(res => res.json()).then(res => {
            setData(res.splice(0, res.length - 1))
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        searchFromItems(search)
    }, [search, loading, data])
    return (
        <Context.Provider
            value={{
                cart,
                data,
                successAlert,
                warningAlert,
                loading,
                alerting,
                added,
                filteredData,
                setSuccessAlert,
                setWarningAlert,
                setLoading,
                setSearch,
                setAlerting,
                setAdded,
                addToCart,
                removeFromCart,
                searchFromItems,
                checkOnDublicates
            }}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Context.Provider>
    );
}

export default App;
