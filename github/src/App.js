import React from 'react';
import Cards from './Components/Cards'
import axios from 'axios'
import styled from 'styled-components'
import GitHub from './Images/GitHub.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      folowers: [],
      search: '',

    }
  }
  
  // LifeCycle Methods
  componentDidMount() {
    // fetch axios data
    axios.get(`https://api.github.com/users/KSClopton`)
    .then(data => {
      console.log(this.state.searchUser)
      console.log(this.search)
      this.setState({
        users: data.data
      })
    })
    .catch(err => {
      console.log('axios request is not working!')
    })
  }

  getNewUser = (newUser) => {
      axios.get(`https://api.github.com/users/${newUser.searchUser}`)
      .then(data => {
        console.log(this.state.searchUser)
        this.setState({
          users: data.data
        })})
      .catch(err => {
        console.log('This search request is not working!')
      })
      }

  onInputChange = e => {
    this.setState({
      search: e.target.value
    })}

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.search)
    const newUser = {
      searchUser: this.state.search.trim()
    }
    console.log(`The person is: ${newUser}`)
    this.getNewUser(newUser)

  }

  render() {
    return (
    <div className="App">

      <NavItems>
        <img src={GitHub} height='75px' width='75px' />
        <h1>GitHub Profile</h1>
        <Container>
          <nav className="nav-list">
            <a>Home</a>
            <a>About</a>
            <a>News</a>
          </nav>
          <SearchBar>
            <form onSubmit={this.handleSubmit}>
              <input placeholder='Search for Users' type='text' value={this.state.serach} name='search' onChange={this.onInputChange}/>
              <button>Search</button>
            </form>
          </SearchBar>
        </Container>
      </NavItems>
      <Cards gitUsers={this.state.users}/>
    </div>
  );
  }}

const SearchBar = styled.div`
  
  button{
    background-color: rgb(45,45,54);
    color: grey;
  }


`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
 
`
const NavItems = styled.div`
  background-color: rgb(45, 45, 54);
  color: white;
  padding: 1%;
  display: flex;
  justify-content: space-evenly;


    input {
      line-height: 1rem;
      font-size: 1rem;
      height: 25px;
      background-color: rgb(45, 45, 54);
      border: none;
      border-bottom: red 1px solid;
      padding-top: 4%;
      color: white;
    }

    nav{
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding-bottom: 8%;

  }
`
export default App;
