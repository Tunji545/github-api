import React from "react";
import GithubProfile from "./GithubProfile";
import Form from "./GithubSearchForm";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: {}
    };
  }

  componentDidMount() {
    this.handleSearch("Tunji545");
  }

  handleSearch = (searchTerm) => {
    console.log(searchTerm); 
    this.setState({
      isLoading: true
    });
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          userName: data
        });
      });
  };

  render() {
    return (
      <div>
        <Form onSearch={this.handleSearch} />
        {this.state.userName.name ? (
          <GithubProfile
            userName={this.state.userName.name}
            avatar={this.state.userName.avatar_url}
            bio={this.state.userName.bio}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
