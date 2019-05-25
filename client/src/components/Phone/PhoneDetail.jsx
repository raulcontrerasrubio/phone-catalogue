import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';
import {Link, Redirect} from 'react-router-dom';
import './PhoneDetail.scss';
import Loader from '../Loader/Loader';

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
        {
          this.props.state.isFetching ?
            <Loader/> :
          !this.props.state.phoneDetail ?
            <Redirect to="/"/> :
          <React.Fragment>
            <div className="Phone">
              <h1 className="Phone__name">{this.props.state.phoneDetail.name}</h1>
              <img className="Phone__image" src={`/images/${this.props.state.phoneDetail.imageFileName}`} alt={this.props.state.phoneDetail.name}/>
              <div className="Phone__manufacturer">{this.props.state.phoneDetail.manufacturer}</div>
              <div className="Phone__description">{this.props.state.phoneDetail.description}</div>
              <div className="Phone_  _price">{this.props.state.phoneDetail.price}€</div>
              <div className="Phone__info">
                <div className="Phone__color">Color:
                  <div className="Phone__color-box" style={{backgroundColor: this.props.state.phoneDetail.color}}></div>
                </div>
                <div className="Phone__screen"><span className="Phone__screen-label">Screen:</span> {this.props.state.phoneDetail.screen}</div>
                <div className="Phone__processor"><span className="Phone__processor-label">Processor:</span> {this.props.state.phoneDetail.processor}</div>
                <div className="Phone__ram"><span className="Phone__ram-label">RAM:</span> {this.props.state.phoneDetail.ram}</div>
              </div>
            </div>
            <Link className="btn Phone__btn" to="/">Go back</Link>
          </React.Fragment>
        }
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
      dispatch({type:'MAKE_REQUEST'});
      PhoneService.getPhones()
        .then(phones => {
          dispatch({type:'GET_PHONE_DETAIL', phoneDetail: phones.filter(phone => phone.id === +id)[0]})
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
