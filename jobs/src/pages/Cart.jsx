import React, {useContext, useEffect} from "react";
import CartItem from "../components/CartItem";
import {Context} from "../context/context";
import SuccessAlert from "../components/SuccessAlert";

export default () => {
    const {cart, setSuccessAlert, added, setAdded} = useContext(Context)
    useEffect(() => {
        if (cart.length > 0 && added) {
            setSuccessAlert(false)
            setTimeout(() => {
                setSuccessAlert(true)
                setAdded(false)
            }, 2000)
        }
    }, [cart])
    if (!cart.length) {
        return <h2 className="text-center mt-2">No data!</h2>
    }
    return (
        <div className="container-md">
            <SuccessAlert/>
            {cart.map(item => <CartItem item={item} key={item.uuid}/>)}
        </div>
    )
}