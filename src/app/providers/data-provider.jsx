"use client"

import { DataContext } from "../context/data-context";

const DataProvider = ({children}) => {
    const dataValues = {
        title: "Food website",
        description: "description"
    }
    return <DataContext value={dataValues}>{children}</DataContext>
};

export default DataProvider;