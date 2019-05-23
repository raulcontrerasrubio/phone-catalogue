import axios from 'axios';

export default class phoneService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api'
    });
  }

  getPhones(){
    return this.service.get('/phones');
  }
}