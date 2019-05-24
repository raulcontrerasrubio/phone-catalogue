import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';

class PhoneList extends Component {

  constructor(props){
    super(props);
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount(){
    this.props.getPhones();
  }

  render() {
    return (
      <div>
        {
          JSON.stringify(this.props)
        }
      </div>
    )
  }
}

function getPhones(){
  new PhoneService().getPhones()
    .then(phones => {
      return {
        displayPhones: phones
      }
    })
    .catch(error => {
      console.log(error);
      // return state;
    });
}

function mapStateToProps(state) {
  return {
    displayPhones: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhones: () => dispatch({type:'GET_PHONES', payload: getPhones()}),
  };
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList)