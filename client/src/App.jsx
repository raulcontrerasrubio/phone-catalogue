import React from 'react';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';
import {connect} from 'react-redux';

function App() {
  return (
    <Switch className="App">
      <Route exact path="/" component={PhoneList}/>
      <Route path="/:id" component={PhoneDetail}/>
      <Route render={()=><Redirect to="/"/>}/>
    </Switch>
  );
}

function mapStateToProps(state) {
   return {
     state
   };
 
}

function mapDispatchToProps(dispatch) {
return {
   
   increment: () => dispatch({type: 'INCREMENT'}),
   decrement: () => dispatch({type: 'DECREMENT'})
 };
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);