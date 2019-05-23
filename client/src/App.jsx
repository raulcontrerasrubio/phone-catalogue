import React from 'react';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=><div>Hello world 2</div>}/>
        <Route path="/:id" render={()=><div>Hello specific</div>}/>
        <Route render={()=><Redirect to="/"/>}/>
      </Switch>
    </div>
  );
}

export default App;