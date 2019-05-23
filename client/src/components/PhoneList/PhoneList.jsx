import React, { Component } from 'react';
import {connect} from 'react-redux';

class PhoneList extends Component {
  render() {
    return (
      <div>
        PhoneList component
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
)(PhoneList)