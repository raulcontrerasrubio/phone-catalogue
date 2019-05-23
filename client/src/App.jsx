import React from 'react';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PhoneList}/>
        <Route path="/:id" component={PhoneDetail}/>
        <Route render={()=><Redirect to="/"/>}/>
      </Switch>
    </div>
  );
}

export default App;