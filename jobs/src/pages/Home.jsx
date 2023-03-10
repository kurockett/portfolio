import React from "react";
import Catalog from "../components/Catalog";
import WarningAlert from "../components/WarningAlert";

export default () => {
    return (
        <div className="container-md">
            <WarningAlert/>
            <Catalog/>
        </div>
    )
}