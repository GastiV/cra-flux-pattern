import React, {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const StoreContext = createContext({});

const initialState = {fruits: ['banana', 'manzana']};

export const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>
}