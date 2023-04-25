import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface ILanguage{
    currentLanguage: any
}

const initialState:ILanguage={
  currentLanguage: "EN"
}

export const languageSlice = createSlice({
    name:"languageSlice",
    initialState,
    reducers:{
            getLanguage:(state)=>{
                return state.currentLanguage
            },
            setLanguage:(state,action:PayloadAction<string>)=>{
                state.currentLanguage = action.payload
            }
        }

    
})

export default languageSlice.reducer