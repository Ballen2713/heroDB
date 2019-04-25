
const URI ="mongodb+srv://kwabena:kwabena@testproject-huxcs.mongodb.net/test";

const http = {
  fetchHero = (BirthName) => {
    this.setState({ ...this.state, isFetching: true })
    axios.get(URI + "\\", birthName)
      .then(response => this.setState({
        Hero: response.data,
        isFetching: false
      }))
      .catch(e => console.log(e));
  },
  fetchCatalog = () => {
    this.setState({ ...this.state, isFetching: true })
    axios.get(URI + "\\catalog")
      .then(response => this.setState({
        Heroes: response.data,
        isFetching: false
      }))
      .catch(e => console.log(e));
  },
  postHero = (Hero) => {
    handleSubmit = event => {
      axios.post(URI, Hero)
        .then(r => console.log(r))
        .catch(e => console.log(e));

      event.preventDefault();
    }
  }
}

export default http;