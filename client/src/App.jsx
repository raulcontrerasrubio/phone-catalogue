import React from 'react';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PhoneList}/>
        <Route path="/phone/:id" component={PhoneDetail}/>
        <Route render={()=><Redirect to="/"/>}/>
      </Switch>
    </div>
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