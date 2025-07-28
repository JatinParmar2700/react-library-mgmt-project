import { Books as initialBooks } from "../utils/mockData";
import {createSlice , nanoid} from "@reduxjs/toolkit";

const booksSlice=createSlice({
name:"books",
initialState:initialBooks,
reducers :{
addBook:{
    reducer(state,action){
        state.push(action.payload)   //adding new book
    },
prepare(newBook){
    
    return {
        payload:{
            id:nanoid() , //generate for unique id
            coverUrl: newBook.coverUrl ||"https://via.placeholder.com/250x350?text=No+Cover", //for default cover
            ...newBook,

        },
    };
},

},

},
})

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer ;