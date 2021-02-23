import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      currentPage: 1,
    }
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  };

  load = () => {
    const { currentPage } = this.state;

    getUsers(currentPage)
      .then(data => this.setState({
        users: data.results,
      })
      )
      .catch(() =>
        this.setState({
          isError: true,
        })
      ).finally(() =>
        this.setState({
          isFetching: false
        })
      );
  };

  prevPage = () => this.setState({ currentPage: this.state.currentPage - 1 });
  nextPage = () => this.setState({ currentPage: this.state.currentPage + 1 });


  render() {
    const { users, isFetching, isError } = this.state;

    if (isError) {
      return <div>Error</div>
    }
    if (isFetching) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>User list</h1>

        <button onClick={this.prevPage}>prev</button>
        <button onClick={this.nextPage}>next</button>
        {isFetching && <div>Loading...</div>}
        <ul>
          {users.map(user => <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>)}
        </ul>
      </div>
    );
  }
}

export default UsersLoader;