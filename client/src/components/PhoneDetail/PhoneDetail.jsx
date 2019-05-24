import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';
import {Redirect} from 'react-router-dom';

class PhoneDetail extends Component {
  constructor(props){
    super(props);
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount(){
    this.props.getPhoneById(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="name">{this.props.state.phones.name}</div>
        <div className="manufacturer">{this.props.state.phones.manufacturer}</div>
        <div className="description">{this.props.state.phones.description}</div>
        <div className="color">{this.props.state.phones.color}</div>
        <div className="price">{this.props.state.phones.price}</div>
        <div className="image">{this.props.state.phones.imageFileName}</div>
        <div className="screen">{this.props.state.phones.screen}</div>
        <div className="processor">{this.props.state.phones.processor}</div>
        <div className="ram">{this.props.state.phones.ram}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhoneById: (id) => {
      PhoneService.getPhones()
        .then(phones => {
          dispatch({type:'GET_PHONES', payload: phones.filter(phone => phone.id === +id)[0]})
        })
        .catch(error => {
          console.log(error);
        });
    },
  };
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetail)
