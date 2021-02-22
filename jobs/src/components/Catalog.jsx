import React, {useContext, useEffect} from 'react'
import {Context} from "../context/context";
import CatalogItem from "./CatalogItem";
import Loader from "./Loader";

export default () => {
    const {filteredData, loading} = useContext(Context)
    if (loading) {
        return <Loader/>
    }
    if (!filteredData.length) {
        return <h2 className="text-center mt-1">No data!</h2>
    }
    return filteredData.map((item) => <CatalogItem item={item} key={item.uuid}/>)
}