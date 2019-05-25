import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';
import PhoneCard from '../Phone/PhoneCard';
import './PhoneList.scss';

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
      <div className="PhoneList">
        {
          this.props.state.phones.length === 0 ?
          <div>Loading...</div> :
          <React.Fragment>
            <h1>Phone Catalogue</h1>
            <div className="PhoneList__card">
              {
                this.props.state.phones.map(phone => {
                  return (
                    <PhoneCard {...phone} key={phone.id}/>
                  )
                })
              }
            </div>
          </React.Fragment>
        }
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
    getPhones: () => {
      PhoneService.getPhones()
        .then(phones => {
          dispatch({type:'GET_PHONES', phones})
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
)(PhoneList)