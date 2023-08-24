import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {UserSchema} from "../../../../entities/User/model";
import {LoginSchema} from "../../../../features/AithByUsername";


export interface StateSchema {
    user: UserSchema
    loginForm: LoginSchema
    // Асинхронные редюсеры
    // loginForm?: LoginSchema
    // profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction)=>CombinedState<StateSchema>
    add: (key:StateSchemaKey, reducer:Reducer) => void,
    remove:(key:StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
reducerManager: ReducerManager
}

