import React, { Component } from "react";
import SearchBox from "../components/searchBox";
import Cards from "../components/Cards";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchContent: "",
    };
  }

  search = ({ target }) => this.setState({ searchContent: target.value });

  render() {
    const { users, searchContent } = this.state;

    const filteredUsers = users.filter(({ login }) =>
      login.toLowerCase().includes(searchContent.toLowerCase())
    );

    return users.length === 0 ? (
      <h2>Loading</h2>
    ) : (
      <div id="app">
        <h1>Github Users</h1>

        <SearchBox fn={this.search} />

        <Cards users={filteredUsers} />
      </div>
    );
  }

  componentDidMount = async () => {
    try {
      const response = await fetch("https://api.github.com/users");

      const users = await response.json();

      this.setState({ users: users });
    } catch (error) {
      console.log(error);
    }
  };
}

export default App;
