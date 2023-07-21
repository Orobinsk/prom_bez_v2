import React from 'react';
import { AppRouter } from './providers/router';
import {NavBar} from "../widgets/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <div  className="content-page">
            <AppRouter />
        </div>
    </div>
  );
}

export default App;
