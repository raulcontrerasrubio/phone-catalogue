import axios from 'axios';

export default class phoneService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000'
    });
  }

  getPhones(){
    return this.service.get('/phones')
      .then(data => data.data);
  }
}