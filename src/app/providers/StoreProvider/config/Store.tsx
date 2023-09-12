import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {createReducerManager} from "./reducerManager";
import {StateSchema} from "./StateSchema";
import {userReducer} from "../../../../entities/User/model/slice/useSlice";
import {loginReducer} from "../../../../features/AuthByUsername/model/slice/loginSlice";
import {questionsReducer} from "../../../../entities/Questions";


export function createReduxStore(
    initialState?: StateSchema,
    // asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers = {
        // ...asyncReducers,
        user: userReducer,
        loginForm:loginReducer,
        questions:questionsReducer,
    };

    const reducerManager = createReducerManager(rootReducers);


    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch= ReturnType<typeof createReduxStore>['dispatch']
