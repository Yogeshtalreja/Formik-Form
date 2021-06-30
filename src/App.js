import React from 'react'
import Fetch from './Fetch';
import Save from './Save';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
return(
               
<Router>
<Switch>
    <Route exact path="/fetchh">
    <Fetch />
    </Route>

    <Route exact path="/save">
    <Save />
    </Route>
</Switch>

</Router>


);

 
} 

export default App;