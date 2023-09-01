import React, {useEffect} from 'react';
import { AppRouter } from './providers/router';
import {NavBar} from "../widgets/NavBar";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User/model/slice/useSlice";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userActions.initAuthData())
    }, [dispatch])

  return (
    <div className="App">
        <NavBar />
        <div className="content-page">
            <AppRouter />
        </div>
    </div>
  );
}

export default App;
