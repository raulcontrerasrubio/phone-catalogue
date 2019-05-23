import React, { Component } from 'react';
import {connect} from 'react-redux';

class PhoneDetail extends Component {
  render() {
    return (
      <div>
        Phone Specific Component
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
    // Reducers
  };
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetail)
