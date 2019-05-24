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
          this.props.state.phones.length === 0 ?
          <div>Loading...</div> :
          <ul>
            {
              this.props.state.phones.map(phone => {
                return <li key={phone.id}>{phone.name}</li>
              })
            }
          </ul>
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
          dispatch({type:'GET_PHONES', payload: phones})
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