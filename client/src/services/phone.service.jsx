import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export default class phoneService{
  static getPhones(){
    return axios.get(`${BASE_URL}/phones`)
      .then(data => {
        return data.data.data;
      })
      .catch(err => console.log(err));
  }
}