import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './PhoneCard.scss';

export default class PhoneCard extends Component {
  render() {
    return (
      <div className="PhoneCard"> 
        <img className="PhoneCard__image" src={`./images/${this.props.imageFileName}`} alt={this.props.name}/>
        <Link className="btn" to={`/phone/${this.props.id}`}>
          <p>{this.props.name}</p>
        </Link>
      </div>
    )
  }
}
