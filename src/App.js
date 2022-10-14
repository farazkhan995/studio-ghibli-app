import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
class App extends Component  {
  constructor() {
    super();
    this.state = {
      movies : [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films").then((response) => response.json()).then((users) => this.setState({movies:users}));
  }
  
  render() {
    const {movies, searchField} = this.state;
    const filteredMovies = movies.filter((movie)=> 
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <img src="https://taniarascia.github.io/sandbox/ghibli/logo.png" alt="studio-ghibli" />
      <input className= "search-box" type= "search" placeholder='search movie' onChange={(event) => {
        this.setState({searchField: event.target.value})
      }} />
      <CardList movies = {filteredMovies} />
      </div>
    );
  }
  }
 

export default App;
