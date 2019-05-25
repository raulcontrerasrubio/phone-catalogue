import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import PhoneService from '../../services/phone.service';
import PhoneCard from '../Phone/PhoneCard';
import './PhoneList.scss';
import Loader from '../Loader/Loader';

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
          this.props.state.isFetching ?
          <React.Fragment>
            <h1>Phone Catalogue</h1>
            <Loader/>
          </React.Fragment> :
          this.props.state.phones && this.props.state.phones.length !== 0 ?
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
          </React.Fragment> :
          <React.Fragment>
            <h1>Phone Catalogue</h1>
            <p>There are no phones!</p>
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
      dispatch({type:'MAKE_REQUEST'});
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