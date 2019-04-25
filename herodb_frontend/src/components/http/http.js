import React from 'react';

const URI ="mongodb+srv://kwabena:kwabena@testproject-huxcs.mongodb.net/test";

const http = {
  fetchHero = (BirthName) => {
    this.setState({ ...this.state, isFetching: true })
    axios.get(URI, BirthName)
      .then(response => this.setState({
        Hero: response.data,
        isFetching: false
      }))
      .catch(e => console.log(e));
  }
}

export default http;