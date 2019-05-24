import React, { Component } from 'react';
import {connect} from 'react-redux';

class PhoneDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {
          JSON.stringify(this.props.state)
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
    // Reducers
  };
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetail)
