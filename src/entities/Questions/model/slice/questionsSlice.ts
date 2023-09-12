import {createSlice} from "@reduxjs/toolkit";
import {QuestionsSchema} from "../types/questions";


const initialState: QuestionsSchema = {
};

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {

    }
});

// Action creators are generated for each case reducer function
export const { actions: questionsActions } = questionsSlice;
export const { reducer: questionsReducer } = questionsSlice;
