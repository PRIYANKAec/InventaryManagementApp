import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarcollapsed: (state,  action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode : (state,  action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const  {setIsSidebarcollapsed, setIsDarkMode} = globalSlice.actions;

export default globalSlice.reducer;