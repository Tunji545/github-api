import React from "react";

class GithubProfile extends React.Component {
  render() {
    // const results = this.state.isLoading ? "Loading..." : this.state.userName;
    return (
      <div className="github-user">
        <img
          className="github-user_avatar"
          src={this.props.avatar}
          width="200"
          height="200"
          alt="Avatar"
        />
        <div className="github-user_info">
          <p>{this.props.userName}</p>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default GithubProfile;
