import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';
import {Link} from 'react-router-dom';
import './PhoneDetail.scss';

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
      <React.Fragment>
        <div className="Phone">
          <h1 className="Phone__name">{this.props.state.phones.name}</h1>
          <img className="Phone__image" src={`/images/${this.props.state.phones.imageFileName}`}/>
          <div className="Phone__manufacturer">{this.props.state.phones.manufacturer}</div>
          <div className="Phone__description">{this.props.state.phones.description}</div>
          <div className="Phone_  _price">{this.props.state.phones.price}€</div>
          <div className="Phone__info">
            <div className="Phone__color">Color:
              <div className="Phone__color-box" style={{backgroundColor: this.props.state.phones.color}}></div>
            </div>
            <div className="Phone__screen"><span className="Phone__screen-label">Screen:</span> {this.props.state.phones.screen}</div>
            <div className="Phone__processor"><span className="Phone__processor-label">Processor:</span> {this.props.state.phones.processor}</div>
            <div className="Phone__ram"><span className="Phone__ram-label">RAM:</span> {this.props.state.phones.ram}</div>
          </div>
        </div>
        <Link className="btn" to="/">Go back</Link>
      </React.Fragment>
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
