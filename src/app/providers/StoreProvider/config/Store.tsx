import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {createReducerManager} from "./reducerManager";
import {StateSchema} from "./StateSchema";
import {userReducer} from "../../../../entities/User/model/slice/useSlice";
import {loginReducer} from "../../../../features/AithByUsername/model/slice/loginSlice";


export function createReduxStore(
    initialState?: StateSchema,
    // asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers = {
        // ...asyncReducers,
        user: userReducer,
        loginForm:loginReducer,
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
